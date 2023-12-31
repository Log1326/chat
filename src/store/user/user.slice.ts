import { bgChat, IInitialState, IUser } from './user.types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	CheckAuthInGoogleAccount,
	CheckAuthInServer,
	getAllUsers,
	RegistrationNewUser
} from '@/store/user/user.action'
import { LocalStorageService } from '@/service/LocalStorageService'

const initialState: IInitialState = {
	userInfo: { name: '', image: '', about: '', email: '' },
	users: [],
	isNewUser: false,
	isLoading: false,
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
		},
		changeIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
		},
		changeBackgroundChat: (state, action: PayloadAction<bgChat>) => {
			state.backgroundChat = action.payload
			LocalStorageService.setChatBg(action.payload)
		}
	},
	extraReducers: builder => {
		builder
			.addCase(CheckAuthInGoogleAccount.pending, state => {
				state.isLoading = true
				state.error = ''
			})
			.addCase(CheckAuthInGoogleAccount.fulfilled, (state, { payload }) => {
				if (!payload.newUser) {
					state.userInfo = payload
				} else {
					state.isNewUser = true
					state.userInfo = payload
				}
			})
			.addCase(CheckAuthInGoogleAccount.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.error.message
			})
			.addCase(CheckAuthInServer.pending, state => {
				state.isLoading = true
				state.error = ''
			})
			.addCase(CheckAuthInServer.fulfilled, (state, { payload }) => {
				state.userInfo = payload.data
				state.isLoading = false
			})
			.addCase(CheckAuthInServer.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.error.message
			})
			.addCase(RegistrationNewUser.pending, state => {
				state.isLoading = true
				state.error = ''
			})
			.addCase(RegistrationNewUser.fulfilled, (state, action) => {
				state.userInfo = action.payload
				state.isNewUser = false
				state.isLoading = false
			})
			.addCase(RegistrationNewUser.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.error.message
			})
			.addCase(getAllUsers.pending, state => {
				state.isLoading = true
				state.error = ''
			})
			.addCase(getAllUsers.fulfilled, (state, action) => {
				state.users = action.payload
				state.isLoading = false
			})
			.addCase(getAllUsers.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.error.message
			})
	}
})
