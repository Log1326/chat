import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from '@/service/ApiRoutes'

export const getTokenCallAsync = createAsyncThunk<string | undefined, string>(
	'callStore/getTokenCall',
	async (id, thunkAPI) => {
		try {
			const {
				data: { token }
			} = await AuthService.generateToken(String(id))
			return token
		} catch (err) {
			thunkAPI.rejectWithValue(err)
		}
	}
)
