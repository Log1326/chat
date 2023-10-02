import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { PayloadAction } from '@reduxjs/toolkit'

export function useFilterInput<T>(
	loadingFn: (bool: boolean) => PayloadAction<boolean, any>,
	onChange: (value: string) => React.SetStateAction<T | undefined>
) {
	const [searchUser, setSearchUser] = useState('')
	const [filterUser, setFilterUser] = useState<T>()

	const searchFn = useDebounce(() => {
		setFilterUser(onChange(searchUser))
		loadingFn(false)
	}, 400)
	useEffect(() => {
		;(function () {
			loadingFn(true)
			if (searchUser) searchFn()
			else {
				setFilterUser(undefined)
				loadingFn(false)
			}
		})()
	}, [searchUser])
	return {
		state: { searchUser, filterUser },
		fn: { setSearchUser }
	}
}
