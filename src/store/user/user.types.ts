export interface IUser {
	id?: number | null
	email: string
	name: string
	image: string
	about?: string
	totalUnreadMessages?: number
}
export type bgChat = 'color' | 'pale' | 'space' | 'teal' | 'white'

export interface IInitialState {
	userInfo: IUser
	users: Record<string, IUser[]> | []
	selectUser?: IUser
	isNewUser: boolean
	isLoading?: boolean
	backgroundChat?: bgChat
	error?: string
}
