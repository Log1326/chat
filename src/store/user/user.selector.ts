import { TypeRootState } from '../store'
import { createSelector } from 'reselect'
import { IUser } from '@/store/user/user.types'

export const getLoadingUser = (state: TypeRootState) => state.userStore.loading
export const getErrorUser = (state: TypeRootState) => state.userStore.error
export const getUser = (state: TypeRootState) => state.userStore.userInfo
export const getUserId = (state: TypeRootState) => state.userStore.userInfo.id
export const getNewUserBool = (state: TypeRootState) => state.userStore.newUser
export const getUsers = (state: TypeRootState) => state.userStore.users
export const getUserImage = (state: TypeRootState) =>
	state.userStore.userInfo?.image ?? ''
export const getSelectUser = (state: TypeRootState) =>
	state.userStore.selectUser
export const getSelectUserId = (state: TypeRootState) =>
	state.userStore.selectUser?.id
export const getUsersSelected = createSelector(
	getUser,
	getUsers,
	(user, users) => {
		return Object.entries(users).map(
			([key, values]): { key: string; users: IUser[] } => {
				const users = values.filter(value => value.id !== user.id)
				return { key, users }
			}
		)
	}
)
