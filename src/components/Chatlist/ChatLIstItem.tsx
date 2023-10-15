import { useActions } from '@/hooks/useActions'
import { ChatTypeMessage } from '@/components/Chat/ChatTypeMessage'
import { IUser } from '@/store/user/user.types'
import { IGetInitialUsersChat, IMessage } from '@/store/message/message.types'
import Image from 'next/image'
import React from 'react'

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
				<div className='flex gap-4'>
					<Image
						src={item.image}
						alt={item.name}
						width={60}
						height={60}
						className='rounded-full'
					/>
					<div className='flex items-center gap-3'>
						<p className='text-2xl'>{item.name}</p>
						{item.message && (
							<>
								<span className='text-xs text-gray-400'>
									<ChatTypeMessage
										message={item as IMessage}
										compressed
									/>
								</span>

								{item.totalUnreadMessages ? (
									<p className='absolute inset-2 grid h-7 w-7 place-items-center rounded-full bg-teal-800 text-white'>
										{item.totalUnreadMessages}
									</p>
								) : null}
							</>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
