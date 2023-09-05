import { MdOutlineCallEnd } from 'react-icons/md'
import Image from 'next/image'
import { useActions } from '@/hooks/useActions'
import { CallState } from '@/store/call/call.types'
import { useSelector } from 'react-redux'
import { getSocketState } from '@/store/message/message.selectors'
import { memo, useEffect, useState } from 'react'
import {
	ACCEPT_CALL,
	REJECT_VIDEO_CALL,
	REJECT_VOICE_CALL
} from '@/utils/constants'
import { useKeyListener } from '@/hooks/useKeyListener'
import { AuthService } from '@/service/ApiRoutes'
import { getIsVoiceAcceptCall } from '@/store/call/call.selectors'
import process from 'process'
import { ZegoExpressEngine } from 'zego-express-engine-webrtc'

type TypeContainer = 'video' | 'voice'
interface ContainerProps {
	type: TypeContainer
	data: CallState
}

export const Container = memo(function ({ type, data }: ContainerProps) {
	const [token, setToken] = useState<string>('')
	const [zgVar, setZgVar] = useState<ZegoExpressEngine>()
	const [localStream, setLocalStream] = useState<MediaStream>()
	const [publishStream, setPublishStream] = useState('')

	const checkTypeCall = type === 'voice'
	const {
		voiceCallOpenWindow,
		videoCallOpenWindow,
		setIncomingVoiceCall,
		setIncomingVideoCall,
		setIsVoiceAcceptCall,
		setEndCall
	} = useActions()
	const socketRef = useSelector(getSocketState)
	const acceptCall = useSelector(getIsVoiceAcceptCall)
	const handleCalled = () => {
		if (checkTypeCall) {
			socketRef?.emit(REJECT_VOICE_CALL, { to: data?.user.id })
			voiceCallOpenWindow(false)
			setIncomingVoiceCall(undefined)
			if (zgVar && localStream && publishStream) {
				zgVar.destroyStream(localStream)
				zgVar.stopPublishingStream(publishStream)
				zgVar.logoutRoom(data.roomId.toString())
			}
		} else {
			socketRef?.emit(REJECT_VIDEO_CALL, { to: data?.user.id })
			videoCallOpenWindow(false)
			setIncomingVideoCall(undefined)
		}
	}
	useKeyListener({
		methodListener: 'keydown',
		pressButton: 'Escape',
		callback: handleCalled
	})
	useEffect(() => {
		if (data.type === 'outgoing')
			socketRef?.on(ACCEPT_CALL, () => setIsVoiceAcceptCall(true))
		else setTimeout(() => setIsVoiceAcceptCall(true), 1000)
	}, [data])
	useEffect(() => {
		const getToken = async () => {
			try {
				const {
					data: { token }
				} = await AuthService.generateToken(String(data.user.id))
				setToken(token)
			} catch (err) {
				console.log(err)
			}
		}
		getToken()
	}, [acceptCall])
	useEffect(() => {
		const startCall = async () =>
			import('zego-express-engine-webrtc').then(
				async ({ ZegoExpressEngine }) => {
					const zg = new ZegoExpressEngine(
						Number(process.env.ZEG_APP_ID),
						String(process.env.ZEG_APP_PUBLIC_SERVER)
					)
					setZgVar(zg)
					zg.on(
						'roomStreamUpdate',
						async (roomID, updateType, streamList, extendedData) => {
							if (updateType === 'ADD') {
								const rmVideo = document.getElementById('remote-video')
								const vd = document.createElement(
									data.callType === 'video' ? 'video' : 'audio'
								)
								vd.id = streamList[0].streamID
								vd.autoplay = true
								// vd.playsinline = true
								vd.muted = false
								if (rmVideo) rmVideo.appendChild(vd)
								zg.startPlayingStream(streamList[0].streamID, {
									audio: true,
									video: true
								}).then(stream => (vd.srcObject = stream))
							} else if (
								updateType === 'DELETE' &&
								zg &&
								localStream &&
								streamList[0].streamID
							) {
								zg.destroyStream(localStream)
								zg.stopPublishingStream(streamList[0].streamID)
								zg.logoutRoom(data.roomId.toString())
								setEndCall()
							}
						}
					)
					await zg.loginRoom(
						data.roomId.toString(),
						token,
						{
							userID: String(data.user.id),
							userName: String(data.user.name)
						},
						{ userUpdate: true }
					)
					const localStream = await zg.createStream({
						camera: {
							audio: true,
							video: data.callType === 'video'
						}
					})
					const localVideo = document.getElementById('local-audio')
					const videoElement = document.createElement(
						data.callType === 'video' ? 'video' : 'audio'
					)
					videoElement.id = 'video-local-zero'
					videoElement.className = 'h-28 w-32'
					videoElement.autoplay = true
					videoElement.muted = false
					// videoElement.playsinline = true
					localVideo?.appendChild(videoElement)
					const td = document.getElementById('video-local-zero')
					// td.srcObject = localStream
					const streamId = '123' + Date.now()
					setPublishStream(streamId)
					setLocalStream(localStream)
					zg.startPublishingStream(streamId, localStream)
				}
			)
		if (token) startCall()
	}, [token])
	return (
		<div className='flex flex-col items-center gap-2 '>
			<span className='text-xl text-white'>{`Calling ${type}`}</span>
			<Image
				src={data.user.image ?? '/default_avatar.png'}
				alt={'image' + data.user.name}
				width={250}
				height={250}
				className='bg-contain  rounded-full '
			/>
			<div className='my-5 relative' id='remote-video'>
				<div className='absolute bottom-5 right-5' id='local-audio'></div>
			</div>
			<p className='text-xl text-white capitalize'>{data.user.name}</p>
			<button
				onClick={handleCalled}
				className='text-red-600 bg-gray-900  rounded-full cursor-pointer hover:bg-gray-600'
			>
				<MdOutlineCallEnd title='call reject' className='h-12 w-12 p-2' />
			</button>
		</div>
	)
})
