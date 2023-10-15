import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
	CallView,
	IIncomingCall,
	IInitialStateCall
} from '@/store/call/call.types'

const initialState: IInitialStateCall = {
	videoCall: {
		isVideoCallAccepted: false,
		isLoadingVideoCall: false,
		isVideoCallOutgoing: false
	},
	voiceCall: {
		isVoiceCallAccepted: false,
		isLoadingVoiceCall: false,
		isVoiceCallOutgoing: false
	}
}

export const callSlice = createSlice({
	initialState,
	name: 'callStore',
	reducers: {
		videoCallOpenWindow: (state, action: PayloadAction<boolean>) => {
			if (state.videoCall) state.videoCall.isVideoCallOutgoing = action.payload
		},
		voiceCallOpenWindow: (state, action: PayloadAction<boolean>) => {
			if (state.voiceCall) state.voiceCall.isVoiceCallOutgoing = action.payload
		},
		videoCallOutgoingType: (state, action: PayloadAction<CallView>) => {
			if (state.videoCall?.videoCallState)
				state.videoCall.videoCallState.type = action.payload
		},
		voiceCallOutgoingCall: (state, action: PayloadAction<CallView>) => {
			if (state.voiceCall?.voiceCallState)
				state.voiceCall.voiceCallState.type = action.payload
		},
		setIncomingVoiceCall: (state, action: PayloadAction<IIncomingCall>) => {
			if (state.voiceCall) state.voiceCall.incomingVoiceCall = action.payload
		},
		setIncomingVideoCall: (state, action: PayloadAction<IIncomingCall>) => {
			if (state.videoCall) state.videoCall.incomingVideoCall = action.payload
		},
		setEndCall: state => {
			state.videoCall = null
			state.voiceCall = null
		}
	}
})
