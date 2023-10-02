import { ChatHeader } from '@/components/Chat/ChatHeader'
import { ChatContainer } from '@/components/Chat/ChatContainer'
import { MessageBar } from '@/components/Chat/MessageBar'
import { MutableRefObject, useEffect } from 'react'
import { useActions } from '@/hooks/useActions'
import { Socket } from 'socket.io-client'
import { DefaultEventsMap } from '@socket.io/component-emitter'
import { MESSAGE_RECEIVE } from '@/utils/constants'
import { useSelector } from 'react-redux'
import { getIsSearchMessage } from '@/store/message/message.selectors'
import { Drawer } from '@/UI/Drawer'
import { SearchMessages } from '@/components/Chat/SearchMessages'

interface ChatProps {
	selectChatUserId?: number | null
	userId?: number | null
	socketRef: MutableRefObject<
		Socket<DefaultEventsMap, DefaultEventsMap> | undefined
	>
}
export function Chat({ selectChatUserId, userId, socketRef }: ChatProps) {
	const { getAllMessage, setMessages, changeIsSearchMessage } = useActions()
	const isSearchMessage = useSelector(getIsSearchMessage)

	useEffect(() => {
		if (selectChatUserId)
			getAllMessage({ to: userId, from: selectChatUserId })
	}, [getAllMessage, selectChatUserId, userId])
	useEffect(() => {
		if (socketRef.current)
			socketRef.current.on(MESSAGE_RECEIVE, data => {
				setMessages(data.message)
			})
	}, [socketRef?.current])
	return (
		<section className='flex h-full w-full animate-scaleIn flex-col bg-search-input-container-background'>
			<ChatHeader />
			<ChatContainer />
			<MessageBar
				userId={Number(userId)}
				selectChatUserId={Number(selectChatUserId)}
			/>
			{isSearchMessage && (
				<Drawer
					isOpen={isSearchMessage}
					onCloseFn={() => changeIsSearchMessage(false)}
				>
					<SearchMessages />
				</Drawer>
			)}
		</section>
	)
}
