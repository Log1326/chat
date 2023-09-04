import { ChatHeader } from '@/components/Chat/ChatHeader'
import { ChatContainer } from '@/components/Chat/ChatContainer'
import { MessageBar } from '@/components/Chat/MessageBar'
import { MutableRefObject, useEffect } from 'react'
import { useActions } from '@/hooks/useActions'
import { Socket } from 'socket.io-client/build/esm/socket'
import { DefaultEventsMap } from '@socket.io/component-emitter'
import { MESSAGE_RECEIVE } from '@/utils/constants'

interface ChatProps {
	selectChatUserId?: number | null
	userId?: number | null
	socketRef: MutableRefObject<
		Socket<DefaultEventsMap, DefaultEventsMap> | undefined
	>
}
export function Chat({ selectChatUserId, userId, socketRef }: ChatProps) {
	const { getAllMessage, setMessages } = useActions()
	useEffect(() => {
		if (selectChatUserId) getAllMessage({ to: userId, from: selectChatUserId })
	}, [selectChatUserId])
	useEffect(() => {
		if (socketRef.current)
			socketRef.current.on(MESSAGE_RECEIVE, data => {
				setMessages(data.message)
			})
	}, [socketRef.current])
	return (
		<section className='flex h-full flex-col justify-between bg-search-input-container-background animate-scaleIn'>
			<ChatHeader />
			<ChatContainer />
			<MessageBar
				userId={Number(userId)}
				selectChatUserId={Number(selectChatUserId)}
			/>
		</section>
	)
}
