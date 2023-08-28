import { IoClose } from 'react-icons/io5'
import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { useActions } from '@/hooks/useActions'

interface PhotoLibraryProps {
	hiddenPhotoLib: Dispatch<SetStateAction<boolean>>
}
const images: string[] = [
	'/avatars/1.png',
	'/avatars/2.png',
	'/avatars/3.png',
	'/avatars/4.png',
	'/avatars/5.png',
	'/avatars/6.png',
	'/avatars/7.png',
	'/avatars/8.png',
	'/avatars/9.png'
]
export function PhotoLibrary({ hiddenPhotoLib }: PhotoLibraryProps) {
	const { setImage } = useActions()
	return (
		<div className='fixed top-0 left-0  h-full w-full flex  justify-center items-center '>
			<div className='flex justify-center items-center w-fit p-20 rounded-lg bg-input-background relative'>
				<div
					onClick={() => hiddenPhotoLib(false)}
					className='bg-search-input-container-background cursor-pointer p-3 hover:opacity-70 rounded-lg absolute top-0 right-0'
				>
					<IoClose className='h-10 w-10' />
				</div>
				<div className='grid grid-cols-3 gap-10 justify-center items-center'>
					{images.map((image, index) => (
						<div
							key={image + index}
							onClick={() => {
								setImage(image)
								hiddenPhotoLib(false)
							}}
							className='h-24 w-24 cursor-pointer relative hover:opacity-50'
						>
							<Image src={image} alt='avatarImageChoose' fill />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
