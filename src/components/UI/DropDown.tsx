import React, { JSX, memo, ReactElement } from 'react'
import { twMerge } from 'tailwind-merge'

interface DropDownProps {
	title?: string | ReactElement
	children: JSX.Element | JSX.Element[]
	toggle: boolean
	classname?: string
}
export const DropDown = memo((props: DropDownProps) => {
	const { title, children, toggle, classname } = props
	return (
		<div
			data-testid='dropdown'
			className={twMerge(
				classname,
				'relative z-30 grid place-items-center'
			)}
		>
			{title && <button className='w-full'>{title}</button>}
			{toggle && (
				<button data-testid='dropdown-button'>{children}</button>
			)}
		</div>
	)
})
