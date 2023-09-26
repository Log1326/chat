import Image from 'next/image'
import React from 'react'
import { AiOutlineLoading } from 'react-icons/ai'
import { CustomAvatarMenu } from '@/UI/CustomAvatarMenu'

type TypeAvatar = 'sm' | 'lg' | 'xl'
interface AvatarProps {
	type: TypeAvatar
	value: string
	className?: string
}

export function Avatar({ type, value, className }: AvatarProps) {
	return (
		<>
			<div
				data-testid='avatar'
				className={`flex items-center justify-center cursor-pointer ${className}`}
			>
				{type === 'sm' && (
					<div className='relative '>
						{value ? (
							<Image
								src={value ?? ''}
								alt='imageAvatar'
								className='rounded-full '
								width={30}
								height={30}
							/>
						) : (
							<AiOutlineLoading className='animate-spin' />
						)}
					</div>
				)}
				{type === 'lg' && (
					<div className='relative h-16 w-16'>
						{value ? (
							<Image
								src={value ?? ''}
								alt='imageAvatar'
								className='rounded-full'
								fill
							/>
						) : (
							<AiOutlineLoading className='animate-spin' />
						)}
					</div>
				)}
				{type === 'xl' && <CustomAvatarMenu value={value} />}
			</div>
		</>
	)
}
