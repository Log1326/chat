import { IUser } from '@/store/user/user.types'

export interface ILogin {
	data: IUser
	status: boolean
	msg: string
}
