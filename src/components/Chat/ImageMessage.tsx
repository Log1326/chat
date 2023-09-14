import { IMessage } from '@/store/message/message.types'
import { HOST } from '@/service/const'
import Image from 'next/image'

interface IImageMessage {
	message: IMessage
}
export function ImageMessage({ message }: IImageMessage) {
	return (
		<Image
			src={`${HOST}/${message.message}`}
			alt={message.message}
			height={300}
			width={300}
		/>
	)
}
