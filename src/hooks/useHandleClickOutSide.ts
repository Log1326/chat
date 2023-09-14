import React, { RefObject, useEffect, useRef } from 'react'

type RefType = 'click' | 'mousedown' | 'keydown'
interface IUseHandleClickOutside {
	callback: () => void
	type: RefType
	idElement: string
}
export const useHandleClickOutside = ({
	callback,
	type,
	idElement
}: IUseHandleClickOutside) => {
	const ref: RefObject<HTMLInputElement> = useRef(null)
	useEffect(() => {
		const handleClickOutside = (
			event: React.MouseEvent<HTMLElement> extends EventListener
				? EventListener
				: Event
		) => {
			if ((event.target as Element).id !== idElement)
				if (ref.current && !ref.current.contains(event.target as Element)) {
					console.log('here', idElement)
					callback()
				}
		}
		document.addEventListener(type, handleClickOutside)
		return () => document.removeEventListener(type, handleClickOutside)
	}, [callback])

	return ref
}
