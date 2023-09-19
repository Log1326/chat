import { AuthService, UserService } from '@/service/ApiRoutes'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { firebaseAuth } from '@/utils/FirebaseConfig'
import { IUser } from '@/store/user/user.types'
import { ILogin } from '@/types/login'
import { LocalStorageService } from '@/service/LocalStorageService'

export interface CheckUserAccountInGoogle extends IUser {
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
			} = await signInWithPopup(firebaseAuth, provider)
			const fakeData = {
				email,
				image: image ?? '',
				name: name ?? '',
				about: 'Available',
				newUser: true
			}
			const { data } = await AuthService.checkAuth(email)
			if (!data.status) return fakeData
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
			const { data } = await AuthService.checkAuth(email)
			LocalStorageService.setUserLocalStorage(data.data)
			return data
		} catch (err: any) {
			return thunkAPI.rejectWithValue(err.response.data)
		}
	}
)

export const RegistrationNewUser = createAsyncThunk<IUser, IUser>(
	'userStore/register',
	async (newUSer, thunkAPI) => {
		try {
			const { data } = await UserService.createUser(newUSer)
			if (!data.status) new Error(data.msg)
			LocalStorageService.setUserLocalStorage(data.data)
			return data.data
		} catch (err: any) {
			return thunkAPI.rejectWithValue(err.response.data.message)
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
