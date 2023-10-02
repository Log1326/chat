import { Avatar } from '@/UI/Avatar'
import { useSelector } from 'react-redux'
import { getSelectUser } from '@/store/user/user.selector'
import { MdCall } from 'react-icons/md'
import { IoVideocam } from 'react-icons/io5'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useActions } from '@/hooks/useActions'
import { getStateMessageOnlineUsers } from '@/store/message/message.selectors'
import { useToggle } from '@/hooks/useToggle'
import { DropDown } from '@/UI/DropDown'
import { useCallback, useMemo } from 'react'
import {
	CHANGE_BG_IMAGE,
	VIDEO_CALL_REF,
	VOICE_CALL_REF
} from '@/constants/constants'
import { PhotoLibrary } from '@/UI/PhotoLibrary'
import { IImages } from '@/types/images.types'
import { bgChat } from '@/store/user/user.types'
import { ContextMenu } from '@/UI/ContextMenu'
import { Icon } from '@/UI/Icon'

const images: IImages<bgChat>[] = [
	{ name: 'bg-chat-background-color', value: '/bg-image/image-bg-color.jpg' },
	{ name: 'bg-chat-background-white', value: '/bg-image/image-bg-white.jpg' },
	{ name: 'bg-chat-background-pale', value: '/bg-image/image-bg-grey.png' },
	{ name: 'bg-chat-background-teal', value: '/bg-image/image-bg-teal.jpg' },
	{ name: 'bg-chat-background-space', value: '/bg-image/image-bg-space.jpg' }
]
export function ChatHeader() {
	const selectUser = useSelector(getSelectUser)
	const onlineUsers = useSelector(getStateMessageOnlineUsers)
	const {
		setSelectUser,
		changeIsSearchMessage,
		changeBackgroundChat,
		videoCall,
		videoCallOpenWindow,
		voiceCall,
		voiceCallOpenWindow
	} = useActions()
	const [openMenu, setOpenMenu, openMenuFn] = useToggle()
	const [openModal, setOpenModal] = useToggle()
	const isOnline = onlineUsers?.some(user => user === selectUser?.id)
	const handleCallVoice = useCallback(() => {
		voiceCallOpenWindow(true)
		voiceCall({
			id: String(selectUser?.id),
			user: {
				id: selectUser?.id,
				image: String(selectUser?.image),
				name: String(selectUser?.name)
			},
			callType: 'audio',
			type: 'outgoing',
			roomId: Date.now()
		})
	}, [
		selectUser?.id,
		selectUser?.image,
		selectUser?.name,
		voiceCall,
		voiceCallOpenWindow
	])
	const handleCallVideo = useCallback(() => {
		videoCallOpenWindow(true)
		videoCall({
			id: String(selectUser?.id),
			user: {
				id: selectUser?.id,
				image: String(selectUser?.image),
				name: String(selectUser?.name)
			},
			callType: 'video',
			type: 'outgoing',
			roomId: Date.now()
		})
	}, [
		selectUser?.id,
		selectUser?.image,
		selectUser?.name,
		videoCall,
		videoCallOpenWindow
	])

	const contextMenu = useMemo(
		() => [
			{ name: 'close chat', callback: () => setSelectUser(undefined) },
			{ name: 'change bg', callback: () => setOpenModal(true) }
		],
		[setOpenModal, setSelectUser]
	)
	const openSearchDrawer = useCallback(
		() => changeIsSearchMessage(true),
		[changeIsSearchMessage]
	)
	return (
		<article className='flex h-20 items-center justify-between bg-input-background p-2'>
			<div className='flex items-center justify-center gap-4 pl-4'>
				{selectUser && (
					<Avatar
						type='md'
						src={selectUser?.image ?? '/default_avatar.png'}
						alt={selectUser.name}
					/>
				)}
				<div className='cursor-default text-white'>
					<p>{selectUser?.name}</p>
					<p>{isOnline ? 'online' : 'offline'}</p>
				</div>
			</div>
			<section className='inline-flex cursor-pointer gap-4 pr-4 text-white'>
				<Icon
					Svg={BiSearchAlt2}
					className='h-6 w-6 hover:text-gray-900'
					title='search messages...'
					onClick={openSearchDrawer}
				/>
				<Icon
					Svg={MdCall}
					onClick={handleCallVoice}
					className='h-6 w-6 hover:text-gray-900 '
					title='audio'
					id={VOICE_CALL_REF}
				/>
				<Icon
					Svg={IoVideocam}
					onClick={handleCallVideo}
					className='h-6 w-6 hover:text-gray-900'
					title='video'
					id={VIDEO_CALL_REF}
				/>
				<DropDown
					title={
						<Icon
							Svg={BsThreeDotsVertical}
							className='z-30 h-6 w-6 hover:text-gray-900'
							title='options'
							onClick={openMenuFn}
							id={CHANGE_BG_IMAGE}
						/>
					}
					toggle={openMenu}
				>
					<ContextMenu
						item={{
							options: contextMenu,
							setContextMenu: setOpenMenu
						}}
						position='absolute'
						classname='top-[50px] right-0 border'
						idElement={CHANGE_BG_IMAGE}
					/>
				</DropDown>
			</section>
			{openModal && (
				<PhotoLibrary
					hiddenPhotoLib={setOpenModal}
					changeBg={changeBackgroundChat}
					imagesBg={images}
					type='chat'
				/>
			)}
		</article>
	)
}
