import { IUser } from '@/store/user/user.types'

const USER_STORAGE = 'user-chat'
export const LocalStorageService = {
	getParseUserLocalStorage(): IUser | undefined {
		if (typeof window !== 'undefined') {
			const keyLocal = localStorage.getItem(USER_STORAGE)
			if (keyLocal === 'undefined') {
				localStorage.removeItem(USER_STORAGE)
				localStorage.clear()
			}
			return JSON.parse(keyLocal || '{}') || null
		}
	},
	getUserLocalStorage(): string | null | undefined {
		if (typeof window !== 'undefined') {
			return localStorage.getItem(USER_STORAGE) || null
		}
	},
	removeUserLocalStorage(): void {
		if (typeof window !== 'undefined') {
			return localStorage.removeItem(USER_STORAGE)
		}
	},
	setUserLocalStorage(item: IUser) {
		if (typeof window !== 'undefined')
			localStorage.setItem(USER_STORAGE, JSON.stringify(item))
	}
}
