import { useEffect } from 'react'
import { LocalStorageService } from '@/service/LocalStorageService'
import { useRouter } from 'next/router'
import { useToggle } from '@/hooks/useToggle'
import { RouterEnumPath } from '@/types/routerEnumPath'
import { useActions } from '@/hooks/useActions'

export const useAuth = () => {
	const { replace } = useRouter()
	const { CheckAuthInServer } = useActions()
	const [redirect, setRedirect] = useToggle(false)
	const currentUser = LocalStorageService.getParseUserLocalStorage()
	//  onAuthStateChanged(firebaseAuth, async currentUser => {
	// 	 const { data } = await AuthService.checkAuth(currentUser?.email)
	// 	 if (!currentUser?.email || !data.status) setRedirect(true)
	// 	 if (currentUser?.email && data) changeIsLoading(false)
	// 	CheckAuthInServer(currentUser?.email ?? '')
	// })
	useEffect(() => {
		CheckAuthInServer(currentUser?.email ?? '')
		if (!currentUser?.email) setRedirect(true)
	}, [])
	useEffect(() => {
		if (redirect) replace(RouterEnumPath.LOGIN)
	}, [redirect])
}
