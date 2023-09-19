import { TypeRootState } from '@/store/store'
import {
	getChatImage,
	getLoadingUser,
	getNewUserBool,
	getSelectUser,
	getSelectUserId,
	getUser,
	getUserId,
	getUserImage,
	getUsers
} from '@/store/user/user.selector'
import { IUser } from '@/store/user/user.types'

describe('user.selectors.test', () => {
	const user = {
		name: 'anton',
		image: 'http://image',
		id: 1,
		email: 'email.com',
		newUser: true
	}
	const users: Record<string, IUser[]> = {
		a: new Array(3).fill(user),
		b: new Array(1).fill(user)
	}
	test('getLoadingUser', () => {
		const state: DeepPartial<TypeRootState> = {
			userStore: { isLoading: false }
		}
		expect(getLoadingUser(state as TypeRootState)).toBe(false)
	})
	test('getUser', () => {
		const data = { name: 'name', image: 'image', email: 'email' }
		const state: DeepPartial<TypeRootState> = {
			userStore: { userInfo: data }
		}
		expect(getUser(state as TypeRootState)).toEqual(data)
	})
	test('getUser undefined', () => {
		const state: DeepPartial<TypeRootState> = {
			userStore: {}
		}
		expect(getUser(state as TypeRootState)).toBeUndefined()
	})
	test('getUserId', () => {
		const state: DeepPartial<TypeRootState> = {
			userStore: { userInfo: { id: 1 } }
		}
		expect(getUserId(state as TypeRootState)).toBe(1)
	})
	test('getNewUserBool', () => {
		const state: DeepPartial<TypeRootState> = {
			userStore: { isNewUser: false }
		}
		expect(getNewUserBool(state as TypeRootState)).toBe(false)
	})
	test('getUsers', () => {
		const state: DeepPartial<TypeRootState> = {
			userStore: { users }
		}
		expect(getUsers(state as TypeRootState)).toBe(users)
	})
	test('getUserImage', () => {
		const state: DeepPartial<TypeRootState> = {
			userStore: { userInfo: { image: 'image' } }
		}
		expect(getUserImage(state as TypeRootState)).toBe('image')
	})
	test('getChatImage', () => {
		const state: DeepPartial<TypeRootState> = {
			userStore: { backgroundChat: 'bg-chat-background-white' }
		}
		expect(getChatImage(state as TypeRootState)).toBe(
			'bg-chat-background-white'
		)
	})
	test('getSelectUser', () => {
		const state: DeepPartial<TypeRootState> = {
			userStore: { selectUser: user }
		}
		expect(getSelectUser(state as TypeRootState)).toBe(user)
	})
	test('getSelectUserId', () => {
		const state: DeepPartial<TypeRootState> = {
			userStore: { selectUser: { id: 2 } }
		}
		expect(getSelectUserId(state as TypeRootState)).toBe(2)
	})
})
