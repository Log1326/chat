import { MdOutlineCallEnd } from 'react-icons/md'
import Image from 'next/image'
import { useHandleClickOutside } from '@/hooks/useHandleClickOutSide'
import { VIDEO_CALL_REF, VOICE_CALL_REF } from '@/constants/constants'
import { useActions } from '@/hooks/useActions'
import { useKeyListener } from '@/hooks/useKeyListener'
import { CallState } from '@/store/call/call.types'
import { REJECT_VIDEO_CALL, REJECT_VOICE_CALL } from '@/utils/constants'
import { useSelector } from 'react-redux'
import { getSocketState } from '@/store/message/message.selectors'
import { useCallback } from 'react'

type TypeContainer = 'video' | 'voice'
interface ContainerProps {
	type: TypeContainer
	data: CallState
}

export function Container({ type, data }: ContainerProps) {
	const { voiceCallOpenWindow, videoCallOpenWindow } = useActions()
	const socketRef = useSelector(getSocketState)
	const handleCalled = useCallback(() => {
		if (type === 'voice') {
			socketRef?.emit(REJECT_VOICE_CALL, { to: data?.id })
			voiceCallOpenWindow(false)
		} else {
			socketRef?.emit(REJECT_VIDEO_CALL, { to: data?.id })
			videoCallOpenWindow(false)
		}
	}, [type])
	const callRef = useHandleClickOutside({
		callback: () => handleCalled(),
		type: 'click',
		idElement: type === 'voice' ? VOICE_CALL_REF : VIDEO_CALL_REF
	})
	useKeyListener({
		methodListener: 'keydown',
		pressButton: 'Escape',
		callback: () => handleCalled()
	})
	return (
		<div ref={callRef} className='flex flex-col items-center gap-2 '>
			<span className='text-xl text-white'>{`Calling ${type}`}</span>
			<Image
				src={data.user.image ?? '/default_avatar.png'}
				alt={'image' + data.user.name}
				width={250}
				height={250}
				className='bg-contain  rounded-full '
			/>
			<p className='text-xl text-white capitalize'>{data.user.name}</p>
			<button
				onClick={handleCalled}
				className='text-red-600 bg-gray-900  rounded-full cursor-pointer hover:bg-gray-600'
			>
				<MdOutlineCallEnd title='call reject' className='h-12 w-12 p-2' />
			</button>
		</div>
	)
}
