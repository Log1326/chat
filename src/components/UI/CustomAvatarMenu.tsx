import { CONTEXT_OPENED, PHOTO_PICKER } from '@/constants/constants'
import { FaCamera } from 'react-icons/fa'
import Image from 'next/image'
import React, { FC, useCallback, useState } from 'react'
import { ContextMenu } from '@/UI/ContextMenu'
import { PhotoLibrary } from '@/UI/PhotoLibrary'
import { CapturePhoto } from '@/UI/CapturePhoto'
import { PhotoPicker } from '@/UI/PhotoPicker'
import { useToggle } from '@/hooks/useToggle'
import { TypeContextCoordinates } from '@/types/contextTypes'
import { useContextMenu } from '@/hooks/useContextMenu'
import { IImages } from '@/types/images.types'

const initialContextMenuCoordinates = {
	x: 0,
	y: 0
}
const images: IImages<string>[] = [
	{ name: 'one', value: '/avatars/1.png' },
	{ name: 'two', value: '/avatars/2.png' },
	{ name: 'three', value: '/avatars/3.png' },
	{ name: 'four', value: '/avatars/4.png' },
	{ name: 'five', value: '/avatars/5.png' },
	{ name: 'six', value: '/avatars/6.png' },
	{ name: 'seven', value: '/avatars/7.png' },
	{ name: 'eight', value: '/avatars/8.png' },
	{ name: 'nine', value: '/avatars/9.png' }
]
export const CustomAvatarMenu: FC<{ value: string }> = ({ value }) => {
	const [hover, _, handleHoverFn] = useToggle()
	const { menu, stateMenu, changeStateMenu, fn } = useContextMenu()
	const [contextMenuCoordinates, setContextMenuCoordinates] =
		useState<TypeContextCoordinates>(initialContextMenuCoordinates)
	const showContextVisible = useCallback(
		(e: React.MouseEvent<HTMLDivElement>) => {
			e.preventDefault()
			setContextMenuCoordinates({ x: e.pageX, y: e.pageY })
			changeStateMenu.setIsContextMenuVisible(true)
		},
		[]
	)
	return (
		<>
			<div
				onMouseEnter={handleHoverFn}
				onMouseLeave={handleHoverFn}
				className='relative h-60 w-60 z-0 '
				onClick={e => showContextVisible(e)}
			>
				{hover && (
					<div
						id={CONTEXT_OPENED}
						className='z-20 w-full h-full  absolute flex flex-col justify-center items-center'
					>
						<FaCamera />
						<span className='flex text-center w-14 ' id={CONTEXT_OPENED}>
							Change
							<br />
							profile photo
						</span>
					</div>
				)}
				<Image
					src={value ?? ''}
					alt='imageAvatar'
					className={`rounded-full ${hover && 'opacity-40'}`}
					fill
				/>
				{stateMenu.isContextMenuVisible && (
					<ContextMenu
						item={{
							options: menu.contextMenuOptions,
							coordinates: contextMenuCoordinates,
							contextMenu: stateMenu.isContextMenuVisible,
							setContextMenu: changeStateMenu.setIsContextMenuVisible
						}}
						idElement={CONTEXT_OPENED}
					/>
				)}
			</div>
			{stateMenu.showPhotoLib && (
				<PhotoLibrary
					changeAvatar={fn.setImage}
					imagesAvatar={images}
					hiddenPhotoLib={changeStateMenu.setShowPhotoLib}
				/>
			)}
			{stateMenu.showCapturePhoto && (
				<CapturePhoto hide={changeStateMenu.setShowCapturePhoto} />
			)}
			{stateMenu.grabPhoto && (
				<PhotoPicker idPhotoPicker={PHOTO_PICKER} onChange={fn.photoChange} />
			)}
		</>
	)
}
