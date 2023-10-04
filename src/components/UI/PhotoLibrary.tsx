import { IoClose } from 'react-icons/io5'
import { Dispatch, SetStateAction, useCallback } from 'react'
import Image from 'next/image'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { IImages } from '@/types/images.types'
import { twMerge } from 'tailwind-merge'
import { Icon } from '@/UI/Icon'
import { useHandleClickOutside } from '@/hooks/useHandleClickOutSide'

type TypePosition = 'fixed' | 'absolute' | 'relative' | 'sticky'

interface PhotoLibraryProps<T> {
	hiddenPhotoLib: Dispatch<SetStateAction<boolean>>
	images: IImages<T>[]
	onChange: ActionCreatorWithPayload<T>
	position?: TypePosition
	classname?: string
}
export function PhotoLibrary<T>({
	hiddenPhotoLib,
	images,
	onChange,
	position = 'relative',
	classname
}: PhotoLibraryProps<T>) {
	const handleChange = useCallback(
		(image: IImages<T>) => {
			onChange(image.name)
			hiddenPhotoLib(false)
		},
		[hiddenPhotoLib, onChange]
	)
	const refPhotoLib = useHandleClickOutside({
		type: 'click',
		callback: () => hiddenPhotoLib(false)
	})
	return (
		<div
			className={twMerge(
				'z-30 grid h-full w-full place-items-center  px-4',
				position,
				classname
			)}
		>
			<div
				ref={refPhotoLib}
				className='relative w-fit rounded-lg bg-input-background p-10'
			>
				<Icon
					Svg={IoClose}
					onClick={() => hiddenPhotoLib(false)}
					className='absolute right-0 top-0 m-1 h-10 w-10 cursor-pointer rounded-lg bg-search-input-container-background p-2 text-white hover:opacity-80'
				/>
				<div className='grid grid-cols-3 gap-5 screen-xl-max:grid-cols-2'>
					{images?.map((image, index) => (
						<div
							key={index}
							onClick={() => handleChange(image)}
							className='relative h-24  w-24 cursor-pointer hover:opacity-50'
						>
							<Image
								className='rounded-2xl'
								src={String(image.value)}
								alt='avatarImageChoose'
								fill
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
