import { FcGoogle } from 'react-icons/fc'
import { useRouter } from 'next/router'
import { useActions } from '@/hooks/useActions'
import { getLoadingUser, getNewUserBool } from '@/store/user/user.selector'
import { useSelector } from 'react-redux'
import { SignIn } from '@/UI/SignIn'
import Image from 'next/image'
import { useCallback, useEffect } from 'react'
import { Loading } from '@/UI/Loading'
import { RouterEnumPath } from '@/types/routerEnumPath'
import { LocalStorageService } from '@/service/LocalStorageService'

function login() {
	const { push } = useRouter()
	const userInfo = LocalStorageService.getParseUserLocalStorage()
	const newUser = useSelector(getNewUserBool)
	const isLoading = useSelector(getLoadingUser)
	const { CheckAuthInGoogleAccount, changeIsLoading } = useActions()
	useEffect(() => {
		if (newUser) push(RouterEnumPath.ONBOARDING)
		if (!newUser && userInfo?.email) push(RouterEnumPath.MAIN)
	}, [newUser, userInfo?.email])
	useEffect(() => {
		changeIsLoading(false)
	}, [])
	const loginWithGoogle = useCallback(() => {
		CheckAuthInGoogleAccount()
	}, [CheckAuthInGoogleAccount])
	if (isLoading) return <Loading flex full center />
	return (
		<div
			data-testid='page'
			className='flex h-screen flex-col items-center justify-center gap-6 bg-panel-header-background'
		>
			<div className='items-center gap-4 text-center'>
				<Image
					src='/whatsapp.gif'
					alt='whatsapp'
					width={300}
					height={300}
				/>
				<span className='text-4xl text-white xl:text-7xl'>
					Whatsapp
				</span>
			</div>
			<SignIn />
			<button
				className='flex items-center justify-center gap-2 rounded-lg bg-search-input-container-background p-2'
				onClick={loginWithGoogle}
			>
				<FcGoogle className='text-4xl' />
				<span className='text-2xl text-white'>
					Login or Registration with Google
				</span>
			</button>
		</div>
	)
}

export default login
