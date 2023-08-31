import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	IInitialStateMessage,
	IMessage,
	UsersContactsAndUsersOnline
} from '@/store/message/message.types'
import {
	addMessageImage,
	addMessageSend,
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
		toggleChatPage: (state, action: PayloadAction<boolean>) => {
			state.toggleChatPage = action.payload
		},
		setMessages: ({ messages }, action: PayloadAction<IMessage>) => {
			messages?.push(action.payload)
		},
		setMessage: (state, action: PayloadAction<string>) => {
			state.message = action.payload
		},
		setSocketState: (state, action) => {
			state.socketState = action.payload
		},
		changeIsSearchMessage: (state, action: PayloadAction<boolean>) => {
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
			.addCase(addMessageImage.pending, state => {
				state.loadingMessage = true
				state.errorMessage = ''
			})
			.addCase(
				addMessageImage.fulfilled,
				(state, action: PayloadAction<IMessage>) => {
					state.messages?.push(action.payload)
					state.message = ''
					state.loadingMessage = false
					state.errorMessage = ''
				}
			)
			.addCase(addMessageImage.rejected, (state, action) => {
				state.loadingMessage = false
				state.errorMessage = action.error.message
			})
			.addCase(addMessageSend.pending, state => {
				state.loadingMessage = true
				state.errorMessage = ''
			})
			.addCase(
				addMessageSend.fulfilled,
				(state, action: PayloadAction<IMessage>) => {
					state.messages?.push(action.payload)
					state.message = ''
					state.loadingMessage = false
					state.errorMessage = ''
				}
			)
			.addCase(addMessageSend.rejected, (state, action) => {
				state.loadingMessage = false
				state.errorMessage = action.error.message
			})
	}
})
