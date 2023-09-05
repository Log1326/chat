import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CallState, IInitialStateCall } from '@/store/call/call.types'

const initialState: IInitialStateCall = {
	videoCall: {
		isLoadingVideoCall: false,
		isVideoCall: false
	},
	voiceCall: {
		isLoadingVoiceCall: false,
		isVoiceCall: false
	}
}

export const callSlice = createSlice({
	initialState,
	name: 'callStore',
	reducers: {
		videoCallOpenWindow: (state, action: PayloadAction<boolean>) => {
			if (state.videoCall) state.videoCall.isVideoCall = action.payload
		},
		videoCall: (state, action: PayloadAction<CallState>) => {
			if (state.videoCall) state.videoCall.videoCallState = action.payload
		},
		setIncomingVideoCall: (
			state,
			action: PayloadAction<CallState | undefined>
		) => {
			if (state.videoCall) state.videoCall.incomingVideoCall = action.payload
		},
		voiceCallOpenWindow: (state, action: PayloadAction<boolean>) => {
			if (state.voiceCall) state.voiceCall.isVoiceCall = action.payload
		},
		voiceCall: (state, action: PayloadAction<CallState>) => {
			if (state.voiceCall) state.voiceCall.voiceCallState = action.payload
		},
		setIncomingVoiceCall: (
			state,
			action: PayloadAction<CallState | undefined>
		) => {
			if (state.voiceCall) state.voiceCall.incomingVoiceCall = action.payload
		},
		setIsVoiceAcceptCall: (state, action: PayloadAction<boolean>) => {
			if (state.voiceCall) state.voiceCall.isVoiceAcceptCall = action.payload
		},
		setEndCall: state => {
			state.videoCall = null
			state.voiceCall = null
		}
	}
})
