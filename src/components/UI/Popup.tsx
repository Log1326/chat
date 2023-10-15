import { PropsWithChildren } from 'react'

export const Popup = ({ children }: PropsWithChildren) => {
	return (
		<div className='z-[100] bottom-24 right-24 bg-gray-700 w-fit h-fit rounded-xl px-8 py-2 absolute '>
			{children}
		</div>
	)
}
