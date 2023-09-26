import { ReactNode } from 'react'

interface PopupProps {
	classname: string
	children: ReactNode
}
export const Popup = ({ children, classname }: PopupProps) => {
	return (
		<div
			data-testid='popup'
			className={`z-[100] ${classname} w-fit h-fit mx-4 border-4 border-teal-800 bg-gray-700 rounded-xl px-4 py-2`}
		>
			{children}
		</div>
	)
}
