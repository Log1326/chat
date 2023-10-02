import { IMessage } from '@/store/message/message.types'
import { twMerge } from 'tailwind-merge'
import { calculateTime } from '@/utils/CalculateTime'
import { MessageStatus } from '@/UI/MessageStatus'

interface IChatViewMessage {
	message: IMessage
	children: React.ReactNode
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
			className={twMerge(
				' mt-3 flex items-end gap-2 rounded-xl border border-teal-600 bg-incoming-background  p-3',
				compressed && 'border-none bg-incoming-background',
				isSender &&
					'cursor-pointer  bg-outgoing-background hover:brightness-125'
			)}
		>
			{children}
			<span className='self-end text-xs'>
				{calculateTime(String(message.createdAt))}
			</span>
			{isSender && (
				<MessageStatus messageStatus={message.messageStatus} />
			)}
		</div>
	)
}
