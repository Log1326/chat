import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { useRouter } from 'next/router'
import { useActions } from '@/hooks/useActions'
import {
	getLoadingUser,
	getNewUserBool,
	getUser
} from '@/store/user/user.selector'
import { useSelector } from 'react-redux'
import { CheckAuthInGoogleAccount } from '@/store/user/user.action'
import { SignIn } from '@/UI/SignIn'
import { Loading } from '@/UI/Loading'
import { useEffect } from 'react'
import { RouterEnumPath } from '@/types/routerEnumPath'

function login() {
	const userInfo = useSelector(getUser)
	const newUser = useSelector(getNewUserBool)
	const isLoading = useSelector(getLoadingUser)
	const { CheckAuthInGoogleAccount } = useActions()
	const { push } = useRouter()
	useEffect(() => {
		if (newUser) push(RouterEnumPath.ONBOARDING)
		if (!newUser && userInfo?.email) push(RouterEnumPath.MAIN)
	}, [userInfo?.email, newUser])
	const handleLogin = () => CheckAuthInGoogleAccount()
	return (
		<div className='bg-panel-header-background h-screen flex justify-center items-center flex-col  gap-6'>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<div className='xl:flex text-center items-center gap-4  '>
						<Image
							src='/whatsapp.gif'
							alt='whatsapp'
							width={300}
							height={300}
						/>
						<span className='xl:text-7xl text-4xl text-white'>Whatsapp</span>
					</div>
					<SignIn />
					<button
						className='flex items-center justify-center gap-2 bg-search-input-container-background p-2 rounded-lg'
						onClick={handleLogin}
					>
						<FcGoogle className='text-4xl' />
						<span className='text-2xl text-white'>Login with Google</span>
					</button>
				</>
			)}
		</div>
	)
}

export default login
