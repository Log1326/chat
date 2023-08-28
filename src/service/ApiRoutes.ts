import axios, { AxiosResponse } from 'axios'
import { ILogin } from '@/types/login'
import { IUser } from '@/store/user/user.types'
import { IGetMessages } from '@/types/messageTypes'
import { UsersContactsAndUsersOnline } from '@/store/message/message.types'

export const HOST = 'http://localhost:4000'

const AUTH_ROUTE = `${HOST}/api/auth`
const MESSAGES_ROUTE = `${HOST}/api/messages`

export const CHECK_AUTH_ROUTE = `${AUTH_ROUTE}/check-user`
export const ONBOARD_USER_ROUTE = `${AUTH_ROUTE}/onboard-user`
export const GET_ALL_USERS = `${AUTH_ROUTE}/users-contacts`
export const ADD_MESSAGES = `${MESSAGES_ROUTE}/add-message`
export const GET_MESSAGES = `${MESSAGES_ROUTE}/get-messages`
export const GET_CONTACTS = `${MESSAGES_ROUTE}/get-contacts`
export const ADD_MESSAGE_IMAGE = `${MESSAGES_ROUTE}/add-image-message`
export const ADD_MESSAGE_AUDIO = `${MESSAGES_ROUTE}/add-audio-message`

export const AuthService = {
	async checkAuth(
		email: string | null | undefined
	): Promise<AxiosResponse<ILogin>> {
		return axios.post<string, AxiosResponse<ILogin>>(CHECK_AUTH_ROUTE, {
			email
		})
	}
}
export const UserService = {
	async getAllUsers(): Promise<Record<string, IUser[]>> {
		const users = await axios.get(GET_ALL_USERS)
		return users.data.users
	},
	async createUser(data: IUser): Promise<AxiosResponse<ILogin>> {
		return axios.post<string, AxiosResponse<ILogin>>(ONBOARD_USER_ROUTE, {
			data
		})
	}
}
export const MessageService = {
	async addMessageSent(senData: {
		from: number
		to: number
		message: ((val: string) => string) | string
	}) {
		try {
			const response = await axios.post(ADD_MESSAGES, {
				to: senData.to,
				from: senData.from,
				message: senData.message
			})
			return response.data
		} catch (err) {
			console.log(err)
		}
	},
	async receiveMessage(data: IGetMessages) {
		try {
			const response = await axios.get(
				`${GET_MESSAGES}/${data.from}/${data.to}`
			)
			return response.data
		} catch (err) {
			console.log(err)
		}
	},
	async getContacts(
		from: number
	): Promise<AxiosResponse<UsersContactsAndUsersOnline>> {
		return await axios.get(`${GET_CONTACTS}/${from}`)
	},
	async addMessageImage(
		formData: FormData,
		userId: number,
		selectChatUserId: number
	) {
		return await axios.post(`${ADD_MESSAGE_IMAGE}`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			},
			params: {
				from: userId,
				to: selectChatUserId
			}
		})
	},
	async addMessageAudio(
		formData: FormData,
		userId: number | undefined,
		selectChatUserId: number | undefined
	) {
		return await axios.post(`${ADD_MESSAGE_AUDIO}`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			},
			params: {
				from: userId,
				to: selectChatUserId
			}
		})
	}
}
