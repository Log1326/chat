import { bgChat, IUser } from '@/store/user/user.types'

const USER_STORAGE = 'user-chat'
const CHAT_BG = 'chat-bg'
export const LocalStorageService = {
	getParseUserLocalStorage(): IUser | undefined {
		if (typeof window !== 'undefined') {
			const user = this.getUserLocalStorage()
			if (user === 'undefined') this.removeUserLocalStorage()
			else return JSON.parse(user || '{}') || null
		}
	},
	getUserLocalStorage(): string | null {
		return localStorage.getItem(USER_STORAGE)
	},
	removeUserLocalStorage(): void {
		localStorage.removeItem(USER_STORAGE)
	},
	setUserLocalStorage(item: IUser) {
		localStorage.setItem(USER_STORAGE, JSON.stringify(item))
	},
	getChatBg(): string | null {
		return localStorage.getItem(CHAT_BG)
	},
	setChatBg(value: bgChat) {
		localStorage.setItem(CHAT_BG, value)
	},
	removeChatBg() {
		localStorage.removeItem(CHAT_BG)
	}
}
