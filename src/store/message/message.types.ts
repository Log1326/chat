import { Socket } from 'socket.io-client/build/esm/socket'
import { IUser } from '@/store/user/user.types'

export type TypeMessageStatus = 'sent' | 'read' | 'delivered'
export type TypeMessage = 'text' | 'audio' | 'image'

export interface IMessage {
	createdAt: number
	id: number
	message: string
	messageStatus: TypeMessageStatus
	reciverId: number
	senderId: number
	type: TypeMessage
	totalUnreadMessages?: number
}
export interface IGetInitialUsersChat<T> extends IUser, Omit<IMessage, 'id'> {
	reciever?: T
	sender?: T
}
export interface UsersContactsAndUsersOnline {
	usersContacts?: IGetInitialUsersChat<IUser>[]
	onlineUsers?: number[]
	usersContactsLoading?: boolean
	usersContactsError?: string
}
export interface IInitialStateMessage {
	socketState?: Socket
	messages?: IMessage[]
	message?: ((val: string) => string) | string
	isSearchMessage?: boolean
	loadingMessage?: boolean
	errorMessage?: string
	toggleChatPage?: boolean
	usersContactsAndUsersOnline: UsersContactsAndUsersOnline
}
