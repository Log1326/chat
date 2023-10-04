import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface PopupProps {
	classname: string
	children: ReactNode
}
export const Popup = ({ children, classname }: PopupProps) => {
	return (
		<div
			data-testid='popup'
			className={twMerge(
				'z-[100] mx-4 h-fit w-fit rounded-xl border-4 border-teal-800 bg-gray-700 px-4 py-2',
				classname
			)}
		>
			{children}
		</div>
	)
}
