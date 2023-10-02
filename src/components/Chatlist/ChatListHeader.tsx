import { Avatar } from '@/UI/Avatar'
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from 'react-icons/bs'
import { useActions } from '@/hooks/useActions'
import { useSelector } from 'react-redux'
import { getUserImage, getUserName } from '@/store/user/user.selector'
import { DropDown } from '@/UI/DropDown'
import { useToggle } from '@/hooks/useToggle'
import { getAuth, signOut } from 'firebase/auth'
import { useRouter } from 'next/router'
import { LocalStorageService } from '@/service/LocalStorageService'
import { Icon } from '@/UI/Icon'
import { useCallback } from 'react'
import { twMerge } from 'tailwind-merge'

export function ChatListHeader() {
	const userImage = useSelector(getUserImage)
	const userName = useSelector(getUserName)
	const { reload } = useRouter()
	const { toggleChatPage, changeIsLoading } = useActions()
	const [openMenu, _, openMenuFn] = useToggle()
	const logout = () => {
		const auth = getAuth()
		signOut(auth)
			.then(() => {
				reload()
			})
			.catch(error => {
				console.log(error)
				reload()
			})
		changeIsLoading(true)
		LocalStorageService.removeUserLocalStorage()
	}
	const closeChatList = useCallback(
		() => toggleChatPage(false),
		[toggleChatPage]
	)
	return (
		<div
			className={twMerge(
				'flex h-20 items-center justify-between border-r-2 border-gray-400 p-7',
				'phone:p-0 largePhone:p-2'
			)}
		>
			{userImage && (
				<Avatar
					className='phone:hidden'
					type='sm'
					src={userImage}
					alt={userImage}
					title={userName}
				/>
			)}
			<span className='flex cursor-pointer items-center gap-4 text-white'>
				<button
					data-testid='chat-header-list-click'
					onClick={closeChatList}
				>
					<Icon
						Svg={BsFillChatLeftTextFill}
						className={twMerge(
							'h-6 w-6 hover:opacity-90',
							'phone:h-4 phone:w-4 largePhone:h-4 largePhone:w-4'
						)}
						title='Chat'
					/>
				</button>
				<DropDown
					title={
						<Icon
							Svg={BsThreeDotsVertical}
							className={twMerge(
								'h-6 w-6 hover:opacity-90',
								'phone:h-4 phone:w-4 largePhone:h-4 largePhone:w-4'
							)}
							title='Options'
							onClick={openMenuFn}
						/>
					}
					toggle={openMenu}
				>
					<div
						className='absolute right-0 top-10 grid h-14 w-24 place-items-center rounded-lg bg-background-default-hover p-2 hover:brightness-90'
						onClick={logout}
					>
						logout
					</div>
				</DropDown>
			</span>
		</div>
	)
}
