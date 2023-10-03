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
import { useCallback, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { useHandleClickOutside } from '@/hooks/useHandleClickOutSide'

export function ChatListHeader() {
	const userImage = useSelector(getUserImage)
	const userName = useSelector(getUserName)
	const { reload } = useRouter()
	const { toggleChatPage, changeIsLoading } = useActions()
	const [init, setInit] = useState<boolean>(false)
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
	const refIcon = useHandleClickOutside({
		callback: () => {
			setInit(true)
			if (init) {
				openMenuFn()
				setInit(false)
			}
		},
		type: 'click'
	})
	return (
		<header className='flex h-20 items-center justify-between border-r-2 border-gray-400 p-7'>
			{userImage && (
				<Avatar
					type='md'
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
						className={twMerge('h-6 w-6 hover:opacity-90')}
						title='Chat'
					/>
				</button>
				<DropDown
					title={
						<Icon
							Svg={BsThreeDotsVertical}
							className={twMerge('h-6 w-6 hover:opacity-90')}
							title='Options'
							onClick={openMenuFn}
						/>
					}
					toggle={openMenu}
				>
					<div
						ref={refIcon}
						className='absolute right-0 top-10 grid h-14 w-24 place-items-center rounded-lg bg-background-default-hover p-2 hover:brightness-90'
						onClick={logout}
					>
						logout
					</div>
				</DropDown>
			</span>
		</header>
	)
}
