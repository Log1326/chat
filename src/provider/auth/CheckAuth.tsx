import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'
import { TypeComponentAuthFields } from '@/provider/auth/auth.types'
import { useSelector } from 'react-redux'
import { getLoadingUser, getUser } from '@/store/user/user.selector'
import { RouterEnumPath } from '@/types/routerEnumPath'
import { useActions } from '@/hooks/useActions'
import { useToggle } from '@/hooks/useToggle'
import { LocalStorageService } from '@/service/LocalStorageService'
import { Loading } from '@/UI/Loading'

const CheckAuth: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	Component: { isOnlyUser },
	children
}) => {
	const isLoading = useSelector(getLoadingUser)
	const user = useSelector(getUser)
	const currentUser = LocalStorageService.getParseUserLocalStorage()
	const { replace, pathname } = useRouter()
	const { CheckAuthInServer } = useActions()
	const [redirect, setRedirect] = useToggle(false)
	useEffect(() => {
		CheckAuthInServer(String(currentUser?.email))
		if (!currentUser?.email) setRedirect(true)
	}, [])
	useEffect(() => {
		if (redirect) replace(RouterEnumPath.LOGIN)
	}, [redirect])
	const Children = () => <>{children}</>
	if (isLoading) return <Loading flex full center />
	if (user && isOnlyUser) return <Children />
	pathname !== RouterEnumPath.LOGIN && replace(RouterEnumPath.LOGIN)
	return null
}
export default CheckAuth
