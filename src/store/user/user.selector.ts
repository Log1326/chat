import { TypeRootState } from '../store'
import { createSelector } from 'reselect'
import { IUser } from '@/store/user/user.types'
import { LocalStorageService } from '@/service/LocalStorageService'

export const getLoadingUser = (state: TypeRootState) =>
	state.userStore.isLoading
export const getErrorUser = (state: TypeRootState) => state.userStore.error
export const getUser = (state: TypeRootState) => state.userStore.userInfo
export const getUserId = (state: TypeRootState) =>
	state.userStore.userInfo?.id ?? null
export const getNewUserBool = (state: TypeRootState) =>
	state.userStore.isNewUser
export const getUsers = (state: TypeRootState) => state.userStore.users
export const getUserImage = (state: TypeRootState) =>
	state.userStore.userInfo?.image ?? ''
export const getChatImage = (state: TypeRootState) =>
	state.userStore.backgroundChat ?? LocalStorageService.getChatBg()
export const getSelectUser = (state: TypeRootState) =>
	state.userStore.selectUser
export const getSelectUserId = (state: TypeRootState) =>
	state.userStore.selectUser?.id
export const getUsersSelected = createSelector(
	getUser,
	getUsers,
	(user, users) => {
		return Object.entries(users).map(
			([_, values]): { key: string; users: IUser[] } => {
				const users = values.filter(value => value.id !== user.id)
				const key: string = users
					.map(user => user.name.at(0))
					.join()
					.toUpperCase()
				return { key, users }
			}
		)
	}
)
