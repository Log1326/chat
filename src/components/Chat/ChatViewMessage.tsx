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
				'mt-3 flex max-w-2xl  items-start justify-center gap-3 rounded-xl border border-teal-600 bg-incoming-background p-4',
				compressed &&
					'laptop:hidden tablet:w-52 w-48 border-none bg-incoming-background',
				isSender &&
					'cursor-pointer bg-outgoing-background hover:brightness-125'
			)}
		>
			{children}
			<div className='m-1 flex h-full w-fit items-end justify-end gap-2'>
				<div
					className={twMerge(
						'self-end text-xs text-teal-600',
						compressed && 'w-14 text-[12px]'
					)}
				>
					{calculateTime(String(message.createdAt))}
				</div>
				{isSender && (
					<MessageStatus messageStatus={message.messageStatus} />
				)}
			</div>
		</div>
	)
}
