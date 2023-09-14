import { useCallback, useEffect } from 'react'

type ListenerType = 'keydown' | 'keypress' | 'keyup'
type PressButtonType = 'Enter' | 'Escape'

interface IUseKeyListener {
	methodListener: ListenerType
	callback: () => void
	pressButton: PressButtonType
}
export const useKeyListener = ({
	methodListener,
	callback,
	pressButton
}: IUseKeyListener) => {
	const handleKeyPress = useCallback(
		(e: any) => {
			if (e.key === pressButton) callback()
		},
		[callback, pressButton]
	)

	useEffect(() => {
		window.addEventListener(methodListener, handleKeyPress)
		return () => window.removeEventListener(methodListener, handleKeyPress)
	}, [handleKeyPress])
}
