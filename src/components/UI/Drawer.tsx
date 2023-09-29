import { ReactNode, useCallback, useEffect } from 'react'
import { a, config, useSpring } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'

interface DrawerProps {
	onCloseFn?: () => void
	isOpen?: boolean
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
		({ last, velocity: [vx], direction: [dx], movement: [mx], cancel }) => {
			if (mx < -60) cancel()
			if (last) {
				if (mx > width * 0.5 || (vx > 0.5 && dx > 0)) close()
				else openDrawer()
			} else api.start({ x: mx, immediate: true })
		},
		{
			from: () => [0, x.get()],
			filterTaps: true,
			bounds: { top: 0 },
			rubberband: true
		}
	)
	if (!isOpen) return null
	const display = x.to((py: string) => (py < width ? 'block' : 'none'))
	return (
		<div
			className={`absolute z-40 top-0 right-0 w-1/2 h-full cursor-grab ${classname}`}
			style={{ overflow: 'hidden' }}
		>
			<span onClick={() => close()} />
			<a.div
				className='h-full w-full touch-none'
				style={{
					display,
					left: `calc(-100vh + ${width - 100}px)`,
					x
				}}
				{...bind()}
			>
				{children}
			</a.div>
		</div>
	)
}
