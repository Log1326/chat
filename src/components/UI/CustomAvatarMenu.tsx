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

const initialContextMenuCoordinates = {
	x: 0,
	y: 0
}
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
						options={menu.contextMenuOptions}
						coordinates={contextMenuCoordinates}
						contextMenu={stateMenu.isContextMenuVisible}
						setContextMenu={changeStateMenu.setIsContextMenuVisible}
					/>
				)}
			</div>
			{stateMenu.showPhotoLib && (
				<PhotoLibrary hiddenPhotoLib={changeStateMenu.setShowPhotoLib} />
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
