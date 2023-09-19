import { getTokenCallAsync } from '@/store/call/call.action'

describe('call.async.test', () => {
	test('get data', async () => {
		const dispatch = jest.fn()
		const fetch = getTokenCallAsync('3')
		await fetch(dispatch, () => ({}), '')
		const [startCall, endCall] = dispatch.mock.calls
		expect(dispatch.mock.calls).toHaveLength(2)
		expect(startCall[0].type).toBe(getTokenCallAsync.pending.type)
		expect(endCall[0].type).toBe(getTokenCallAsync.fulfilled.type)
		expect(endCall[0].payload).toBeDefined()
	})
	test('get data error with invalid user id', async () => {
		const dispatch = jest.fn()
		const fetch = getTokenCallAsync('123')
		await fetch(dispatch, () => ({}), '')
		const [startCall, endCall] = dispatch.mock.calls
		expect(dispatch.mock.calls).toHaveLength(2)
		expect(startCall[0].type).toBe(getTokenCallAsync.pending.type)
		expect(endCall[0].type).toBe(getTokenCallAsync.rejected.type)
		expect(endCall[0].meta.rejectedWithValue).toBeTruthy()
		expect(endCall[0].meta.requestStatus).toBe('rejected')
	})
})
