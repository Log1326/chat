import {
	MutableRefObject,
	useCallback,
	useEffect,
	useRef,
	useState
} from 'react'

interface Size {
	width?: number
	height?: number
}
export function useElementSize<T extends HTMLElement>(): [
	MutableRefObject<T | null>,
	Size,
	number | undefined
] {
	const ref = useRef<T | null>(null)
	const [sizeState, setSizeState] = useState<Size>({
		width: 0,
		height: 0
	})
	const [innerState, setInnerState] = useState<number>()

	const handleSize = useCallback(() => {
		setSizeState({
			width: ref.current?.offsetWidth || 0,
			height: ref.current?.offsetHeight || 0
		})
		setInnerState(window.innerHeight)
	}, [])
	useEffect(() => {
		handleSize()
	}, [handleSize, ref.current?.offsetHeight, ref.current?.offsetWidth])
	return [ref, sizeState, innerState]
}
