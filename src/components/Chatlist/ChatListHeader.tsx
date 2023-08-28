import { Avatar } from '@/UI/Avatar'
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from 'react-icons/bs'
import { useActions } from '@/hooks/useActions'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getUserImage } from '@/store/user/user.selector'

export function ChatListHeader() {
	const { toggleChatPage } = useActions()
	const userImage = useSelector(getUserImage)

	const handleOpenChatList = useCallback(
		() => toggleChatPage(false),
		[toggleChatPage]
	)
	return (
		<article className='flex justify-between items-center  h-20 p-7 border-r-2 border-gray-400'>
			{userImage && (
				<Avatar type={'sm'} value={userImage} className='hover:opacity-70' />
			)}
			<span className='flex items-center gap-4 cursor-pointer text-white'>
				<button onClick={handleOpenChatList}>
					<BsFillChatLeftTextFill
						className='h-6 w-6 hover:opacity-70'
						title='Chat'
					/>
				</button>
				<button>
					<BsThreeDotsVertical
						className='h-6 w-6 hover:opacity-70'
						title='Options'
					/>
				</button>
			</span>
		</article>
	)
}
