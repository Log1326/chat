import { MdOutlineCallEnd } from 'react-icons/md'
import Image from 'next/image'
import { useActions } from '@/hooks/useActions'
import { CallState } from '@/store/call/call.types'
import { useSelector } from 'react-redux'
import { getSocketState } from '@/store/message/message.selectors'
import { useEffect } from 'react'
import { REJECT_VIDEO_CALL, REJECT_VOICE_CALL } from '@/utils/constants'
import { useKeyListener } from '@/hooks/useKeyListener'
import { getIsAcceptCall } from '@/store/call/call.selectors'
import { useZego } from '@/hooks/useZego'
import { Icon } from '@/UI/Icon'

type TypeContainer = 'video' | 'voice'
interface ContainerProps {
	type: TypeContainer
	data: CallState
}

export const Container = ({ type, data }: ContainerProps) => {
	const {
		state: { zgVar, localStream, publishStream }
	} = useZego(data)
	const {
		voiceCallOpenWindow,
		videoCallOpenWindow,
		setIncomingVoiceCall,
		setIncomingVideoCall,
		setIsAcceptCall,
		getTokenCallAsync,
		setEndCall
	} = useActions()
	const socketRef = useSelector(getSocketState)
	const acceptCall = useSelector(getIsAcceptCall)
	const checkTypeCall = type === 'voice'
	const handleCalled = () => {
		if (checkTypeCall) {
			socketRef?.emit(REJECT_VOICE_CALL, { to: data?.user.id })
			voiceCallOpenWindow(false)
			setIsAcceptCall(false)
			setIncomingVoiceCall(undefined)
			setEndCall()
			if (zgVar && localStream && publishStream) {
				zgVar.destroyStream(localStream)
				zgVar.stopPublishingStream(publishStream)
				zgVar.logoutRoom(data.roomId.toString())
			}
		} else {
			socketRef?.emit(REJECT_VIDEO_CALL, { to: data?.user.id })
			videoCallOpenWindow(false)
			setIsAcceptCall(false)
			setIncomingVideoCall(undefined)
			setEndCall()
			if (zgVar && localStream && publishStream) {
				zgVar.destroyStream(localStream)
				zgVar.stopPublishingStream(publishStream)
				zgVar.logoutRoom(data.roomId.toString())
			}
		}
	}
	useKeyListener({
		methodListener: 'keydown',
		pressButton: 'Escape',
		callback: handleCalled
	})
	useEffect(() => {
		getTokenCallAsync(String(data.user.id))
	}, [acceptCall, data.user.id])
	return (
		<div className='flex flex-col items-center gap-2'>
			<span className='text-xl text-white'>{`Calling ${type}`}</span>
			{data.callType === 'audio' && !zgVar && (
				<Image
					src={data.user.image ?? '/default_avatar.png'}
					alt={'image' + data.user.name}
					width={250}
					height={250}
					className='rounded-full bg-contain '
				/>
			)}
			<div id='local' />
			<div id='remote' />
			<p className='text-xl capitalize text-white'>{data.user.name}</p>
			<button
				onClick={handleCalled}
				className='cursor-pointer rounded-full  bg-gray-900 text-red-600 hover:bg-gray-600'
			>
				<Icon
					Svg={MdOutlineCallEnd}
					title='call reject'
					className='h-12 w-12 p-2'
				/>
			</button>
		</div>
	)
}
