import { calculateTime } from '@/utils/CalculateTime'
import { MessageStatus } from '@/UI/MessageStatus'
import { ReactNode } from 'react'
import { IMessage } from '@/store/message/message.types'

interface IChatViewMessage {
	message: IMessage
	selectChatUserId: number
	userId: number
	children: ReactNode
	compressed?: boolean
}
export const ChatViewMessage = ({
	message,
	selectChatUserId,
	userId,
	compressed,
	children
}: IChatViewMessage) => {
	return (
		<div
			className={`flex items-end gap-2 mt-3 rounded-xl p-3 
			${
				compressed
					? 'bg-incoming-background'
					: message.senderId === selectChatUserId
					? 'bg-incoming-background'
					: 'bg-outgoing-background'
			}
			`}
		>
			{children}
			<span className='text-xs self-end'>
				{calculateTime(String(message.createdAt))}
			</span>
			{message.senderId === userId && (
				<MessageStatus messageStatus={message.messageStatus} />
			)}
		</div>
	)
}
