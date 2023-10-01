import { IMessage } from '@/store/message/message.types'
import { memo } from 'react'

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
			className={`select-none w-fit ${compressed && 'p-1 line-clamp-1'}`}
		>
			{message.message}
		</span>
	)
})
