import { render, screen } from '@testing-library/react'
import { Popup } from '@/UI/Popup'

describe('Popup.test', () => {
	test('first', () => {
		render(
			<Popup>
				<div>hello</div>
			</Popup>
		)
		const container = screen.queryByTestId('popup')
		expect(container).toBeInTheDocument()
		expect(container).toHaveClass('z-[100] absolute w-fit h-fit')
		expect(container).toHaveTextContent('hello')
	})
})
