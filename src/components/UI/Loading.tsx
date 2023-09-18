interface LoadingProps {
	size?: string
	center?: boolean
	color?: string
	flex?: boolean
}
export const Loading = (props: LoadingProps) => {
	const {
		color = 'text-white',
		center = false,
		flex = true,
		size = 'text-7xl'
	} = props
	return (
		<div
			data-testid='loading'
			className={`${color} ${size} ${flex ? 'flex' : ''} ${
				center ? 'justify-center items-center' : ''
			}`}
		>
			<p className='animate-pulse duration-700'>Loading</p>
			<span className='animate-bounce duration-75'>...</span>
		</div>
	)
}
