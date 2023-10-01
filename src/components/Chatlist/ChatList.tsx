import { List } from '@/components/Chatlist/List'
import { ChatListHeader } from '@/components/Chatlist/ChatListHeader'
import { ContactsList } from '@/components/Chatlist/ContactsList'
import { useSelector } from 'react-redux'
import { getToggleChatPage } from '@/store/message/message.selectors'

export function ChatList() {
	const toggleChatPage = useSelector(getToggleChatPage)
	return (
		<aside
			data-testid='chat-list'
			className='flex flex-col bg-input-background'
		>
			{toggleChatPage ? (
				<>
					<ChatListHeader />
					<List />
				</>
			) : (
				<ContactsList />
			)}
		</aside>
	)
}
