import { InputCustom } from '@/UI/Input'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AuthService } from '@/service/ApiRoutes'
import { useActions } from '@/hooks/useActions'

export const SignIn = () => {
	const { push } = useRouter()
	const { setUser } = useActions()
	const [email, setEmail] = useState('')
	const loginUserHandler = async () => {
		const res = await AuthService.checkAuth(email)
		if (res.data.status) {
			setUser(res.data.data)
			push('/')
		} else alert('user not found. try again!')
	}
	return (
		<article>
			<InputCustom
				type='email'
				label
				name='Email'
				value={email}
				onChange={setEmail}
			/>
			<button
				className='w-full bg-search-input-container-background p-1 mt-5 rounded-lg text-white disabled:opacity-50'
				onClick={loginUserHandler}
				disabled={email.length < 3}
			>
				Sign in
			</button>
		</article>
	)
}
