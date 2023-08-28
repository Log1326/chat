import { AuthService, UserService } from '@/service/ApiRoutes'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { firebasaeAuth } from '@/utils/FirebaseConfig'
import { IUser } from '@/store/user/user.types'
import { ILogin } from '@/types/login'
import { LocalStorageService } from '@/service/LocalStorageService'

interface CheckUserAccountInGoogle extends IUser {
	newUser?: boolean
}
export const CheckAuthInGoogleAccount = createAsyncThunk<
	CheckUserAccountInGoogle,
	void
>(
	'userStore/checkUser',
	async (_, thunkAPI): Promise<CheckUserAccountInGoogle | any> => {
		try {
			const provider = new GoogleAuthProvider()
			const {
				user: { displayName: name, email, photoURL: image }
			} = await signInWithPopup(firebasaeAuth, provider)
			const { data } = await AuthService.checkAuth(email)
			if (!data.status) {
				return {
					email,
					image: image ?? '',
					name: name ?? '',
					about: 'Available',
					newUser: true
				}
			}
			LocalStorageService.setUserLocalStorage(data.data)
			return data.data
		} catch (err) {
			return thunkAPI.rejectWithValue(err)
		}
	}
)
export const CheckAuthInServer = createAsyncThunk<ILogin, string>(
	'userStore/checkUserServer',
	async (email, thunkAPI) => {
		try {
			const response = await AuthService.checkAuth(email)
			LocalStorageService.setUserLocalStorage(response.data.data)
			return response.data
		} catch (err) {
			return thunkAPI.rejectWithValue(err)
		}
	}
)

export const RegistrationNewUser = createAsyncThunk<IUser, IUser>(
	'userStore/register',
	async (data, thunkAPI) => {
		try {
			const response = await UserService.createUser(data)
			if (response.data.status) {
				LocalStorageService.setUserLocalStorage(response.data.data)
				return response.data.data
			}
			return thunkAPI.rejectWithValue(response.data.msg)
		} catch (err) {
			return thunkAPI.rejectWithValue(err)
		}
	}
)
export const getAllUsers = createAsyncThunk<Record<string, IUser[]>, void>(
	'userStore/getAllNewUsers',
	async (_, { rejectWithValue }) => {
		try {
			return await UserService.getAllUsers()
		} catch (err) {
			return rejectWithValue(err)
		}
	}
)
