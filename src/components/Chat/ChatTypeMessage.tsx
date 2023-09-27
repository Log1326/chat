import { ChatViewMessage } from '@/components/Chat/ChatViewMessage'
import { ImageMessage } from '@/components/Chat/ImageMessage'
import { IMessage } from '@/store/message/message.types'
import dynamic from 'next/dynamic'
import { BiImageAlt } from 'react-icons/bi'
import { BsMic } from 'react-icons/bs'

const VoiceMessage = dynamic(
	() =>
		import('@/components/Chat/VoiceMessage').then(
			module => module.VoiceMessage
		),
	{ ssr: false }
)
interface ChatTypeMessageProps {
	message: IMessage
	compressed?: boolean
	isSender?: boolean
}
export const ChatTypeMessage = ({
	message,
	compressed,
	isSender
}: ChatTypeMessageProps) => {
	return (
		<>
			{!compressed && message.type === 'text' && (
				<ChatViewMessage message={message} isSender={isSender}>
					<span>{message.message}</span>
				</ChatViewMessage>
			)}
			{!compressed && message.type === 'image' && (
				<ChatViewMessage message={message} isSender={isSender}>
					<ImageMessage message={message} />
				</ChatViewMessage>
			)}
			{!compressed && message.type === 'audio' && (
				<ChatViewMessage message={message} isSender={isSender}>
					<VoiceMessage message={message} />
				</ChatViewMessage>
			)}
			{compressed && message.type === 'text' && (
				<ChatViewMessage
					compressed={compressed}
					message={message}
					isSender={isSender}
				>
					<span className='w-1/2 line-clamp-1'>
						{message.message}
					</span>
				</ChatViewMessage>
			)}
			{compressed && message.type === 'image' && (
				<ChatViewMessage
					compressed={compressed}
					message={message}
					isSender={isSender}
				>
					<div className='flex items-center gap-2'>
						<BiImageAlt className='h-6 w-6' />
						<span>image</span>
					</div>
				</ChatViewMessage>
			)}
			{compressed && message.type === 'audio' && (
				<ChatViewMessage
					compressed={compressed}
					message={message}
					isSender={isSender}
				>
					<BsMic />
				</ChatViewMessage>
			)}
		</>
	)
}
