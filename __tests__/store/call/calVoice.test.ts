import { CallState, CallStateIncoming } from '@/store/call/call.types'
import { TypeRootState } from '@/store/store'
import {
	getIncomingVoiceCall,
	getIsVoiceCall,
	getVoiceCallState
} from '@/store/call/call.selectors'

describe('voice called', () => {
	test('get data', () => {
		const data: CallState = {
			user: { id: 12, name: 'anton', image: 'http://image.jpg' },
			callType: 'audio',
			type: 'incoming',
			roomId: 132
		}
		const state: DeepPartial<TypeRootState> = {
			callStore: { voiceCall: { voiceCallState: data } }
		}
		expect(getVoiceCallState(state as TypeRootState)).toEqual(data)
	})
	test('get undefined', () => {
		const state: DeepPartial<TypeRootState> = {
			callStore: { voiceCall: {} }
		}
		expect(getVoiceCallState(state as TypeRootState)).toEqual(undefined)
	})
	test('get isVoice true', () => {
		const state: DeepPartial<TypeRootState> = {
			callStore: { voiceCall: { isVoiceCall: true } }
		}
		expect(getIsVoiceCall(state as TypeRootState)).toEqual(true)
	})
	test('get incomingVoiceCall', () => {
		const data: CallStateIncoming = {
			user: { id: 12, name: 'anton', image: 'http://image.jpg' },
			callType: 'audio',
			type: 'incoming',
			roomId: 132
		}
		const state: DeepPartial<TypeRootState> = {
			callStore: { voiceCall: { incomingVoiceCall: data } }
		}
		expect(getIncomingVoiceCall(state as TypeRootState)).toEqual(data)
	})
})
