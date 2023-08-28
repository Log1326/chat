import Image from 'next/image'
import { HOST } from '@/service/ApiRoutes'
import { IMessage } from '@/store/message/message.types'

interface IImageMessage {
	message: IMessage
}
export function ImageMessage({ message }: IImageMessage) {
	return (
		<div>
			<Image
				src={`${HOST}/${message.message}`}
				alt={message.message}
				height={300}
				width={300}
			/>
		</div>
	)
}
