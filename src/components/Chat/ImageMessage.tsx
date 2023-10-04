import { IMessage } from '@/store/message/message.types'
import { HOST } from '@/service/const'
import Image from 'next/image'
import { BiImageAlt } from 'react-icons/bi'
import { Icon } from '@/UI/Icon'
import { memo } from 'react'

interface IImageMessage {
	message: IMessage
	compressed?: boolean
}
export const ImageMessage = memo(function ImageMessage({
	message,
	compressed
}: IImageMessage) {
	if (compressed) return <Icon Svg={BiImageAlt} className='h-6 w-6' />
	return (
		<Image
			src={`${HOST}/${message.message}`}
			alt={message.message}
			height={300}
			width={300}
			blurDataURL='/load.gif'
			placeholder='blur'
		/>
	)
})
