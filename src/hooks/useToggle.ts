import { Dispatch, SetStateAction, useCallback, useState } from 'react'

export function useToggle(
	defaultValue?: boolean
): [boolean, Dispatch<SetStateAction<boolean>>, () => void] {
	const [value, setValue] = useState(!!defaultValue)
	const toggleFn = useCallback(() => setValue(prev => !prev), [])
	return [value, setValue, toggleFn]
}
