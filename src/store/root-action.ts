import { userSlice } from './user/user.slice'
import * as userAsyncActions from './user/user.action'
import * as messageAsyncActions from './message/message.action'
import { messageSlice } from '@/store/message/message.slice'

export const rootActions = {
	...userSlice.actions,
	...userAsyncActions,
	...messageSlice.actions,
	...messageAsyncActions
}
