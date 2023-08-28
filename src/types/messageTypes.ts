export interface IAddMessageType {
	from: number
	to: number
	message: string
}
export interface IGetMessages {
	from: number | undefined
	to: number | undefined
}
