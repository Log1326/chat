import { IMessage } from '@/store/message/message.types'
import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

interface TextMessageProps {
	message: IMessage
	compressed?: boolean
}
export const TextMessage = memo(function TextMessage({
	message,
	compressed
}: TextMessageProps) {
	return (
		<span
			className={twMerge(
				'select-none',
				compressed && 'line-clamp-1 w-20 p-1'
			)}
		>
			{message.message}
		</span>
	)
})
