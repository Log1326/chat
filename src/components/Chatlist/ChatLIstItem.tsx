import { useActions } from '@/hooks/useActions'
import { Avatar } from '@/UI/Avatar'
import { ChatTypeMessage } from '@/components/Chat/ChatTypeMessage'
import { IUser } from '@/store/user/user.types'
import { IGetInitialUsersChat, IMessage } from '@/store/message/message.types'

type ChatLIstItemProps<T> = {
	item: T extends IUser ? IUser : IGetInitialUsersChat<IUser>
}
export function ChatLIstItem<T>({ item }: ChatLIstItemProps<T>) {
	const { setSelectUser, toggleChatPage } = useActions()
	const handleSelectUser = () => {
		setSelectUser(item)
		toggleChatPage(true)
	}
	return (
		<>
			<div
				onClick={handleSelectUser}
				className='flex items-center animate-fade justify-center hover:bg-gray-600 rounded-xl w-full px-10 gap-4 p-1 mt-2 cursor-pointer'
			>
				<div className='flex w-full '>
					<div className='flex items-center w-full gap-4'>
						<Avatar
							type='lg'
							src={item.image}
							alt={item.name}
							title={item.name}
						/>
						<div className='flex flex-col items-center justify-center  w-full'>
							<p className='text-xl'>{item.name}</p>
							{/*@ts-ignore*/}
							{item.message && (
								<span className='text-gray-400 text-xs w-2/3 inline-block'>
									<ChatTypeMessage
										message={item as IMessage}
										compressed={true}
									/>
								</span>
							)}
						</div>
					</div>
					{item.totalUnreadMessages &&
					item.totalUnreadMessages > 0 ? (
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
