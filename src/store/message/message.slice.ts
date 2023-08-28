import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	IInitialStateMessage,
	IMessage,
	UsersContactsAndUsersOnline
} from '@/store/message/message.types'
import {
	getAllMessage,
	getMessageContacts
} from '@/store/message/message.action'

const initialState: IInitialStateMessage = {
	toggleChatPage: true,
	isSearchMessage: false,
	usersContactsAndUsersOnline: {}
}

export const messageSlice = createSlice({
	initialState,
	name: 'messageStore',
	reducers: {
		toggleChatPage: (state, action) => {
			state.toggleChatPage = action.payload
		},
		setMessages: ({ messages }, action: PayloadAction<IMessage>) => {
			messages?.push(action.payload)
		},
		setMessage: (
			state,
			action: PayloadAction<((val: string) => string) | string>
		) => {
			state.message = action.payload
		},
		setSocketState: (state, action) => {
			state.socketState = action.payload
		},
		changeIsSearchMessage: (state, action) => {
			state.isSearchMessage = action.payload
		}
	},
	extraReducers: builder => {
		builder
			.addCase(getAllMessage.pending, state => {
				state.loadingMessage = true
				state.errorMessage = ''
			})
			.addCase(getAllMessage.fulfilled, (state, action) => {
				state.messages = action.payload
				state.loadingMessage = false
			})
			.addCase(getAllMessage.rejected, (state, action) => {
				state.loadingMessage = false
				state.errorMessage = action.error.message
			})
			.addCase(getMessageContacts.pending, state => {
				state.usersContactsAndUsersOnline.usersContactsLoading = true
				state.usersContactsAndUsersOnline.usersContactsError = ''
			})
			.addCase(
				getMessageContacts.fulfilled,
				(state, action: PayloadAction<UsersContactsAndUsersOnline>) => {
					state.usersContactsAndUsersOnline.usersContacts =
						action.payload.usersContacts
					state.usersContactsAndUsersOnline.onlineUsers =
						action.payload.onlineUsers
					state.usersContactsAndUsersOnline.usersContactsLoading = false
				}
			)
			.addCase(getMessageContacts.rejected, (state, action) => {
				state.usersContactsAndUsersOnline.usersContactsLoading = false
				state.usersContactsAndUsersOnline.usersContactsError = String(
					action.payload
				)
			})
	}
})
