import { useEffect, useState } from 'react'
import process from 'process'
import { useSelector } from 'react-redux'
import { getTokenCall } from '@/store/call/call.selectors'
import { CallState } from '@/store/call/call.types'
import { useActions } from '@/hooks/useActions'
import { ZegoExpressEngine } from 'zego-express-engine-webrtc'

export function useZego(data: CallState) {
	const { setEndCall } = useActions()
	const token = useSelector(getTokenCall)
	const [zgVar, setZgVar] = useState<ZegoExpressEngine | undefined>(undefined)
	const [localStream, setLocalStream] = useState<MediaStream | undefined>(
		undefined
	)
	const [publishStream, setPublishStream] = useState<string>('')
	useEffect(() => {
		const startCall = async () => {
			import('zego-express-engine-webrtc').then(
				async ({ ZegoExpressEngine }) => {
					const zg = new ZegoExpressEngine(
						Number(process.env.ZEG_APP_ID),
						String(process.env.ZEG_APP_PUBLIC_SERVER)
					)
					setZgVar(zg)
					zg.on('roomStreamUpdate', async (_, updateType, streamList, __) => {
						if (updateType === 'ADD') {
							//this is incoming
							const rmVideo = document.getElementById('remote')
							const vd = document.createElement(
								data.callType === 'video' ? 'video' : 'audio'
							)
							vd.id = streamList[0].streamID
							vd.autoplay = true
							vd.className = 'h-full w-[350px] rounded-xl custom-img'
							//@ts-ignore
							vd.playsinline = true
							vd.muted = false
							if (rmVideo) rmVideo.appendChild(vd)
							zg.startPlayingStream(streamList[0].streamID, {
								audio: true,
								video: true
							}).then(stream => (vd.srcObject = stream))
						} else if (
							updateType === 'DELETE' &&
							zg &&
							// localStream &&
							streamList[0].streamID
						) {
							zg.destroyStream(localStream)
							zg.stopPublishingStream(streamList[0].streamID)
							zg.logoutRoom(data.roomId.toString())
							setEndCall()
						}
					})
					await zg.loginRoom(
						data.roomId.toString(),
						String(token),
						{
							userID: String(data.user.id),
							userName: String(data.user.name)
						},
						{ userUpdate: true }
					)
					const localStream = await zg.createStream({
						camera: { audio: true, video: data.callType === 'video' }
					})
					//this is outgoing
					const localVideo = document.getElementById('local')
					const videoElement = document.createElement(
						data.callType === 'video' ? 'video' : 'audio'
					)
					videoElement.id = 'local-zero'
					videoElement.className = 'h-full w-[250px] rounded-xl custom-img'
					videoElement.autoplay = true
					videoElement.muted = false
					// @ts-ignore
					videoElement.playsinline = true
					localVideo?.appendChild(videoElement)
					const td = document.getElementById('local-zero') as
						| HTMLVideoElement
						| HTMLAudioElement
					td.srcObject = localStream
					const streamId = '123' + Date.now()
					setPublishStream(streamId)
					setLocalStream(localStream)
					zg.startPublishingStream(streamId, localStream)
				}
			)
		}
		if (token) startCall()
	}, [token])
	return { state: { zgVar, localStream, publishStream } }
}
