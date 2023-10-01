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
			className={`flex items-end gap-2 mt-3 rounded-xl p-3 border w-fit  border-teal-600
			${
				compressed
					? 'bg-incoming-background w-40 border-none'
					: !isSender
					? 'bg-incoming-background w-fit'
					: 'bg-outgoing-background w-fit'
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
