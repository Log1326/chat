import { IUser } from '@/store/user/user.types'

export type CallView = 'outgoing' | 'incoming'
export type CallViewIncoming = 'incoming'

export type CallType = 'audio' | 'video'
interface state {
	user: Pick<IUser, 'id' | 'name' | 'image'>
	callType: CallType
	roomId: number
	id?: string
}
export interface CallState extends state {
	type: CallView
}
export interface CallStateIncoming extends state {
	type: CallViewIncoming
}
export interface IVideoCall {
	videoCallState?: CallState
	incomingVideoCall?: CallStateIncoming
	isVideoCall: boolean
	errorVideoCall?: string
}
export interface IVoiceCall {
	voiceCallState?: CallState
	incomingVoiceCall?: CallStateIncoming
	isVoiceCall: boolean
	errorVoiceCall?: string
}

export interface IInitialStateCall {
	videoCall: IVideoCall | null
	voiceCall: IVoiceCall | null
	token?: string
	isAcceptCall?: boolean
}
