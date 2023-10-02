import { InputCustom } from '@/UI/Input'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AuthService } from '@/service/ApiRoutes'
import { useActions } from '@/hooks/useActions'
import { RouterEnumPath } from '@/types/routerEnumPath'
import { LocalStorageService } from '@/service/LocalStorageService'

export const SignIn = () => {
	const { push } = useRouter()
	const { setUser } = useActions()
	const [email, setEmail] = useState('')
	const loginUserHandler = async () => {
		const { data } = await AuthService.checkAuth(email)
		if (data.status) {
			setUser(data.data)
			LocalStorageService.setUserLocalStorage(data.data)
			await push(RouterEnumPath.MAIN)
		} else alert('user not found. try again!')
	}
	return (
		<section>
			<InputCustom
				type='email'
				label='Email'
				value={email}
				onChange={setEmail}
			/>
			<button
				className='mt-5 w-full rounded-lg bg-search-input-container-background p-2 text-white disabled:opacity-50'
				onClick={loginUserHandler}
				disabled={email.length < 5}
			>
				Sign in
			</button>
		</section>
	)
}
