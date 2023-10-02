import { twMerge } from 'tailwind-merge'

type textSize = 'text-lg' | 'text-xl' | 'text-2xl' | 'text-7xl'
interface LoadingProps {
	size?: textSize
	center?: boolean
	color?: string
	flex?: boolean
	full?: boolean
	bgTransparent?: boolean
}
export const Loading = (props: LoadingProps) => {
	const {
		color = 'text-white',
		center = false,
		flex = true,
		size = 'text-7xl',
		full = false,
		bgTransparent = false
	} = props
	return (
		<div
			data-testid='loading'
			className={twMerge(
				bgTransparent ? 'bg-transparent' : 'bg-input-background',
				full && 'h-screen w-screen',
				color,
				size,
				flex && 'flex',
				center && 'items-center justify-center'
			)}
		>
			<p className='animate-pulse duration-700'>Loading</p>
			<span className='animate-bounce duration-75'>...</span>
		</div>
	)
}
