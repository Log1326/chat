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
				className='mt-2 flex w-full animate-fade cursor-pointer items-center justify-center gap-4 rounded-xl p-1 px-10 hover:bg-gray-600'
			>
				<div className='flex w-full '>
					<div className='flex w-full items-center gap-4'>
						<Avatar
							type='lg'
							src={item.image ?? '/default-avatar.png'}
							alt={item.name}
							title={item.name}
						/>
						<div className='flex w-full flex-col items-center  justify-center'>
							<p className='text-xl'>{item.name}</p>
							{/*@ts-ignore*/}
							{item.message && (
								<span className='inline-block w-2/3 text-xs text-gray-400'>
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
							<p className='flex h-8 w-8 items-center justify-center rounded-full bg-teal-800  p-2 text-white'>
								{item.totalUnreadMessages}
							</p>
						</div>
					) : null}
				</div>
			</div>
		</>
	)
}
