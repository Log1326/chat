import { CallState, CallStateIncoming } from '@/store/call/call.types'
import { TypeRootState } from '@/store/store'
import {
	getIncomingVideoCall,
	getIsVideoCall,
	getVideoCallState
} from '@/store/call/call.selectors'

describe('callVideo.test', () => {
	test('get data', () => {
		const data: CallState = {
			user: { id: 12, name: 'anton', image: 'http://image.jpg' },
			callType: 'video',
			type: 'incoming',
			roomId: 132
		}
		const state: DeepPartial<TypeRootState> = {
			callStore: { videoCall: { videoCallState: data } }
		}
		expect(getVideoCallState(state as TypeRootState)).toEqual(data)
	})
	test('get data undefined', () => {
		const state: DeepPartial<TypeRootState> = {
			callStore: { videoCall: {} }
		}
		expect(getVideoCallState(state as TypeRootState)).toEqual(undefined)
	})
	test('get isVideoCall false', () => {
		const state: DeepPartial<TypeRootState> = {
			callStore: { videoCall: { isVideoCall: false } }
		}
		expect(getIsVideoCall(state as TypeRootState)).toEqual(false)
	})
	test('get isVideoCall false', () => {
		const data: CallStateIncoming = {
			user: { id: 12, name: 'anton', image: 'http://image.jpg' },
			callType: 'video',
			type: 'incoming',
			roomId: 132
		}
		const state: DeepPartial<TypeRootState> = {
			callStore: { videoCall: { incomingVideoCall: data } }
		}
		expect(getIncomingVideoCall(state as TypeRootState)).toEqual(data)
	})
})
