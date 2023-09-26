import { userSlice } from './user/user.slice'
import { messageSlice } from '@/store/message/message.slice'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { callSlice } from '@/store/call/call.slice'

const rootReducer = combineReducers({
	userStore: userSlice.reducer,
	messageStore: messageSlice.reducer,
	callStore: callSlice.reducer
})
export const store = (initialState = {}) => {
	return configureStore({
		reducer: rootReducer,
		preloadedState: initialState,
		devTools: process.env.MODE_DEVELOPMENT !== 'production',
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware({
				serializableCheck: false
			})
	})
}

export type TypeRootState = ReturnType<typeof rootReducer>
