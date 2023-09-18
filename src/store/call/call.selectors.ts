import { TypeRootState } from '@/store/store'

export const getIsAcceptCall = (state: TypeRootState) =>
	state.callStore.isAcceptCall
export const getTokenCall = (state: TypeRootState) => state.callStore.token

//===============================video call state ========================================================
export const getVideoCallState = (state: TypeRootState) =>
	state.callStore.videoCall?.videoCallState
export const getIsVideoCall = (state: TypeRootState) =>
	state.callStore.videoCall?.isVideoCall

export const getIncomingVideoCall = (state: TypeRootState) =>
	state.callStore.videoCall?.incomingVideoCall
//===============================voice call state ========================================================
export const getVoiceCallState = (state: TypeRootState) =>
	state.callStore.voiceCall?.voiceCallState
export const getIsVoiceCall = (state: TypeRootState) =>
	state.callStore.voiceCall?.isVoiceCall

export const getIncomingVoiceCall = (state: TypeRootState) =>
	state.callStore.voiceCall?.incomingVoiceCall
