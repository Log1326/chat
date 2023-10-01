import { ChatViewMessage } from '@/components/Chat/ChatViewMessage'
import { IMessage, TypeMessage } from '@/store/message/message.types'
import dynamic from 'next/dynamic'
import React from 'react'
import { ImageMessage } from '@/components/Chat/ImageMessage'
import { TextMessage } from '@/UI/TextMessage'

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

const ViewMessageType: Record<
	TypeMessage,
	React.ComponentType<ChatTypeMessageProps>
> = {
	text: TextMessage,
	image: ImageMessage,
	audio: VoiceMessage
}
export function ChatTypeMessage(props: ChatTypeMessageProps) {
	const View = ViewMessageType[props.message.type]
	return (
		<ChatViewMessage {...props}>
			<View {...props} />
		</ChatViewMessage>
	)
}
