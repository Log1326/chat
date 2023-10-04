import { render, screen } from '@testing-library/react'
import { Avatar } from '@/UI/Avatar'

describe('Avatar.test', () => {
	test('first', () => {
		render(<Avatar type='sm' src='http://avatar' alt='hello' />)
		const image = screen.getByAltText('hello') as HTMLImageElement
		expect(image.width).toBe(30)
	})
	test('class', () => {
		render(
			<Avatar type='xl' src='http://avatar' alt='hello' title='hello' />
		)
		const image = screen.getByAltText('hello') as HTMLImageElement
		expect(image).toBeInTheDocument()
		expect(image.width).toBe(100)
		expect(image.title).toBe('hello')
	})
	test('img', () => {
		render(<Avatar type='sm' src='http://avatar' alt='hello' />)
		expect(screen.getByRole('img')).toBeInTheDocument()
	})
	test('alt', () => {
		render(<Avatar type='sm' src='http://avatar' alt='hello' />)
		expect(screen.getByAltText('hello')).toBeInTheDocument()
	})
})
