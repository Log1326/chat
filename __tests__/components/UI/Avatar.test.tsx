import { render, screen } from '@testing-library/react'
import { Avatar } from '@/UI/Avatar'

describe('Avatar.test', () => {
	test('first', () => {
		render(<Avatar type='sm' value='http://avatar' />)
		const container = screen.getByTestId('avatar')
		expect(container).toBeInTheDocument()
	})
	test('class', () => {
		render(<Avatar type='sm' value='http://avatar' />)
		const container = screen.getByTestId('avatar')
		expect(container).toHaveClass(
			'flex items-center justify-center cursor-pointer'
		)
	})
	test('img', () => {
		render(<Avatar type='sm' value='http://avatar' />)
		expect(screen.getByRole('img')).toBeInTheDocument()
	})
	test('alt', () => {
		render(<Avatar type='sm' value='http://avatar' />)
		expect(screen.getByAltText('imageAvatar')).toBeInTheDocument()
	})
})
