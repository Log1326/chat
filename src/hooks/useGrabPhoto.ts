import { ChangeEvent, useEffect } from 'react'
import { useToggle } from '@/hooks/useToggle'

type TypeGrab = 'photoAvatar' | 'imageMessage'
interface IGrab {
	idPhotoPicker?: string
	callback?: (value: any) => void
	changeType: TypeGrab
}
export const useGrabPhoto = ({
	idPhotoPicker,
	changeType = 'photoAvatar',
	callback
}: IGrab) => {
	const [grabPhoto, setGrabPhoto, fnGrabPhoto] = useToggle(false)
	useEffect(() => {
		if (grabPhoto) {
			const data = document.getElementById(idPhotoPicker ?? '') || null
			if (data) data.click()
			document.body.onfocus = () => {
				setGrabPhoto(false)
			}
		}
	}, [grabPhoto])
	const photoChange = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files) return
		const file = e.target.files[0]
		if (changeType === 'photoAvatar') {
			const reader = new FileReader()
			const data = document.createElement('img')
			reader.onload = function (event) {
				if (!event?.target?.result) return
				const res = event.target.result
				if (typeof res === 'string') {
					data.src = res
					data.setAttribute('data-src', res)
				}
			}
			reader.readAsDataURL(file)
			setTimeout(() => {
				if (callback) {
					callback(data.src)
				}
			}, 200)
		}
		if (changeType === 'imageMessage') {
			const formData = new FormData()
			formData.append('image', file)
			if (callback) {
				callback(formData)
			}
		}
	}
	return { grabPhoto, setGrabPhoto, fnGrabPhoto, photoChange }
}
