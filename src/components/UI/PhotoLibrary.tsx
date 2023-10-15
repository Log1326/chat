import { IoClose } from 'react-icons/io5'
import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { IImages } from '@/types/images.types'
import { bgChat } from '@/store/user/user.types'

type TypePhotoLibrary = 'avatar' | 'chat'
interface PhotoLibraryProps {
	hiddenPhotoLib: Dispatch<SetStateAction<boolean>>
	imagesAvatar?: IImages<string>[]
	changeAvatar?: ActionCreatorWithPayload<string>
	changeBg?: ActionCreatorWithPayload<bgChat>
	imagesBg?: IImages<bgChat>[]
	type?: TypePhotoLibrary
}
export function PhotoLibrary({
	hiddenPhotoLib,
	imagesAvatar,
	changeAvatar,
	imagesBg,
	changeBg,
	type = 'avatar'
}: PhotoLibraryProps) {
	const handleChange = (image: IImages<any>) => {
		if (type === 'chat') changeBg?.(image.name)
		else changeAvatar?.(image.value)
		hiddenPhotoLib(false)
	}
	return (
		<div
			className={`fixed z-30 top-0 ${
				type === 'chat' ? 'left-36' : 'left-0'
			}  h-full w-full grid place-items-center`}
		>
			<div className='flex justify-center items-center w-fit p-20 rounded-lg bg-input-background relative'>
				<div
					onClick={() => hiddenPhotoLib(false)}
					className='bg-search-input-container-background cursor-pointer m-1 p-1 hover:opacity-60 rounded-lg absolute top-0 right-0'
				>
					<IoClose className='h-10 w-10 text-white' />
				</div>
				<div className='grid grid-cols-3 gap-10 justify-center items-center'>
					{type === 'chat' &&
						imagesBg?.map((image, index) => (
							<div
								key={image.name + index}
								onClick={() => handleChange(image)}
								className='h-24 w-24  cursor-pointer relative hover:opacity-50'
							>
								<Image
									className='rounded-2xl'
									src={image.value}
									alt='avatarImageChoose'
									fill
								/>
							</div>
						))}
					{type === 'avatar' &&
						imagesAvatar?.map((image, index) => (
							<div
								key={image.name + index}
								onClick={() => handleChange(image)}
								className='h-24 w-24  cursor-pointer relative hover:opacity-50'
							>
								<Image
									className='rounded-2xl'
									src={image.value}
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
