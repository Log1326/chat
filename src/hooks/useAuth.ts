import { onAuthStateChanged } from '@firebase/auth'
import { firebasaeAuth } from '@/utils/FirebaseConfig'
import { useToggle } from '@/hooks/useToggle'
import { useActions } from '@/hooks/useActions'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export const useAuth = () => {
	const { replace } = useRouter()
	const { CheckAuthInServer } = useActions()
	const [redirect, setRedirect] = useToggle(false)
	onAuthStateChanged(firebasaeAuth, async currentUser => {
		if (!currentUser?.email) setRedirect(true)
		const data = await CheckAuthInServer(currentUser?.email ?? '')
		//@ts-ignore
		if (!data.payload.data) setRedirect(true)
	})
	useEffect(() => {
		if (redirect) replace('/login')
	}, [redirect])
}
