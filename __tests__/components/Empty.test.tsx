import { render, screen } from '@testing-library/react'
import { Empty } from '@/components/Empty'

describe('empty components', () => {
	test('there is ', () => {
		render(<Empty />)
		const myElem = screen.getByTestId('empty')
		expect(myElem).toBeInTheDocument()
		expect(screen.getByRole('img')).toBeInTheDocument()
		expect(screen.getByAltText(/whats_up/i)).toBeInTheDocument()
		expect(myElem).toHaveClass('grid place-content-center')
	})
})
