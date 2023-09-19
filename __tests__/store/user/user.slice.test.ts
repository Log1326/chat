import { PayloadAction } from '@reduxjs/toolkit'
import { userSlice } from '@/store/user/user.slice'
import { bgChat, IInitialState, IUser } from '@/store/user/user.types'
import {
	CheckAuthInGoogleAccount,
	getAllUsers,
	RegistrationNewUser
} from '@/store/user/user.action'

describe('user.slice.test', () => {
	const data = {
		name: 'anton',
		image: 'http://image',
		id: 1,
		email: 'email.com',
		newUser: true
	}
	const users: Record<string, IUser[]> = {
		a: new Array(3).fill(data),
		b: new Array(1).fill(data)
	}
	const initialState: IInitialState = {
		userInfo: { name: '', email: '', image: '' },
		users: [],
		isNewUser: false,
		isLoading: false,
		error: ''
	}
	test('setName', () => {
		const action: PayloadAction<string> = {
			payload: 'name',
			type: 'userStore/setName'
		}
		expect(userSlice.actions.setName('name')).toEqual(action)
	})
	test('setAbout', () => {
		const action: PayloadAction<string> = {
			payload: 'setAbout',
			type: 'userStore/setAbout'
		}
		expect(userSlice.actions.setAbout('setAbout')).toEqual(action)
	})
	test('setImage', () => {
		const action: PayloadAction<string> = {
			payload: 'setImage',
			type: 'userStore/setImage'
		}
		expect(userSlice.actions.setImage('setImage')).toEqual(action)
	})
	test('setEmail', () => {
		const action: PayloadAction<string> = {
			payload: 'setEmail',
			type: 'userStore/setEmail'
		}
		expect(userSlice.actions.setEmail('setEmail')).toEqual(action)
	})
	test('setSelectUser', () => {
		const action: PayloadAction<IUser | undefined> = {
			payload: data,
			type: 'userStore/setSelectUser'
		}
		expect(userSlice.actions.setSelectUser(data)).toEqual(action)
	})
	test('setUser', () => {
		const action: PayloadAction<IUser> = {
			payload: data,
			type: 'userStore/setUser'
		}
		expect(userSlice.actions.setUser(data)).toEqual(action)
	})
	test('setUser', () => {
		const action: PayloadAction<boolean> = {
			payload: true,
			type: 'userStore/changeIsLoading'
		}
		expect(userSlice.actions.changeIsLoading(true)).toEqual(action)
	})
	test('changeBackgroundChat', () => {
		const action: PayloadAction<bgChat> = {
			payload: 'bg-chat-background-color',
			type: 'userStore/changeBackgroundChat'
		}
		expect(
			userSlice.actions.changeBackgroundChat('bg-chat-background-color')
		).toEqual(action)
	})
	test('extra CheckAuthInGoogleAccount.pending', () => {
		const state = userSlice.reducer(
			initialState,
			CheckAuthInGoogleAccount.pending
		)
		expect(state.isLoading).toBe(true)
		expect(state.error).toBe('')
	})
	test('extra CheckAuthInGoogleAccount.fulfilled', () => {
		const state = userSlice.reducer(
			initialState,
			CheckAuthInGoogleAccount.fulfilled(data, '12')
		)
		expect(state.isLoading).toBe(false)
		expect(state.error).toBe('')
		expect(state.userInfo).toEqual(data)
		expect(state.isNewUser).toBe(true)
	})
	test('extra CheckAuthInGoogleAccount.rejected', () => {
		const state = userSlice.reducer(
			initialState,
			CheckAuthInGoogleAccount.rejected(null, '')
		)
		expect(state.isLoading).toBe(false)
		expect(state.error).toBe('Rejected')
	})
	test('extra RegistrationNewUser.pending', () => {
		const state = userSlice.reducer(
			initialState,
			RegistrationNewUser.pending
		)
		expect(state.isLoading).toBe(true)
		expect(state.error).toBe('')
	})
	test('extra RegistrationNewUser.fulfilled', () => {
		const state = userSlice.reducer(
			initialState,
			RegistrationNewUser.fulfilled(data, '12', data)
		)
		expect(state.isLoading).toBe(false)
		expect(state.isNewUser).toBe(false)
		expect(state.error).toBe('')
		expect(state.userInfo).toEqual(data)
	})
	test('extra RegistrationNewUser.rejected', () => {
		const state = userSlice.reducer(
			initialState,
			RegistrationNewUser.rejected(null, '', data)
		)
		expect(state.isLoading).toBe(false)
		expect(state.error).toBe('rejected')
	})
	test('extra getAllUsers.pending', () => {
		const state = userSlice.reducer(initialState, getAllUsers.pending)
		expect(state.isLoading).toBe(true)
		expect(state.error).toBe('')
	})
	test('extra getAllUsers.fulfilled', () => {
		const state = userSlice.reducer(
			initialState,
			getAllUsers.fulfilled(users, '')
		)
		expect(state.isLoading).toBe(false)
		expect(state.users).toEqual(users)
	})
	test('extra getAllUsers.fulfilled empty []', () => {
		const state = userSlice.reducer(
			initialState,
			getAllUsers.fulfilled({ a: [] }, '')
		)
		expect(state.isLoading).toBe(false)
		expect(state.users).toEqual({ a: [] })
	})
	test('extra getAllUsers.rejected', () => {
		const state = userSlice.reducer(
			initialState,
			getAllUsers.rejected(null, '')
		)
		expect(state.isLoading).toBe(false)
		expect(state.error).toBe('rejected')
	})
})
