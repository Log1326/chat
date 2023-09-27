import { ChatHeader } from '@/components/Chat/ChatHeader'
import { ChatContainer } from '@/components/Chat/ChatContainer'
import { MessageBar } from '@/components/Chat/MessageBar'
import { MutableRefObject, useEffect } from 'react'
import { useActions } from '@/hooks/useActions'
import { Socket } from 'socket.io-client'
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
		if (selectChatUserId)
			getAllMessage({ to: userId, from: selectChatUserId })
	}, [getAllMessage, selectChatUserId, userId])
	useEffect(() => {
		if (socketRef.current)
			socketRef.current.on(MESSAGE_RECEIVE, data => {
				setMessages(data.message)
			})
	}, [socketRef.current])
	return (
		<section className='flex flex-col h-full w-full bg-search-input-container-background animate-scaleIn'>
			<ChatHeader />
			<ChatContainer />
			<MessageBar
				userId={Number(userId)}
				selectChatUserId={Number(selectChatUserId)}
			/>
		</section>
	)
}
