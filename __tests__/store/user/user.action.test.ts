import {
	CheckAuthInServer,
	getAllUsers,
	RegistrationNewUser
} from '@/store/user/user.action'

describe('user.action.test', () => {
	const user = {
		name: 'testing',
		image: 'http://imageTest.jpeg',
		email: 'testing@email.com',
		newUser: true
	}
	test('CheckAuthInServer user not found', async () => {
		const dispatch = jest.fn()
		const fetch = CheckAuthInServer('example@mail.com')
		await fetch(dispatch, () => ({}), '')
		const [startCall, endCall] = dispatch.mock.calls
		expect(startCall[0].type).toBe(CheckAuthInServer.pending.type)
		expect(endCall[0].type).toBe(CheckAuthInServer.rejected.type)
		expect(endCall[0].payload.msg).toBe('User not found')
		expect(endCall[0].payload.status).toBe(false)
	})
	test('CheckAuthInServer user found', async () => {
		const dispatch = jest.fn()
		const fetch = CheckAuthInServer('julia@mail.com')
		await fetch(dispatch, () => ({}), '')
		const [startCall, endCall] = dispatch.mock.calls
		expect(startCall[0].type).toBe(CheckAuthInServer.pending.type)
		expect(endCall[0].type).toBe(CheckAuthInServer.fulfilled.type)
		expect(endCall[0].payload.msg).toBe('User Found')
		expect(endCall[0].payload.status).toBe(true)
	})
	test('CheckAuthInServer reject', async () => {
		const dispatch = jest.fn()
		const fetch = CheckAuthInServer('hi')
		await fetch(dispatch, () => ({}), '')
		const [startCall, endCall] = dispatch.mock.calls
		expect(startCall[0].type).toBe(CheckAuthInServer.pending.type)
		expect(endCall[0].type).toBe(CheckAuthInServer.rejected.type)
		expect(endCall[0].meta.rejectedWithValue).toBe(true)
		expect(endCall[0].meta.arg).toBe('hi')
		expect(endCall[0].meta.requestStatus).toBe('rejected')
	})
	test('RegistrationNewUser new user', async () => {
		const dispatch = jest.fn()
		const fetch = RegistrationNewUser(user)
		await fetch(dispatch, () => ({}), '')
		const [startCall, endCall] = dispatch.mock.calls
		expect(startCall[0].type).toBe(RegistrationNewUser.pending.type)
		//TO DO remove user after test
		// expect(endCall[0].type).toBe(RegistrationNewUser.fulfilled.type)
	})
	test('RegistrationNewUser user already have', async () => {
		const dispatch = jest.fn()
		const fetch = RegistrationNewUser(user)
		await fetch(dispatch, () => ({}), '')
		const [startCall, endCall] = dispatch.mock.calls
		expect(startCall[0].type).toBe(RegistrationNewUser.pending.type)
		expect(endCall[0].type).toBe(RegistrationNewUser.rejected.type)
		expect(endCall[0].payload).toBe('user already have')
	})
	test('getAllUsers ', async () => {
		const dispatch = jest.fn()
		const fetch = getAllUsers()
		await fetch(dispatch, () => ({}), '')
		const [startCall, endCall] = dispatch.mock.calls
		expect(startCall[0].type).toBe(getAllUsers.pending.type)
		expect(endCall[0].type).toBe(getAllUsers.fulfilled.type)
		expect(endCall[0].meta.requestStatus).toBe('fulfilled')
		expect(endCall[0].payload).toBeDefined()
	})
})
