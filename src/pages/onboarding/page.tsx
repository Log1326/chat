import {
	getLoadingUser,
	getNewUserBool,
	getUser
} from '@/store/user/user.selector'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useActions } from '@/hooks/useActions'
import { InputCustom } from '@/UI/Input'
import { Avatar } from '@/UI/Avatar'
import Image from 'next/image'
import { useCallback, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'
import { Loading } from '@/UI/Loading'
import { RouterEnumPath } from '@/types/routerEnumPath'
import { LocalStorageService } from '@/service/LocalStorageService'

function onboarding() {
	const { push } = useRouter()
	const { RegistrationNewUser, setName, setAbout, changeIsLoading } =
		useActions()
	const userInfo = useSelector(getUser)
	const userLocal = LocalStorageService.getParseUserLocalStorage()
	const newUserBool = useSelector(getNewUserBool)
	const isLoading = useSelector(getLoadingUser)
	useEffect(() => {
		if (userLocal) push(RouterEnumPath.MAIN)
		if (!newUserBool && userInfo?.email) push(RouterEnumPath.MAIN)
		if (!userInfo?.email || !newUserBool) push(RouterEnumPath.LOGIN)
	}, [newUserBool, userInfo?.email])
	useEffect(() => {
		changeIsLoading(false)
	}, [])
	const disableButton =
		(userInfo && userInfo.name.length < 3) ||
		(userInfo?.about && userInfo.about.length < 3)
	const createProfile = useCallback(() => {
		RegistrationNewUser(userInfo)
		push(RouterEnumPath.MAIN)
		changeIsLoading(true)
	}, [RegistrationNewUser, push, userInfo])
	if (isLoading) return <Loading flex full center />
	return (
		<div className='flex h-screen flex-col items-center justify-center gap-6 bg-panel-header-background text-white'>
			<div className='flex h-full items-center justify-center gap-2'>
				<Image
					src={'/whatsapp.gif'}
					alt='whatsapp'
					width={300}
					height={300}
					className='screen-sm:hidden screen-md:px-10'
				/>
				<span className='screen-xl-max:hidden text-4xl'>Whatsapp</span>
			</div>
			<h2 className='text-4xl screen-lg:text-xl'>Create your profile</h2>
			<div className='screen-xl-max:flex-wrap-reverse mt-6 flex h-full items-center justify-center gap-6'>
				<div className='mt-5 flex flex-col items-center justify-center gap-4'>
					<InputCustom
						onChange={setName}
						value={userInfo?.name}
						label='Display Name'
						classnames='screen-xl-max:w-[250px]'
					/>
					<InputCustom
						onChange={setAbout}
						value={userInfo?.about!}
						label='About'
						classnames='screen-xl-max:w-[250px]'
					/>
					<button
						disabled={!!disableButton}
						onClick={createProfile}
						className={twMerge(
							'rounded-xl bg-search-input-container-background p-4 disabled:opacity-10',
							disableButton && 'hover:bg-gray-700'
						)}
					>
						Create profile
					</button>
				</div>
				<Avatar
					type='xxl'
					src={userInfo?.image ?? ''}
					alt={userInfo.image}
					className='screen-xs:h-40 screen-xs:w-40'
				/>
			</div>
		</div>
	)
}

export default onboarding
