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
<<<<<<< HEAD
=======
import { useMemo } from 'react'
import { ContextMenu } from '@/UI/ContextMenu'
import {
	CHANGE_BG_IMAGE,
	VIDEO_CALL_REF,
	VOICE_CALL_REF
} from '@/constants/constants'
import { PhotoLibrary } from '@/UI/PhotoLibrary'
import { IImages } from '@/types/images.types'
import { bgChat } from '@/store/user/user.types'
>>>>>>> features

const images: IImages<bgChat>[] = [
	{ name: 'bg-chat-background-color', value: '/bg-image/image-bg-color.jpg' },
	{ name: 'bg-chat-background-white', value: '/bg-image/image-bg-white.jpg' },
	{ name: 'bg-chat-background-pale', value: '/bg-image/image-bg-grey.png' },
	{ name: 'bg-chat-background-teal', value: '/bg-image/image-bg-teal.jpg' },
	{ name: 'bg-chat-background-space', value: '/bg-image/image-bg-space.jpg' }
]
export function ChatHeader() {
	const { setSelectUser, changeIsSearchMessage } = useActions()
	const [openMenu, _, openMenuFn] = useToggle()
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
<<<<<<< HEAD
=======
	const handleCallVoice = () => {
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
	}
	const handleCallVideo = () => {
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
	}

	const contextMenu = useMemo(
		() => [
			{
				name: 'close chat',
				callback: () => setSelectUser(undefined)
			},
			{
				name: 'change bg',
				callback: () => setOpenModal(true)
			}
		],
		[]
	)
>>>>>>> features
	return (
		<article className='bg-input-background h-20 p-2 flex justify-between items-center'>
			<div className='flex items-center justify-center gap-4 pl-4'>
				{selectUser ? (
					<Avatar
						type='sm'
						value={selectUser?.image}
						className={'hover:opacity-70'}
					/>
				) : (
					<Avatar type='lg' value={'/default_avatar.png'} />
				)}
				<article className='text-white cursor-default'>
					<p>{selectUser?.name}</p>
					<p>{isOnline ? 'online' : 'offline'}</p>
				</article>
			</div>
			<article className='inline-flex gap-4 pr-4 text-white cursor-pointer'>
				<BiSearchAlt2
					className='h-6 w-6 hover:text-gray-900'
					onClick={() => changeIsSearchMessage(true)}
				/>
<<<<<<< HEAD
				<MdCall className='h-6 w-6 hover:text-gray-900' title='audio' />
				<IoVideocam className='h-6 w-6 hover:text-gray-900' title='video' />
=======
				<MdCall
					onClick={handleCallVoice}
					className='h-6 w-6 hover:text-gray-900 '
					title='audio'
					id={VOICE_CALL_REF}
				/>
				<IoVideocam
					onClick={handleCallVideo}
					className='h-6 w-6 hover:text-gray-900'
					title='video'
					id={VIDEO_CALL_REF}
				/>
>>>>>>> features
				<DropDown
					title={
						<BsThreeDotsVertical
							className='h-6 w-6 hover:text-gray-900'
							title='options'
							onClick={openMenuFn}
<<<<<<< HEAD
=======
							id={CHANGE_BG_IMAGE}
>>>>>>> features
						/>
					}
					toggle={openMenu}
				>
<<<<<<< HEAD
					<p onClick={() => setSelectUser(undefined)}>close</p>
=======
					<ContextMenu
						item={{ options: contextMenu, setContextMenu: setOpenMenu }}
						idElement={CHANGE_BG_IMAGE}
					/>
>>>>>>> features
				</DropDown>
			</article>
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
