import Image from 'next/image'
import { MdOutlineCall, MdOutlineCallEnd } from 'react-icons/md'
import { CallState } from '@/store/call/call.types'

interface IncomingContainerProps {
	accept: () => void
	reject: () => void
	info: CallState
}
export const IncomingContainer = ({
	info,
	reject,
	accept
}: IncomingContainerProps) => {
	return (
		<div className='flex flex-1 gap-4'>
			<Image
				src={info?.user.image ?? '/default_avatar.png'}
				alt={info?.user.image + 'image'}
				height={100}
				width={100}
				className='rounded-full bg-gray-500 p-2'
			/>
			<div className='flex flex-col gap-2 items-start text-white '>
				<span className='text-lg text-ellipsis w-48 overflow-hidden'>
					{info?.user.name}
				</span>
				<p className='flex gap-2'>
					<span className='capitalize'>{info?.type}</span>
					<span>{info?.callType}</span>
					<span>call</span>
				</p>

				<div className='flex gap-2 justify-center items-center'>
					<button
						onClick={accept}
						className='inline-flex items-center px-2 py-1 gap-2 text-green-600 bg-gray-900  rounded-lg cursor-pointer hover:bg-gray-600'
					>
						<span>Accept</span>
						<MdOutlineCall title='call accept' className='h-8 w-8 p-1' />
					</button>
					<button
						onClick={reject}
						className='inline-flex items-center px-2 py-1 gap-2 text-red-600 bg-gray-900  rounded-lg cursor-pointer hover:bg-gray-600'
					>
						<span>Reject</span>
						<MdOutlineCallEnd title='call reject' className='h-8 w-8 p-1' />
					</button>
				</div>
			</div>
		</div>
	)
}
