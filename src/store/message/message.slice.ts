import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	IInitialStateMessage,
	IMessage,
	MessageByIDAndMessage,
	UsersContactsAndUsersOnline
} from '@/store/message/message.types'
import {
	addMessageImage,
	addMessageSend,
	getAllMessage,
	getMessageContacts,
	removeMessageIdAsync,
	updateMessageIdAsync
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
		},
		changeIsLoadingUserContact: (state, action: PayloadAction<boolean>) => {
			state.usersContactsAndUsersOnline.usersContactsLoading =
				action.payload
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
					state.usersContactsAndUsersOnline.usersContactsLoading =
						false
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
			.addCase(removeMessageIdAsync.pending, state => {
				state.loadingMessage = true
				state.errorMessage = ''
			})
			.addCase(
				removeMessageIdAsync.fulfilled,
				(
					state,
					action: PayloadAction<{ message: string; id: number }>
				) => {
					state.loadingMessage = false
					state.messages = state.messages?.filter(
						item => item.id !== action.payload.id
					)
				}
			)
			.addCase(removeMessageIdAsync.rejected, (state, action) => {
				state.loadingMessage = false
				state.errorMessage = String(action.payload)
			})
			.addCase(updateMessageIdAsync.pending, state => {
				state.loadingMessage = true
				state.errorMessage = ''
			})
			.addCase(
				updateMessageIdAsync.fulfilled,
				(state, action: PayloadAction<MessageByIDAndMessage>) => {
					state.loadingMessage = false
					if (action.payload?.id)
						state.messages?.find(item => {
							if (item.id === action.payload.id)
								item.message = action.payload.message
						})
				}
			)
			.addCase(updateMessageIdAsync.rejected, (state, action) => {
				state.loadingMessage = false
				state.errorMessage = String(action.payload)
			})
	}
})
