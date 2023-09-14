import { ChatViewMessage } from '@/components/Chat/ChatViewMessage'
import { ImageMessage } from '@/components/Chat/ImageMessage'
import { IMessage } from '@/store/message/message.types'
import dynamic from 'next/dynamic'
import { useSelector } from 'react-redux'
import { getSelectUserId, getUserId } from '@/store/user/user.selector'
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
}
export const ChatTypeMessage = ({
	message,
	compressed
}: ChatTypeMessageProps) => {
	const selectChatUserId = useSelector(getSelectUserId)
	const userId = useSelector(getUserId)
	return (
		<>
			{!compressed && message.type === 'text' && (
				<ChatViewMessage
					message={message}
					selectChatUserId={Number(selectChatUserId)}
					userId={Number(userId)}
				>
					<span>{message.message}</span>
				</ChatViewMessage>
			)}
			{!compressed && message.type === 'image' && (
				<ChatViewMessage
					message={message}
					selectChatUserId={Number(selectChatUserId)}
					userId={Number(userId)}
				>
					<ImageMessage message={message} />
				</ChatViewMessage>
			)}
			{!compressed && message.type === 'audio' && (
				<ChatViewMessage
					message={message}
					selectChatUserId={Number(selectChatUserId)}
					userId={Number(userId)}
				>
					<VoiceMessage message={message} />
				</ChatViewMessage>
			)}
			{compressed && message.type === 'text' && (
				<ChatViewMessage
					compressed={compressed}
					message={message}
					selectChatUserId={Number(selectChatUserId)}
					userId={Number(userId)}
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
					selectChatUserId={Number(selectChatUserId)}
					userId={Number(userId)}
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
					selectChatUserId={Number(selectChatUserId)}
					userId={Number(userId)}
				>
					<BsMic />
				</ChatViewMessage>
			)}
		</>
	)
}
