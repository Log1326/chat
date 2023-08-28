import { createAsyncThunk } from '@reduxjs/toolkit'
import { IGetMessages } from '@/types/messageTypes'
import { MessageService } from '@/service/ApiRoutes'
import {
	IMessage,
	UsersContactsAndUsersOnline
} from '@/store/message/message.types'

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
