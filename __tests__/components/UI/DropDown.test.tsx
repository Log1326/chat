import { render, screen } from '@testing-library/react'
import { DropDown } from '@/UI/DropDown'

describe('DropDown.test', () => {
	test('dropdown and there is a title', () => {
		render(
			<DropDown
				title='hello'
				toggle={false}
				children={<div>hello</div>}
			/>
		)
		const container = screen.getByTestId('dropdown')
		expect(container).toBeInTheDocument()
		expect(container).toHaveTextContent('hello')
	})
	test('there is a class', () => {
		render(
			<DropDown
				title='hello'
				toggle={false}
				children={<div>hello</div>}
			/>
		)
		const container = screen.getByTestId('dropdown')
		expect(container).toHaveClass('relative inline-block text-left z-50')
	})
	test('toggle true', () => {
		render(
			<DropDown title='hello' toggle={true} children={<div>hello</div>} />
		)
		const container = screen.getByTestId('dropdown-button')
		expect(container).toBeInTheDocument()
		expect(container).toHaveClass('absolute w-36')
	})
	test('there is not children because toggle false', () => {
		render(
			<DropDown
				title='hello'
				toggle={false}
				children={<div>hello</div>}
			/>
		)
		const container = screen.queryByTestId('dropdown-button')
		expect(container).not.toBeInTheDocument()
	})
	test('children', () => {
		render(
			<DropDown title='hello' toggle={true} children={<div>hello</div>} />
		)
		const container = screen.getByTestId('dropdown-button')
		expect(container).toHaveTextContent('hello')
	})
})
