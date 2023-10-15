import Image from 'next/image'
import {
	getLoadingUser,
	getNewUserBool,
	getUser
} from '@/store/user/user.selector'
import { InputCustom } from '@/UI/Input'
import { useEffect } from 'react'
import { Avatar } from '@/UI/Avatar'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { useActions } from '@/hooks/useActions'
import { Loading } from '@/UI/Loading'
import { RouterEnumPath } from '@/types/routerEnumPath'
import { IUser } from '@/store/user/user.types'

function onboarding() {
	const { name, image, about, email } = useSelector(getUser) as IUser
	const newUserBool = useSelector(getNewUserBool)
	const isLoading = useSelector(getLoadingUser)
	const { push } = useRouter()
	const { RegistrationNewUser, setName, setAbout, setImage, changeIsLoading } =
		useActions()
	useEffect(() => {
		if (!email || !newUserBool) push(RouterEnumPath.LOGIN)
		if (!newUserBool && email) push(RouterEnumPath.MAIN)
	}, [newUserBool, email])
	useEffect(() => {
		if (!image) setImage('/default_avatar.png')
	}, [image])
	useEffect(() => {
		changeIsLoading(false)
	}, [])
	const onboardUserHandler = () =>
		RegistrationNewUser({ name, about, image, email })
	const disableButton = name.length < 3 || (about && about.length < 3)

	return (
		<div className='bg-panel-header-background h-screen text-white flex flex-col items-center justify-center gap-6'>
			{isLoading ? (
				<Loading />
			) : (
				<>
					<div className='flex items-center justify-center gap-2'>
						<Image
							src='/whatsapp.gif'
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
								name='Display Name'
								onChange={setName}
								value={name}
								label
							/>
							<InputCustom
								name='About'
								onChange={setAbout}
								value={about!}
								label
							/>
							<button
								disabled={!!disableButton}
								onClick={onboardUserHandler}
								className={`p-4 rounded-xl bg-search-input-container-background disabled:opacity-10 
						${disableButton ? '' : 'hover:bg-gray-700'}`}
							>
								Create profile
							</button>
						</div>
						<div>
							<Avatar type='xl' value={image} />
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default onboarding
