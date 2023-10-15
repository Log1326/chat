import { CONTEXT_OPENED, PHOTO_PICKER } from '@/constants/constants'
import { FaCamera } from 'react-icons/fa'
import React, { FC, useCallback } from 'react'
import { ContextMenu } from '@/UI/ContextMenu'
import { PhotoLibrary } from '@/UI/PhotoLibrary'
import { CapturePhoto } from '@/UI/CapturePhoto'
import { PhotoPicker } from '@/UI/PhotoPicker'
import { useToggle } from '@/hooks/useToggle'
import { useContextMenu } from '@/hooks/useContextMenu'
import { IImages } from '@/types/images.types'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { getCoordinates } from '@/store/user/user.selector'
import { useActions } from '@/hooks/useActions'
import { twMerge } from 'tailwind-merge'

const images: IImages<string>[] = [
	{ value: '/avatars/1.png', name: '/avatars/1.png' },
	{ value: '/avatars/2.png', name: '/avatars/2.png' },
	{ value: '/avatars/3.png', name: '/avatars/3.png' },
	{ value: '/avatars/4.png', name: '/avatars/4.png' },
	{ value: '/avatars/5.png', name: '/avatars/5.png' },
	{ value: '/avatars/6.png', name: '/avatars/6.png' },
	{ value: '/avatars/7.png', name: '/avatars/7.png' },
	{ value: '/avatars/8.png', name: '/avatars/8.png' },
	{ value: '/avatars/9.png', name: '/avatars/9.png' }
]
interface CustomAvatarMenuProps {
	src: string
	className?: string
}
export const CustomAvatarMenu: FC<CustomAvatarMenuProps> = ({
	src,
	className
}) => {
	const coordinates = useSelector(getCoordinates)
	const { setCoordinates } = useActions()
	const [hover, setHover] = useToggle()
	const { menu, stateMenu, changeStateMenu, fn } = useContextMenu()
	const showContextVisible = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			e.preventDefault()
			setCoordinates({ x: e.pageX, y: e.pageY })
			changeStateMenu.setIsContextMenuVisible(true)
		},
		[changeStateMenu, setCoordinates]
	)
	return (
		<>
			<div
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
				className={twMerge(
					'relative z-0 h-60 w-60 cursor-pointer',
					className
				)}
				onClick={e => showContextVisible(e)}
			>
				{hover && (
					<div
						id={CONTEXT_OPENED}
						className='absolute z-20 flex h-full w-full flex-col items-center justify-center '
					>
						<FaCamera />
						<span
							className='flex w-14 text-center '
							id={CONTEXT_OPENED}
						>
							Change
							<br />
							profile photo
						</span>
					</div>
				)}
				<Image
					src={src || '/default_avatar.png'}
					alt='imageAvatar here'
					className={twMerge('rounded-full', hover && 'opacity-40')}
					fill
				/>
				{stateMenu.isContextMenuVisible && (
					<ContextMenu
						position='sticky'
						item={{
							options: menu.contextMenuOptions,
							coordinates: coordinates,
							contextMenu: stateMenu.isContextMenuVisible,
							setContextMenu:
								changeStateMenu.setIsContextMenuVisible
						}}
						idElement={CONTEXT_OPENED}
					/>
				)}
			</div>
			{stateMenu.showPhotoLib && (
				<PhotoLibrary<string>
					position='fixed'
					classname='top-0 left-0'
					onChange={fn.setImage}
					images={images}
					hiddenPhotoLib={changeStateMenu.setShowPhotoLib}
				/>
			)}
			{stateMenu.showCapturePhoto && (
				<CapturePhoto hide={changeStateMenu.setShowCapturePhoto} />
			)}
			{stateMenu.grabPhoto && (
				<PhotoPicker
					idPhotoPicker={PHOTO_PICKER}
					onChange={fn.photoChange}
				/>
			)}
		</>
	)
}
