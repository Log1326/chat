import Image from 'next/image'
import { MdOutlineCall, MdOutlineCallEnd } from 'react-icons/md'
import { CallStateIncoming } from '@/store/call/call.types'

interface IncomingContainerProps {
	accept: () => void
	reject: () => void
	info: CallStateIncoming
}
export const IncomingContainer = ({
	info,
	reject,
	accept
}: IncomingContainerProps) => {
	return (
		<div data-testid='IncomingContainer' className='flex flex-1 gap-4'>
			<Image
				src={info?.user.image ?? '/default_avatar.png'}
				alt={info.user.name}
				height={100}
				width={100}
				className='rounded-full bg-gray-500 p-2'
			/>
			<div className='flex flex-col items-start gap-2 text-white '>
				<span className='w-48 overflow-hidden text-ellipsis text-lg'>
					{info?.user.name}
				</span>
				<p className='flex gap-2'>
					<span className='capitalize'>{info?.type}</span>
					<span>{info?.callType}</span>
					<span>call</span>
				</p>

				<div className='flex items-center justify-center gap-2'>
					<button
						onClick={accept}
						className='inline-flex cursor-pointer items-center gap-2 rounded-lg bg-gray-900 px-2  py-1 text-green-600 hover:bg-gray-600'
					>
						<span>Accept</span>
						<MdOutlineCall
							title='call accept'
							className='h-8 w-8 p-1'
						/>
					</button>
					<button
						data-testid='button-reject-incoming-container-call'
						onClick={reject}
						className='inline-flex cursor-pointer items-center gap-2 rounded-lg bg-gray-900 px-2  py-1 text-red-600 hover:bg-gray-600'
					>
						<span>Reject</span>
						<MdOutlineCallEnd
							title='call reject'
							className='h-8 w-8 p-1'
						/>
					</button>
				</div>
			</div>
		</div>
	)
}
