import { screen } from '@testing-library/react'
import { ChatList } from '@/components/Chatlist/ChatList'
import { renderWithReduxAndNextRouter } from '../../helper/renderWithReduxAndNextRouter'

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
})
