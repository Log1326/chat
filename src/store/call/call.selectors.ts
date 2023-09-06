import { TypeRootState } from '@/store/store'
//video call state
export const getVideoCallState = (state: TypeRootState) =>
	state.callStore.videoCall?.videoCallState
export const getIncomingVideoCall = (state: TypeRootState) =>
	state.callStore.videoCall?.incomingVideoCall
export const getIsVideoCall = (state: TypeRootState) =>
	state.callStore.videoCall?.isVideoCall
export const getIsLoadingVideoCall = (state: TypeRootState) =>
	state.callStore.videoCall?.isLoadingVideoCall
export const getErrorVideoCall = (state: TypeRootState) =>
	state.callStore.videoCall?.errorVideoCall ?? ''

//voice call state ========================================================
export const getVoiceCallState = (state: TypeRootState) =>
	state.callStore.voiceCall?.voiceCallState
export const getIsVoiceCall = (state: TypeRootState) =>
	state.callStore.voiceCall?.isVoiceCall
export const getIsAcceptCall = (state: TypeRootState) =>
	state.callStore.isAcceptCall
export const getIncomingVoiceCall = (state: TypeRootState) =>
	state.callStore.voiceCall?.incomingVoiceCall
export const getIsLoadingVoiceCall = (state: TypeRootState) =>
	state.callStore.voiceCall?.isLoadingVoiceCall
export const getErrorVoiceCall = (state: TypeRootState) =>
	state.callStore.voiceCall?.errorVoiceCall ?? ''

export const getTokenCall = (state: TypeRootState) => state.callStore.token
