import { render, screen } from '@testing-library/react'
import { InputCustom } from '@/UI/Input'
import userEvent from '@testing-library/user-event'

describe('Input.test', () => {
	test('first', () => {
		render(<InputCustom />)
		const container = screen.getByTestId('inputCustom')
		expect(container).toBeInTheDocument()
	})
	test('label', () => {
		render(<InputCustom label={true} name={'custom'} type='text' />)
		const container = screen.getByLabelText('custom')
		expect(container).toBeInTheDocument()
	})
	test('change value', async () => {
		render(
			<InputCustom
				label={true}
				name={'custom'}
				type='text'
				placeholder='input...'
			/>
		)
		const input = screen.getByPlaceholderText<HTMLInputElement>('input...')
		expect(input).toBeInTheDocument()
		await userEvent.type(input, 'what')
		expect(input).toHaveValue('what')
		await userEvent.clear(input)
		expect(input).toHaveValue('')
		await userEvent.type(input, 'go')
		expect(input).toHaveValue('go')
	})
	test('input password', () => {
		render(
			<InputCustom
				label={true}
				name={'custom'}
				type='password'
				placeholder='password'
			/>
		)
		const input = screen.getByPlaceholderText<HTMLInputElement>('password')
		expect(input.type).toBe('password')
	})
})