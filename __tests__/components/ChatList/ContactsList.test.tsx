import { fireEvent, screen } from '@testing-library/react'
import { ContactsList } from '@/components/Chatlist/ContactsList'
import { renderWithRedux } from '../../helper/renderWithRedux'

describe('ContactsList.test', () => {
	test('first', () => {
		renderWithRedux(<ContactsList />)
		const container = screen.getByTestId('contact-list')
		expect(container).toBeInTheDocument()
	})
	test('class', () => {
		renderWithRedux(<ContactsList />)
		const container = screen.getByTestId('contact-list')
		expect(container).toHaveClass('flex flex-col h-screen')
	})
	test('close contact list', () => {
		renderWithRedux(<ContactsList />)
		const button = screen.getByTestId('button-contact-list')
		fireEvent.click(button)
		const container = screen.getByTestId('contact-list')
		expect(container).toBeInTheDocument()
	})
})
