import { getTokenCallAsync } from '@/store/call/call.action'

describe('call.async.test', () => {
	test('get data', async () => {
		const dispatch = jest.fn()
		const fetch = getTokenCallAsync('8')
		await fetch(dispatch, () => ({}), '')
		expect(dispatch.mock.calls).toHaveLength(2)
		const [startCall, endCall] = dispatch.mock.calls
		expect(startCall[0].type).toBe('callStore/getTokenCall/pending')
		expect(endCall[0].type).toBe('callStore/getTokenCall/fulfilled')
		expect(endCall[0].payload).not.toBeNull()
	})
})
