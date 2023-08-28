import React, { RefObject, useEffect, useRef } from 'react'

type RefType = 'click' | 'mousedown' | 'keydown'
export const useHandleClickOutside = (
	callback: () => void,
	type: RefType,
	idElement: string
) => {
	const ref: RefObject<HTMLInputElement> = useRef(null)
	useEffect(() => {
		const handleClickOutside = (
			event: React.MouseEvent<HTMLElement> extends EventListener
				? EventListener
				: Event
		) => {
			if ((event.target as Element).id !== idElement) {
				if (ref.current && !ref.current.contains(event.target as Element)) {
					callback()
				}
			}
		}
		document.addEventListener(type, handleClickOutside)
		return () => {
			document.removeEventListener(type, handleClickOutside)
		}
	}, [callback])

	return ref
}
