import { screen } from '@testing-library/react'
import { ContactsList } from '@/components/Chatlist/ContactsList'
import { renderWithRedux } from '@/utils/helper/renderWithRedux'
import userEvent from '@testing-library/user-event'

describe('ContactsList.test', () => {
	test('first', () => {
		renderWithRedux(<ContactsList />)
		const container = screen.getByTestId('contact-list')
		expect(container).toBeInTheDocument()
	})
	test('there is class flex and flex-col', () => {
		renderWithRedux(<ContactsList />)
		const container = screen.getByTestId('contact-list')
		expect(container).toHaveClass('flex flex-col h-screen')
	})
	test('change input value', async () => {
		renderWithRedux(<ContactsList />)
		const input =
			screen.getByPlaceholderText<HTMLInputElement>('Search user...')
		expect(input).toBeInTheDocument()
		await userEvent.type(input, 'hey man! whats up?')
		expect(input.value).toBe('hey man! whats up?')
		await userEvent.clear(input)
		await userEvent.type(input, 'hey man!')
		expect(input).toHaveValue('hey man!')
	})
})
