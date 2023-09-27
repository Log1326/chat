import { useDrag } from '@use-gesture/react'
import { a, config, useSpring } from '@react-spring/web'
import { ReactNode, useCallback, useEffect } from 'react'

interface DrawerProps {
	onCloseFn?: () => void
	isOpen?: boolean
	children: ReactNode
	classname?: string
	lazy?: boolean
}

export const Drawer = ({
	children,
	lazy,
	onCloseFn,
	isOpen,
	classname
}: DrawerProps) => {
	const height = window.innerHeight - 100

	const [{ y }, api] = useSpring(() => ({ y: height }))
	const openDrawer = useCallback(() => {
		api.start({ y: 0, immediate: false })
	}, [api])
	useEffect(() => {
		if (isOpen) openDrawer()
	}, [api, isOpen, openDrawer])
	const close = (velocity = 0) => {
		api.start({
			y: height,
			immediate: false,
			config: { ...config.stiff, velocity },
			onResolve: onCloseFn
		})
	}
	const bind = useDrag(
		({
			last,
			velocity: [, velocity],
			direction: [, direction],
			movement: [, movement],
			cancel
		}) => {
			if (movement < 70) cancel()
			if (last) {
				if (
					movement > height + 0.5 ||
					(velocity > 0.5 && direction > 0)
				)
					close()
				else openDrawer()
			} else api.start({ y: movement, immediate: true })
		},
		{
			from: () => [0, y.get()],
			filterTaps: true,
			bounds: { top: 0 },
			rubberband: true
		}
	)
	if (!isOpen) return null
	const display = y.to(py => (py < height ? 'block' : 'none'))
	return (
		<div onClick={() => close()}>
			<a.div
				className={`${classname} z-[100] bg-background-default-hover fixed w-full h-full touch-none p-4`}
				style={{
					display,
					right: `calc(-100vh + ${height - 700}px)`,
					y
				}}
				{...bind()}
			>
				{children}
			</a.div>
		</div>
	)
}
