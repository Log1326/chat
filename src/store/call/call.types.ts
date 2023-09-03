import { IUser } from '@/store/user/user.types'

export type CallView = 'outgoing' | 'incoming'
export type CallType = 'audio' | 'video'
interface CallState {
	user: IUser
	type: CallView
	callType: CallType
	roomId: string
	id: string
}
export interface IIncomingCall {
	from: Pick<IUser, 'id' | 'name' | 'image'>
	roomId: string
	callType: string
}
export interface IVideoCall {
	videoCallState?: CallState
	incomingVideoCall?: IIncomingCall
	outgoingVideoCall?: CallState
	isVideoCallAccepted: boolean
	isVideoCallOutgoing: boolean
	isLoadingVideoCall: boolean
	errorVideoCall?: string
}
export interface IVoiceCall {
	voiceCallState?: CallState
	incomingVoiceCall?: IIncomingCall
	outgoingVoiceCall?: CallState
	isVoiceCallOutgoing: boolean
	isVoiceCallAccepted: boolean
	isLoadingVoiceCall: boolean
	errorVoiceCall?: string
}

export interface IInitialStateCall {
	videoCall: IVideoCall | null
	voiceCall: IVoiceCall | null
}
