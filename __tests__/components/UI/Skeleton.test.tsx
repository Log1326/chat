import { render, screen } from '@testing-library/react'
import { Skeleton } from '@/UI/Skeleton'

describe('Skeleton.test', () => {
	test('first', () => {
		render(<Skeleton />)
		const container = screen.getByTestId('skeleton')
		expect(container).toBeInTheDocument()
	})
	test('class', () => {
		render(<Skeleton />)
		const container = screen.getByTestId('skeleton')
		expect(container).toHaveClass(
			'grid place-items-center h-[300px] w-[300px] bg-gray-300'
		)
	})
})
