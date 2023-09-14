import { IUser } from '@/store/user/user.types'

export type CallView = 'outgoing' | 'incoming'
export type CallType = 'audio' | 'video'
export interface CallState {
	user: Pick<IUser, 'id' | 'name' | 'image'>
	type: CallView
	callType: CallType
	roomId: number
	id?: string
}
export interface IVideoCall {
	videoCallState?: CallState
	incomingVideoCall?: CallState
	isVideoCall: boolean
	isLoadingVideoCall: boolean
	errorVideoCall?: string
}
export interface IVoiceCall {
	voiceCallState?: CallState
	incomingVoiceCall?: CallState
	isVoiceCall: boolean
	isLoadingVoiceCall: boolean
	errorVoiceCall?: string
}

export interface IInitialStateCall {
	videoCall: IVideoCall | null
	voiceCall: IVoiceCall | null
	token?: string
	isAcceptCall?: boolean
}
