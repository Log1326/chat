import { onAuthStateChanged } from '@firebase/auth'
import { firebaseAuth } from '@/utils/FirebaseConfig'
import { useToggle } from '@/hooks/useToggle'
import { useActions } from '@/hooks/useActions'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { AuthService } from '@/service/ApiRoutes'

export const useAuth = () => {
	const { replace } = useRouter()
	const { CheckAuthInServer, changeIsLoading } = useActions()
	const [redirect, setRedirect] = useToggle(false)
	onAuthStateChanged(firebaseAuth, async currentUser => {
		CheckAuthInServer(currentUser?.email ?? '')
		const { data } = await AuthService.checkAuth(currentUser?.email)
		if (!currentUser?.email || !data.status) setRedirect(true)
		if (currentUser?.email && data) changeIsLoading(false)
	})
	useEffect(() => {
		if (redirect) replace('/login')
	}, [redirect])
}
