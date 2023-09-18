import { PropsWithChildren } from 'react'

export const Popup = ({ children }: PropsWithChildren) => {
	return (
		<div
			data-testid='popup'
			className='z-[100] absolute w-fit h-fit bottom-24 mx-4 border-4 border-teal-800 bg-gray-700 rounded-xl px-4 py-2'
		>
			{children}
		</div>
	)
}
