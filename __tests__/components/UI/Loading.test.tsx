import { render, screen } from '@testing-library/react'
import { Loading } from '@/UI/Loading'

describe('Loading.test', () => {
	test('first', () => {
		render(<Loading />)
		const container = screen.getByTestId('loading')
		expect(container).toBeInTheDocument()
	})
	test('flex,size,center-false', () => {
		render(<Loading flex size='text-xl' color='text-black' />)
		const container = screen.getByTestId('loading')
		expect(container).toHaveClass('flex')
		expect(container).toHaveClass('text-xl')
		expect(container).toHaveClass('text-black')
		expect(container).toHaveTextContent('Loading')
	})
})
