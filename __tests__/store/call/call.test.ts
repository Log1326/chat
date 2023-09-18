import { TypeRootState } from '@/store/store'
import { getIsAcceptCall, getTokenCall } from '@/store/call/call.selectors'

describe('call', () => {
	test('getIsAcceptCall', () => {
		const state: DeepPartial<TypeRootState> = {
			callStore: { isAcceptCall: true }
		}
		expect(getIsAcceptCall(state as TypeRootState)).toEqual(true)
	})
	test('getTokenCall', () => {
		const token: string = 'sdafghgewr324!@#DSdsdfwsdfasd'
		const state: DeepPartial<TypeRootState> = {
			callStore: { token: token }
		}
		expect(getTokenCall(state as TypeRootState)).toEqual(token)
	})
})
