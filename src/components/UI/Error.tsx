interface ErrorProps {
	text: string
}
export const Error = (error: ErrorProps) => {
	return (
		<div className='text-xl text-red-500 grid place-items-center h-20 w-20'>
			{error.text && error.text}
		</div>
	)
}
