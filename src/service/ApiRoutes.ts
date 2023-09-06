import axios, { AxiosResponse } from 'axios'
import { ILogin } from '@/types/login'
import { IUser } from '@/store/user/user.types'
import {
	IGetMessages,
	UsersContactsAndUsersOnline
} from '@/store/message/message.types'
import {
	ADD_MESSAGE_AUDIO,
	ADD_MESSAGE_IMAGE,
	ADD_MESSAGES,
	CHECK_AUTH_ROUTE,
	GENERATE_TOKEN_ROUTE,
	GET_ALL_USERS,
	GET_CONTACTS,
	GET_MESSAGES,
	ONBOARD_USER_ROUTE
} from '@/service/const'

export const AuthService = {
	async checkAuth(
		email: string | null | undefined
	): Promise<AxiosResponse<ILogin>> {
		return axios.post<string, AxiosResponse<ILogin>>(CHECK_AUTH_ROUTE, {
			email
		})
	},
	async generateToken(id: string) {
		return axios.get<string, AxiosResponse<{ token: string }>>(
			`${GENERATE_TOKEN_ROUTE}/${id}`
		)
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
		userId: number | undefined | null,
		selectChatUserId: number | undefined | null
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
