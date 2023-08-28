import React, { ReactElement } from 'react'

interface DropDownProps {
	title: string | ReactElement
	children: ReactElement
	toggle: boolean
}
export const DropDown = (props: DropDownProps) => {
	const { title, children, toggle } = props
	return (
		<div className='relative inline-block text-left'>
			<button className='inline-flex w-full justify-center'>{title}</button>
			{toggle && (
				<div className='absolute right-0 z-10 mt-2 w-fit  rounded-md bg-panel-header-background shadow-lg active:opacity-70 focus:outline-none hover:bg-gray-700'>
					<button className='text-white block px-4 py-2 text-sm'>
						{children}
					</button>
				</div>
			)}
		</div>
	)
}
