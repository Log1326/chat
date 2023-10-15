<<<<<<< HEAD
import React, { ReactElement } from 'react'

interface DropDownProps {
	title: string | ReactElement
	children: ReactElement
=======
import React, { JSX, ReactElement } from 'react'

interface DropDownProps {
	title: string | ReactElement
	children: JSX.Element | JSX.Element[]
>>>>>>> features
	toggle: boolean
}
export const DropDown = (props: DropDownProps) => {
	const { title, children, toggle } = props
	return (
<<<<<<< HEAD
		<div className='relative inline-block text-left'>
			<button className='inline-flex w-full justify-center'>{title}</button>
			{toggle && (
				<div className='absolute right-0 z-10 mt-2 w-fit  rounded-md bg-panel-header-background shadow-lg active:opacity-70 focus:outline-none hover:bg-gray-700'>
					<button className='text-white block px-4 py-2 text-sm'>
						{children}
					</button>
				</div>
=======
		<div className='relative inline-block text-left z-50'>
			{title && (
				<button className='inline-flex w-full justify-center'>{title}</button>
			)}
			{toggle && (
				<button className='absolute w-36 text-white block px-4 py-2 text-sm top-0 right-0 z-10 mt-10 rounded-md bg-panel-header-background '>
					{children}
				</button>
>>>>>>> features
			)}
		</div>
	)
}
