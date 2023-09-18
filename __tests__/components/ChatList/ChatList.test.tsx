import { screen } from '@testing-library/react'
import { ChatList } from '@/components/Chatlist/ChatList'
import { renderWithReduxAndNextRouter } from '../../helper/renderWithReduxAndNextRouter'
import userEvent from '@testing-library/user-event'

describe('ChatList.test', () => {
	test('first', () => {
		renderWithReduxAndNextRouter(<ChatList />, {})
		const container = screen.getByTestId('chat-list')
		expect(container).toBeInTheDocument()
	})
	test('class', () => {
		renderWithReduxAndNextRouter(<ChatList />, {})
		const container = screen.getByTestId('chat-list')
		expect(container).toHaveClass('flex flex-col bg-input-background')
	})
	test('contact list toggle chat', async () => {
		renderWithReduxAndNextRouter(
			<ChatList />,
			{},
			{
				messageStore: {
					toggleChatPage: true,
					usersContactsAndUsersOnline: {}
				}
			}
		)
		expect(screen.getByTestId('chat-list')).toBeInTheDocument()
		expect(screen.getByTestId('list')).toBeInTheDocument()
		await userEvent.click(screen.getByTestId('chat-header-list-click'))
		expect(screen.getByTestId('contact-list')).toBeInTheDocument()
		await userEvent.click(screen.getByTestId('button-contact-list'))
		expect(screen.getByTestId('list')).toBeInTheDocument()
	})
})
