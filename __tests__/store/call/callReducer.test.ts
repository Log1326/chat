import { callSlice } from '@/store/call/call.slice'
import { PayloadAction } from '@reduxjs/toolkit'
import { CallState, CallStateIncoming } from '@/store/call/call.types'

describe('callReducer.test', () => {
	function state<T>(): T extends CallStateIncoming
		? CallStateIncoming
		: CallState {
		return {
			id: '12',
			type: 'incoming',
			callType: 'video',
			roomId: 123,
			user: { id: 1, image: 'http://image.jpg', name: 'anton' }
		}
	}
	test('videoCallOpenWindow', () => {
		const action: PayloadAction<boolean> = {
			payload: true,
			type: 'callStore/videoCallOpenWindow'
		}
		expect(callSlice.actions.videoCallOpenWindow(true)).toEqual(action)
	})
	test('voiceCallOpenWindow', () => {
		const action: PayloadAction<boolean> = {
			payload: true,
			type: 'callStore/voiceCallOpenWindow'
		}
		expect(callSlice.actions.voiceCallOpenWindow(true)).toEqual(action)
	})
	test('videoCall', () => {
		const action: PayloadAction<CallState> = {
			payload: state<CallState>(),
			type: 'callStore/videoCall'
		}
		expect(callSlice.actions.videoCall(state<CallState>())).toEqual(action)
	})
	test('voiceCall', () => {
		const action: PayloadAction<CallState> = {
			payload: state<CallState>(),
			type: 'callStore/voiceCall'
		}
		expect(callSlice.actions.voiceCall(state<CallState>())).toEqual(action)
	})
	test('setIncomingVideoCall', () => {
		const action: PayloadAction<CallStateIncoming> = {
			payload: state<CallStateIncoming>(),
			type: 'callStore/videoCall'
		}
		expect(callSlice.actions.videoCall(state<CallStateIncoming>())).toEqual(
			action
		)
	})
	test('setIncomingVoiceCall', () => {
		const action: PayloadAction<CallStateIncoming> = {
			payload: state<CallStateIncoming>(),
			type: 'callStore/setIncomingVoiceCall'
		}
		expect(
			callSlice.actions.setIncomingVoiceCall(state<CallStateIncoming>())
		).toEqual(action)
	})
	test('setIsAcceptCall', () => {
		const action: PayloadAction<boolean> = {
			payload: true,
			type: 'callStore/setIsAcceptCall'
		}
		expect(callSlice.actions.setIsAcceptCall(true)).toEqual(action)
	})
	test('setToken', () => {
		const token = 'asd12dasdaeadsdvff'
		const action: PayloadAction<string> = {
			payload: token,
			type: 'callStore/setToken'
		}
		expect(callSlice.actions.setToken(token)).toEqual(action)
	})
	test('setEndCall', () => {
		const action: PayloadAction<undefined> = {
			payload: undefined,
			type: 'callStore/setEndCall'
		}
		expect(callSlice.actions.setEndCall()).toEqual(action)
	})
})
