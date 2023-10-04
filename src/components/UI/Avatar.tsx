import { CustomAvatarMenu } from '@/UI/CustomAvatarMenu'
import { ImageView } from '@/UI/ImageView'
import { memo } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { Icon } from '@/UI/Icon'

type TypeAvatar = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
const TypeAndSize: Record<TypeAvatar, { width: number; height: number }> = {
	sm: { height: 30, width: 30 },
	md: { height: 50, width: 50 },
	lg: { height: 80, width: 80 },
	xl: { height: 100, width: 100 },
	xxl: { height: 150, width: 150 }
}
interface AvatarProps {
	type: TypeAvatar
	src: string
	alt: string
	className?: string
	title?: string
	priority?: boolean
}
const SizeAvatar: Record<TypeAvatar, React.FC<AvatarProps>> = {
	sm: ImageView,
	md: ImageView,
	lg: ImageView,
	xl: ImageView,
	xxl: CustomAvatarMenu
}
export const Avatar = memo(function Avatar(props: AvatarProps) {
	const size = TypeAndSize[props.type]
	const View = SizeAvatar[props.type]
	if (!props.src)
		return <Icon Svg={AiOutlineLoading} className='animate-spin' />
	return <View {...size} {...props} />
})
