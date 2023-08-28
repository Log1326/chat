import { List } from '@/components/Chatlist/List'
import { ChatListHeader } from '@/components/Chatlist/ChatListHeader'
import { ContactsList } from '@/components/Chatlist/ContactsList'
import { useSelector } from 'react-redux'
import { getToggleChatPage } from '@/store/message/message.selectors'

export function ChatList() {
	const toggleChatPage = useSelector(getToggleChatPage)
	return (
		<aside className='flex flex-col bg-input-background'>
			{toggleChatPage ? (
				<section className='animate-appearance'>
					<ChatListHeader />
					<List />
				</section>
			) : (
				<ContactsList />
			)}
		</aside>
	)
}
