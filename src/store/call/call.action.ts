import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from '@/service/ApiRoutes'

export const getTokenCallAsync = createAsyncThunk<string | undefined, string>(
	'callStore/getTokenCall',
	async (id, thunkAPI) => {
		try {
			return (await AuthService.generateToken(String(id))).data.token
		} catch (err) {
			thunkAPI.rejectWithValue(err)
		}
	}
)
