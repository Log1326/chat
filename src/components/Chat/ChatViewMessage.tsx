import { calculateTime } from '@/utils/CalculateTime'
import { MessageStatus } from '@/UI/MessageStatus'
import { ReactNode } from 'react'
import { IMessage } from '@/store/message/message.types'

interface IChatViewMessage {
	message: IMessage
	children: ReactNode
	compressed?: boolean
	isSender?: boolean
}
export const ChatViewMessage = ({
	message,
	compressed,
	children,
	isSender
}: IChatViewMessage) => {
	return (
		<div
			className={`flex items-end gap-2 mt-3 rounded-xl p-3 
			${
				compressed
					? 'bg-incoming-background'
					: !isSender
					? 'bg-incoming-background'
					: 'bg-outgoing-background'
			}
			`}
		>
			{children}
			<span className='text-xs self-end'>
				{calculateTime(String(message.createdAt))}
			</span>
			{isSender && (
				<MessageStatus messageStatus={message.messageStatus} />
			)}
		</div>
	)
}
