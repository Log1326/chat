import { useToggle } from '@/hooks/useToggle'
import { useMemo } from 'react'
import { useActions } from '@/hooks/useActions'
import { useGrabPhoto } from '@/hooks/useGrabPhoto'
import { PHOTO_PICKER } from '@/constants/constants'

export const useContextMenu = () => {
	const { setImage } = useActions()
	const { grabPhoto, setGrabPhoto, photoChange } = useGrabPhoto({
		idPhotoPicker: PHOTO_PICKER,
		callback: setImage,
		changeType: 'photoAvatar'
	})
	const [showCapturePhoto, setShowCapturePhoto] = useToggle(false)
	const [isContextMenuVisible, setIsContextMenuVisible] = useToggle(false)
	const [showPhotoLib, setShowPhotoLib] = useToggle(false)

	const contextMenuOptions = useMemo(
		() => [
			{
				name: 'Take photo',
				callback: () => {
					setShowCapturePhoto(true)
				}
			},
			{
				name: 'Choose from lib',
				callback: () => {
					setShowPhotoLib(true)
				}
			},
			{
				name: 'Upload photo',
				callback: () => {
					setGrabPhoto(true)
				}
			},
			{
				name: 'Remove  photo',
				callback: () => {
					setImage('/default_avatar.png')
				}
			}
		],
		[]
	)
	return {
		menu: {
			contextMenuOptions
		},
		stateMenu: {
			showCapturePhoto,
			isContextMenuVisible,
			showPhotoLib,
			grabPhoto
		},
		changeStateMenu: {
			setShowPhotoLib,
			setShowCapturePhoto,
			setIsContextMenuVisible
		},
		fn: {
			photoChange,
			setImage
		}
	}
}
