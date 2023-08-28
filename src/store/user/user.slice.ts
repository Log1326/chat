import { IInitialState, IUser } from './user.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	CheckAuthInGoogleAccount,
	CheckAuthInServer,
	getAllUsers,
	RegistrationNewUser
} from '@/store/user/user.action'

const initialState: IInitialState = {
	userInfo: { name: '', image: '', about: '', email: '' },
	users: [],
	newUser: false,
	loading: false,
	error: ''
}

export const userSlice = createSlice({
	initialState,
	name: 'userStore',
	reducers: {
		setName: (state, action: PayloadAction<string>) => {
			state.userInfo.name = action.payload
		},
		setAbout: (state, action: PayloadAction<string>) => {
			state.userInfo.about = action.payload
		},
		setImage: ({ userInfo }, action: PayloadAction<string>) => {
			userInfo.image = action.payload
		},
		setEmail: ({ userInfo }, action: PayloadAction<string>) => {
			userInfo.email = action.payload
		},
		setSelectUser: (state, action: PayloadAction<IUser | undefined>) => {
			state.selectUser = action.payload
		},
		setUser: (state, action: PayloadAction<IUser>) => {
			state.userInfo = action.payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(CheckAuthInGoogleAccount.pending, state => {
				state.loading = true
				state.error = ''
			})
			.addCase(CheckAuthInGoogleAccount.fulfilled, (state, { payload }) => {
				if (!payload.newUser) {
					state.userInfo = payload
				} else {
					state.newUser = true
					state.userInfo = payload
				}
				state.loading = false
			})
			.addCase(CheckAuthInGoogleAccount.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
			.addCase(CheckAuthInServer.pending, state => {
				state.loading = true
				state.error = ''
			})
			.addCase(CheckAuthInServer.fulfilled, (state, { payload }) => {
				state.userInfo = payload.data
				state.loading = false
			})
			.addCase(CheckAuthInServer.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
			.addCase(RegistrationNewUser.pending, state => {
				state.loading = true
				state.error = ''
			})
			.addCase(RegistrationNewUser.fulfilled, (state, action) => {
				state.userInfo = action.payload
				state.newUser = false
				state.loading = false
			})
			.addCase(RegistrationNewUser.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
			.addCase(getAllUsers.pending, state => {
				state.loading = true
				state.error = ''
			})
			.addCase(getAllUsers.fulfilled, (state, action) => {
				state.users = action.payload
				state.loading = false
			})
			.addCase(getAllUsers.rejected, (state, action) => {
				state.loading = false
				state.error = action.error.message
			})
	}
})
