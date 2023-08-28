import { useActions } from '@/hooks/useActions'
import { useCallback } from 'react'
import { IGetInitialUsersChat, IMessage } from '@/store/message/message.types'
import { IUser } from '@/store/user/user.types'
import { ChatTypeMessage } from '@/components/Chat/ChatTypeMessage'
import { Avatar } from '@/UI/Avatar'

interface ChatLIstItemProps {
	item: IGetInitialUsersChat<IUser>
}

export function ChatLIstItem({ item }: ChatLIstItemProps) {
	const { setSelectUser, toggleChatPage } = useActions()
	const handleSelectUser = useCallback(() => {
		setSelectUser(item)
		toggleChatPage(true)
	}, [])
	return (
		<>
			<div
				onClick={handleSelectUser}
				className='flex items-center  animate-fade justify-center hover:bg-gray-600 rounded-xl w-full px-10 gap-4 p-1 mt-2 cursor-pointer'
			>
				<div className='flex w-full '>
					<div className='flex items-center w-full gap-4'>
						<Avatar type='lg' value={item.image} />
						<article className='flex flex-col items-center justify-center'>
							<p className='text-xl'>{item.name}</p>
							<p className='text-gray-400 text-xs'>
								<ChatTypeMessage message={item as IMessage} compressed={true} />
							</p>
						</article>
					</div>
					{item.totalUnreadMessages && item.totalUnreadMessages > 0 ? (
						<div className='flex items-center'>
							<p className='flex justify-center items-center bg-teal-800 rounded-full h-8 w-8  p-2 text-white'>
								{item.totalUnreadMessages}
							</p>
						</div>
					) : null}
				</div>
			</div>
		</>
	)
}
