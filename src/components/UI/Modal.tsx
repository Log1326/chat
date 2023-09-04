import { PropsWithChildren } from 'react'

export const Modal = ({ children }: PropsWithChildren) => {
	return (
		<div className='z-[90] border-4 border-teal-800 grid place-items-center	left-0 -right-72 top-0 bottom-0 m-auto rounded-lg h-fit w-fit py-8 px-12 bg-gray-600 fixed'>
			{children}
		</div>
	)
}
