import React, { JSX, ReactElement } from 'react'

interface DropDownProps {
	title?: string | ReactElement
	children: JSX.Element | JSX.Element[]
	toggle: boolean
	classname?: string
}
export const DropDown = (props: DropDownProps) => {
	const { title, children, toggle, classname } = props
	return (
		<div
			data-testid='dropdown'
			className='relative inline-block text-left z-50'
		>
			{title && (
				<button className='inline-flex w-full justify-center'>
					{title}
				</button>
			)}
			{toggle && (
				<button
					data-testid='dropdown-button'
					className={`${classname} text-white  px-4 py-2 text-sm z-10 mt-10 rounded-md bg-panel-header-background`}
				>
					{children}
				</button>
			)}
		</div>
	)
}
