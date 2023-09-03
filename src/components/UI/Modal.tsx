import { PropsWithChildren } from 'react'

export const Modal = ({ children }: PropsWithChildren) => {
	return (
		<div className='z-[90] grid place-items-center left-0 -right-72 top-0 bottom-0 m-auto rounded-lg h-fit p-10 w-1/3 bg-background-default-hover fixed'>
			{children}
		</div>
	)
}
