import { useActions } from '@/hooks/useActions'
import { ChatTypeMessage } from '@/components/Chat/ChatTypeMessage'
import { IUser } from '@/store/user/user.types'
import { IGetInitialUsersChat, IMessage } from '@/store/message/message.types'
import Image from 'next/image'

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
				className='relative mt-2 flex h-28 w-full animate-fade cursor-pointer items-center gap-4 rounded-xl p-2 text-white hover:bg-gray-600'
			>
				<div className='flex w-full gap-4'>
					<Image
						src={item.image}
						alt={item.name}
						width={60}
						height={60}
						className='rounded-full'
					/>
					<div className='flex w-full items-center gap-5'>
						<p className='text-2xl'>{item.name}</p>
						{/*@ts-ignore*/}
						{item.message && (
							<span className='text-xs text-gray-400'>
								<ChatTypeMessage
									message={item as IMessage}
									compressed={true}
								/>
							</span>
						)}
					</div>
				</div>
				{item.totalUnreadMessages ? (
					<p className='absolute right-0 top-0 grid h-8 w-8 place-items-center rounded-full bg-teal-800'>
						{item.totalUnreadMessages}
					</p>
				) : null}
			</div>
		</>
	)
}
