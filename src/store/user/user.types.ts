export interface IUser {
	id?: number | null
	email: string
	name: string
	image: string
	about?: string
	totalUnreadMessages?: number
}
export type TypeCoordinates = {
	x: number
	y: number
}
export type bgChat =
	| 'bg-chat-background-color'
	| 'bg-chat-background-pale'
	| 'bg-chat-background-space'
	| 'bg-chat-background-teal'
	| 'bg-chat-background-white'

export interface IInitialState {
	userInfo: IUser
	users: Record<string, IUser[]> | []
	selectUser?: IUser
	isNewUser: boolean
	isLoading?: boolean
	isLoadingData?: boolean
	backgroundChat?: bgChat
	error?: string
	coordinates?: TypeCoordinates
}
