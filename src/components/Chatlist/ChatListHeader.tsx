import { Avatar } from '@/UI/Avatar'
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from 'react-icons/bs'
import { useActions } from '@/hooks/useActions'
import { useSelector } from 'react-redux'
import { getUserImage, getUserName } from '@/store/user/user.selector'
import { DropDown } from '@/UI/DropDown'
import { useToggle } from '@/hooks/useToggle'
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import { RouterEnumPath } from '@/types/routerEnumPath'
import { LocalStorageService } from '@/service/LocalStorageService'
import { Icon } from '@/UI/Icon'
import { useCallback } from 'react'

export function ChatListHeader() {
	const userImage = useSelector(getUserImage)
	const userName = useSelector(getUserName)
	const { replace, reload } = useRouter()
	const { toggleChatPage } = useActions()
	const [openMenu, _, openMenuFn] = useToggle()
	const logout = () => {
		const auth = getAuth()
		signOut(auth)
			.then(async () => {
				await replace(RouterEnumPath.LOGIN)
			})
			.catch(error => {
				console.log(error)
				reload()
			})
		LocalStorageService.removeUserLocalStorage()
	}
	const closeChatList = useCallback(
		() => toggleChatPage(false),
		[toggleChatPage]
	)
	return (
		<div className='flex justify-between items-center h-20 p-7 border-r-2 border-gray-400'>
			{userImage && (
				<Avatar
					type='sm'
					src={userImage}
					alt={userImage}
					title={userName}
				/>
			)}
			<span className='flex items-center gap-4 cursor-pointer text-white'>
				<button
					data-testid='chat-header-list-click'
					onClick={closeChatList}
				>
					<Icon
						Svg={BsFillChatLeftTextFill}
						className='h-6 w-6 hover:opacity-70'
						title='Chat'
					/>
				</button>
				<DropDown
					classname={'absolute top-0 right-0 w-36'}
					title={
						<Icon
							Svg={BsThreeDotsVertical}
							className='h-6 w-6 hover:opacity-70'
							title='Options'
							onClick={openMenuFn}
						/>
					}
					toggle={openMenu}
				>
					<div onClick={() => logout()}>logout</div>
				</DropDown>
			</span>
		</div>
	)
}
