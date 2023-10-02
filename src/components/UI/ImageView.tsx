import Image from 'next/image'
import { FC } from 'react'

interface ImageViewProps {
	src: string
	alt: string
	className?: string
	width?: number
	height?: number
	priority?: boolean
}
export const ImageView: FC<ImageViewProps> = props => {
	return <Image {...props} className='rounded-full' />
}
