import { userSlice } from './user/user.slice'
import * as userAsyncActions from './user/user.action'
import * as messageAsyncActions from './message/message.action'
import * as callAsyncActions from './call/call.action'

import { messageSlice } from '@/store/message/message.slice'
import { callSlice } from '@/store/call/call.slice'

export const rootActions = {
	...userSlice.actions,
	...userAsyncActions,
	...messageSlice.actions,
	...messageAsyncActions,
	...callSlice.actions,
	...callAsyncActions
}
