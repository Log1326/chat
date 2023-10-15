import { MdOutlineCallEnd } from 'react-icons/md'
import Image from 'next/image'
import { useHandleClickOutside } from '@/hooks/useHandleClickOutSide'
import { VIDEO_CALL_REF, VOICE_CALL_REF } from '@/constants/constants'
import { useActions } from '@/hooks/useActions'
import { IoClose } from 'react-icons/io5'
import { useKeyListener } from '@/hooks/useKeyListener'
import { IUser } from '@/store/user/user.types'

type TypeContainer = 'video' | 'voice'
interface ContainerProps {
	type: TypeContainer
	data: IUser
}
export function Container({ type, data }: ContainerProps) {
	const { voiceCallOpenWindow, videoCallOpenWindow } = useActions()
	const handleCalled = (bool: boolean) =>
		type === 'voice' ? voiceCallOpenWindow(bool) : videoCallOpenWindow(bool)

	const callRef = useHandleClickOutside({
		callback: () => handleCalled(false),
		type: 'click',
		idElement: type === 'voice' ? VOICE_CALL_REF : VIDEO_CALL_REF
	})
	useKeyListener({
		methodListener: 'keydown',
		pressButton: 'Escape',
		callback: () => handleCalled(false)
	})
	return (
		<div ref={callRef} className='flex flex-col items-center gap-2'>
			<span className=''>{'Calling'}</span>
			<button onClick={() => handleCalled(false)}>
				<IoClose className='h-10 w-10 z-[50] text-white hover:opacity-60 cursor-pointer absolute top-0 right-0' />
			</button>
			<Image
				src={data.image ?? '/default_avatar.png'}
				alt={'image' + data.name}
				width={250}
				height={250}
				className='bg-contain  rounded-full '
			/>
			<p className='text-xl'>{'antonio'}</p>
			<button
				onClick={() => handleCalled(false)}
				className='text-red-600 bg-gray-900  rounded-full cursor-pointer hover:bg-gray-600'
			>
				<MdOutlineCallEnd title='call reject' className='h-12 w-12 p-2' />
			</button>
		</div>
	)
}
