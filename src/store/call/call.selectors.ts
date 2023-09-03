import { TypeRootState } from '@/store/store'
//video call state
export const getVideoCallState = (state: TypeRootState) =>
	state.callStore.videoCall?.videoCallState
export const getIncomingVideoCall = (state: TypeRootState) =>
	state.callStore.videoCall?.incomingVideoCall
export const getOutgoingVideoCall = (state: TypeRootState) =>
	state.callStore.videoCall?.outgoingVideoCall
export const getIsVideoCallAccepted = (state: TypeRootState) =>
	state.callStore.videoCall?.isVideoCallAccepted
export const getIsVideoCallOutgoing = (state: TypeRootState) =>
	state.callStore.videoCall?.isVideoCallOutgoing
export const getIsLoadingVideoCall = (state: TypeRootState) =>
	state.callStore.videoCall?.isLoadingVideoCall
export const getErrorVideoCall = (state: TypeRootState) =>
	state.callStore.videoCall?.errorVideoCall ?? ''

//voice call state
export const getVoiceCallState = (state: TypeRootState) =>
	state.callStore.voiceCall?.voiceCallState
export const getIsVoiceCallAccepted = (state: TypeRootState) =>
	state.callStore.voiceCall?.isVoiceCallAccepted
export const getIsVoiceCallOutgoing = (state: TypeRootState) =>
	state.callStore.voiceCall?.isVoiceCallOutgoing
export const getIncomingVoiceCall = (state: TypeRootState) =>
	state.callStore.voiceCall?.incomingVoiceCall
export const getOutgoingVoiceCall = (state: TypeRootState) =>
	state.callStore.voiceCall?.outgoingVoiceCall
export const getIsLoadingVoiceCall = (state: TypeRootState) =>
	state.callStore.voiceCall?.isLoadingVoiceCall
export const getErrorVoiceCall = (state: TypeRootState) =>
	state.callStore.voiceCall?.errorVoiceCall ?? ''
