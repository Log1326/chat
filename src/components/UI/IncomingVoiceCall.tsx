import { Popup } from '@/UI/Popup'
import Image from 'next/image'
import { MdOutlineCall, MdOutlineCallEnd } from 'react-icons/md'

export const IncomingVoiceCall = () => {
	const accept = () => {}
	const reject = () => {}
	return (
		<Popup>
			<div className='flex gap-4 justify-around items-center'>
				<div className='grid place-items-center'>
					<span>{'voice'}</span>
					<Image
						src={'/default_avatar.png'}
						alt={'image'}
						height={50}
						width={50}
						className='rounded-full bg-gray-500 p-2'
					/>
					<span className='text-white text-lg'>{'Antonio'}</span>
				</div>

				<div className='flex gap-4'>
					<button className='text-green-600 bg-gray-900  rounded-full cursor-pointer hover:bg-gray-600'>
						<MdOutlineCall title='call accept' className='h-8 w-8 p-1' />
					</button>
					<button className='text-red-600 bg-gray-900  rounded-full cursor-pointer hover:bg-gray-600'>
						<MdOutlineCallEnd title='call reject' className='h-8 w-8 p-1' />
					</button>
				</div>
			</div>
		</Popup>
	)
}
