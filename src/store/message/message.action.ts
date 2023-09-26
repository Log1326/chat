import { createAsyncThunk } from '@reduxjs/toolkit'
import { MessageService } from '@/service/ApiRoutes'
import {
	IAddMessageImage,
	IAddMessageType,
	IGetMessages,
	IMessage,
	MessageByIDAndMessage,
	UsersContactsAndUsersOnline
} from '@/store/message/message.types'
import { TypeRootState } from '@/store/store'
import { SEND_MSG } from '@/utils/constants'

export const getAllMessage = createAsyncThunk<IMessage[], IGetMessages>(
	'messageStore/getAllMessage',
	async ({ to, from }, { rejectWithValue }) => {
		try {
			const data = await MessageService.receiveMessage({ to, from })
			return data.messages
		} catch (err) {
			return rejectWithValue(err)
		}
	}
)
export const getMessageContacts = createAsyncThunk<
	UsersContactsAndUsersOnline,
	number
>('messageStore/getMessageContacts', async (from, { rejectWithValue }) => {
	try {
		const response = await MessageService.getContacts(from)
		return response.data
	} catch (err) {
		return rejectWithValue(err)
	}
})
export const addMessageImage = createAsyncThunk<IMessage, IAddMessageImage>(
	'messageStore/addMessageImage',
	async ({ userId, selectChatUserId, formData }, thunkAPI) => {
		try {
			const {
				messageStore: { socketState: socketRef }
			} = thunkAPI.getState() as TypeRootState
			const { status, data } = await MessageService.addMessageImage(
				formData,
				userId,
				selectChatUserId
			)
			if (status === 201) {
				socketRef?.emit(SEND_MSG, {
					to: selectChatUserId,
					from: userId,
					message: data.message
				})
				return data.message
			}
		} catch (err) {
			thunkAPI.rejectWithValue(err)
		}
	}
)
export const addMessageSend = createAsyncThunk<IMessage, IAddMessageType>(
	'messageStore/addMessageSend',
	async ({ message, to, from }, thunkAPI) => {
		try {
			const {
				messageStore: { socketState: socketRef }
			} = thunkAPI.getState() as TypeRootState
			const response = await MessageService.addMessageSent({
				to,
				from,
				message: message ? message : ''
			})
			socketRef?.emit(SEND_MSG, {
				to,
				from,
				message: response?.message
			})
			if (response) return response.message
		} catch (err) {
			return thunkAPI.rejectWithValue(err)
		}
	}
)
export const removeMessageIdAsync = createAsyncThunk<
	{ message: string; id: number },
	number
>('messageStore/removeMessageIdAsync', async (id, thunkAPI) => {
	try {
		const { data } = await MessageService.removeMessageId(id)
		return data
	} catch (err) {
		thunkAPI.rejectWithValue(err)
	}
})
export const updateMessageIdAsync = createAsyncThunk<
	MessageByIDAndMessage,
	MessageByIDAndMessage
>('messageStore/updateMessageIdAsync', async ({ id, message }, thunkAPI) => {
	try {
		const { data } = await MessageService.updateMessageId(id, message)
		return data
	} catch (err) {
		thunkAPI.rejectWithValue(err)
	}
})
