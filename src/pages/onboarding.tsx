import {
	getLoadingUser,
	getNewUserBool,
	getUser
} from '@/store/user/user.selector'
import { useSelector } from 'react-redux'
import { IUser } from '@/store/user/user.types'
import { useRouter } from 'next/router'
import { useActions } from '@/hooks/useActions'
import { Loading } from '@/UI/Loading'
import { InputCustom } from '@/UI/Input'
import { Avatar } from '@/UI/Avatar'
import Image from 'next/image'
import { useEffect } from 'react'
import { RouterEnumPath } from '@/types/routerEnumPath'

function onboarding() {
	const { push } = useRouter()
	const { RegistrationNewUser, setName, setAbout, changeIsLoading } =
		useActions()
	const userInfo = useSelector(getUser)
	const newUserBool = useSelector(getNewUserBool)
	const isLoading = useSelector(getLoadingUser)
	useEffect(() => {
		if (!userInfo?.email || !newUserBool) push(RouterEnumPath.LOGIN)
		if (!newUserBool && userInfo?.email) push(RouterEnumPath.MAIN)
	}, [newUserBool, userInfo?.email])
	useEffect(() => {
		changeIsLoading(false)
	}, [])
	const disableButton =
		(userInfo && userInfo.name.length < 3) ||
		(userInfo?.about && userInfo.about.length < 3)
	return (
		<div className='bg-panel-header-background h-screen text-white flex flex-col items-center justify-center gap-6'>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<div className='flex items-center justify-center gap-2'>
						<Image
							src={'/whatsapp.gif' ?? ''}
							alt='whatsapp'
							width={300}
							height={300}
						/>
						<span className='text-4xl'>Whatsapp</span>
					</div>
					<h2 className='text-4xl'>Create your profile</h2>
					<div className='flex gap-6 mt-6'>
						<div className='flex flex-col items-center justify-center mt-5 gap-4'>
							<InputCustom
								onChange={setName}
								value={userInfo?.name}
								label='Display Name'
							/>
							<InputCustom
								onChange={setAbout}
								value={userInfo?.about!}
								label='About'
							/>
							<button
								disabled={!!disableButton}
								onClick={() =>
									RegistrationNewUser(userInfo as IUser)
								}
								className={`p-4 rounded-xl bg-search-input-container-background disabled:opacity-10 
						${!!disableButton ? '' : 'hover:bg-gray-700'}`}
							>
								Create profile
							</button>
						</div>
						<div>
							<Avatar type='xl' value={userInfo?.image ?? ''} />
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default onboarding
