import { TypeRootState } from '@/store/store'

export const getAllMessagesState = (state: TypeRootState) =>
	state.messageStore.messages
export const getMessageState = (state: TypeRootState) =>
	state.messageStore.message
export const getToggleChatPage = (state: TypeRootState) =>
	state.messageStore.toggleChatPage
export const getSocketState = (state: TypeRootState) =>
	state.messageStore.socketState
export const getIsSearchMessage = (state: TypeRootState) =>
	state.messageStore.isSearchMessage
export const getStateMessageContacts = (state: TypeRootState) =>
	state.messageStore.usersContactsAndUsersOnline.usersContacts
export const getStateMessageOnlineUsers = (state: TypeRootState) =>
	state.messageStore.usersContactsAndUsersOnline.onlineUsers
export const getStateMessageLoading = (state: TypeRootState) =>
	state.messageStore.usersContactsAndUsersOnline.usersContactsLoading
export const getStateMessageError = (state: TypeRootState) =>
	state.messageStore.usersContactsAndUsersOnline.usersContactsError
