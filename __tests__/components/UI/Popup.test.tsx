import { render, screen } from '@testing-library/react'
import { Popup } from '@/UI/Popup'

describe('Popup.test', () => {
	test('first', () => {
		render(
			<Popup classname='hello'>
				<div>hello</div>
			</Popup>
		)
		const container = screen.queryByTestId('popup')
		expect(container).toBeInTheDocument()
		expect(container).toHaveClass(
			'z-[100] mx-4 h-fit w-fit rounded-xl border-4 border-teal-800 bg-gray-700 px-4 py-2 hello'
		)
		expect(container).toHaveTextContent('hello')
	})
})
