import { List } from '@/components/Chatlist/List'
import { ChatListHeader } from '@/components/Chatlist/ChatListHeader'
import { ContactsList } from '@/components/Chatlist/ContactsList'
import { getToggleChatPage } from '@/store/message/message.selectors'
import { useSelector } from 'react-redux'
import { ContactListHeader } from '@/components/Chatlist/ContactListHeader'

export function ChatList() {
	const isToggleChatPage = useSelector(getToggleChatPage)
	return (
		<aside
			data-testid='chat-list'
			className='flex w-full flex-col bg-input-background'
		>
			{isToggleChatPage ? (
				<>
					<ChatListHeader />
					<List />
				</>
			) : (
				<>
					<ContactListHeader />
					<ContactsList />
				</>
			)}
		</aside>
	)
}
