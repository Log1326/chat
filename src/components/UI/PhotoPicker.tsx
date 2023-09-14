import { ChangeEvent } from 'react'

interface PhotoPickerProps {
	onChange: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	idPhotoPicker: string
}
export function PhotoPicker({ onChange, idPhotoPicker }: PhotoPickerProps) {
	return (
		<input
			type='file'
			accept='image/png, image/gif, image/jpeg, image/jpg'
			hidden
			id={idPhotoPicker}
			onChange={onChange}
		/>
	)
}
