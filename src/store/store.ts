import { userSlice } from './user/user.slice'
import { messageSlice } from '@/store/message/message.slice'
import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
	userStore: userSlice.reducer,
	messageStore: messageSlice.reducer
})
export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.MODE_DEVELEPMENT !== 'production',
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
})

export type TypeRootState = ReturnType<typeof rootReducer>
