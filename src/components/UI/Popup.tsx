import { PropsWithChildren } from 'react'

export const Popup = ({ children }: PropsWithChildren) => {
	return (
		<div className='z-[100] bottom-24 mx-4 border-4 border-teal-800 bg-gray-700 w-fit h-fit rounded-xl px-4 py-2 absolute '>
			{children}
		</div>
	)
}
