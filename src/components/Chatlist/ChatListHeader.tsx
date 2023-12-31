import { Avatar } from '@/UI/Avatar'
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from 'react-icons/bs'
import { useActions } from '@/hooks/useActions'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getUserImage } from '@/store/user/user.selector'
import { DropDown } from '@/UI/DropDown'
import { useToggle } from '@/hooks/useToggle'
import { getAuth, signOut } from 'firebase/auth'
<<<<<<< HEAD
=======
import { useRouter } from 'next/router'
import { RouterEnumPath } from '@/types/routerEnumPath'
>>>>>>> features

export function ChatListHeader() {
	const { replace, reload } = useRouter()
	const { toggleChatPage } = useActions()
	const [openMenu, _, openMenuFn] = useToggle()
	const userImage = useSelector(getUserImage)
	const handleOpenChatList = useCallback(
		() => toggleChatPage(false),
		[toggleChatPage]
	)
	const logout = () => {
		const auth = getAuth()
		signOut(auth)
<<<<<<< HEAD
			.then(() => {
				alert('working')
				//useRouter
				// Sign-out successful.
			})
			.catch(error => {
				alert('working error')
				// An error happened.
=======
			.then(async () => {
				await replace(RouterEnumPath.LOGIN)
			})
			.catch(error => {
				console.log(error)
				reload()
>>>>>>> features
			})
	}
	return (
		<article className='flex justify-between items-center  h-20 p-7 border-r-2 border-gray-400'>
			{userImage && (
				<Avatar type={'sm'} value={userImage} className='hover:opacity-70' />
			)}
			<span className='flex items-center gap-4 cursor-pointer text-white'>
				<button onClick={handleOpenChatList}>
					<BsFillChatLeftTextFill
						className='h-6 w-6 hover:opacity-70'
						title='Chat'
					/>
				</button>
				<DropDown
					title={
<<<<<<< HEAD
						<button>
							<BsThreeDotsVertical
								className='h-6 w-6 hover:opacity-70'
								title='Options'
								onClick={openMenuFn}
							/>
						</button>
=======
						<BsThreeDotsVertical
							className='h-6 w-6 hover:opacity-70'
							title='Options'
							onClick={openMenuFn}
						/>
>>>>>>> features
					}
					toggle={openMenu}
				>
					<div onClick={() => logout()}>logout</div>
				</DropDown>
			</span>
		</article>
	)
}
