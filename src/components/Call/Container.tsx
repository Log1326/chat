import { MdOutlineCallEnd } from 'react-icons/md'
import Image from 'next/image'
import { useActions } from '@/hooks/useActions'
import { CallState } from '@/store/call/call.types'
import { useSelector } from 'react-redux'
import { getSocketState } from '@/store/message/message.selectors'
import { memo, useEffect } from 'react'
import { REJECT_VIDEO_CALL, REJECT_VOICE_CALL } from '@/utils/constants'
import { useKeyListener } from '@/hooks/useKeyListener'
import { getIsAcceptCall } from '@/store/call/call.selectors'
import { useZego } from '@/hooks/useZego'

type TypeContainer = 'video' | 'voice'
interface ContainerProps {
	type: TypeContainer
	data: CallState
}

export const Container = memo(function ({ type, data }: ContainerProps) {
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
	}, [acceptCall])
	return (
		<div className='flex flex-col items-center gap-2'>
			<span className='text-xl text-white'>{`Calling ${type}`}</span>
			{data.callType === 'audio' && !zgVar && (
				<Image
					src={data.user.image ?? '/default_avatar.png'}
					alt={'image' + data.user.name}
					width={250}
					height={250}
					className='bg-contain  rounded-full '
				/>
			)}
			<div id='local' />
			<div id='remote' />
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
