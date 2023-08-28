export interface IUser {
	id?: number
	email: string
	name: string
	image: string
	about?: string
	totalUnreadMessages?: number
}

export interface IInitialState {
	userInfo: IUser
	users: Record<string, IUser[]>
	selectUser?: IUser
	newUser: boolean
	loading?: boolean
	error?: string
}
