import { ReactNode, useCallback, useEffect } from 'react'
import { a, config, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import { twMerge } from 'tailwind-merge'

interface DrawerProps {
	onCloseFn: () => void
	isOpen: boolean
	children: ReactNode
	classname?: string
	lazy?: boolean
}
let width: any
if (typeof window !== 'undefined') width = window.innerWidth - 100
export const Drawer = (props: DrawerProps) => {
	const { children, onCloseFn, isOpen, classname } = props
	const [{ x }, api] = useSpring(() => ({ x: width }))
	const openDrawer = useCallback(() => {
		api.start({ x: 0, immediate: false })
	}, [api])

	useEffect(() => {
		if (isOpen) openDrawer()
	}, [api, isOpen, openDrawer])

	const close = (velocity = 0) => {
		api.start({
			x: width,
			immediate: false,
			config: { ...config.stiff, velocity },
			onResolve: onCloseFn
		})
	}

	const bind = useDrag(
		({
			last,
			velocity: [velocityX],
			direction: [directionX],
			movement: [movementX],
			cancel
		}) => {
			if (movementX < -10) cancel()
			if (last) {
				if (
					movementX > width / 5 ||
					(velocityX > 0.5 && directionX > 0)
				)
					close()
				else openDrawer()
			} else api.start({ x: movementX, immediate: true })
		},
		{
			from: () => [0, x.get()],
			filterTaps: true,
			bounds: { left: 0 },
			rubberband: true,
			delay: 500
		}
	)
	if (!isOpen) return null
	const display = x.to((px: string) => (px < width ? 'block' : 'none'))
	return (
		<div
			className={twMerge(
				'absolute right-0 top-0 z-40 h-full w-auto cursor-grab screen-xl:w-3/5',
				classname
			)}
			style={{ overflow: 'hidden' }}
		>
			<span onClick={() => close()} />
			<a.div
				className='h-full w-full touch-none'
				style={{
					display,
					// left: `calc(-100vh + ${width - 100}px)`,
					x
				}}
				{...bind()}
			>
				{children}
			</a.div>
		</div>
	)
}
