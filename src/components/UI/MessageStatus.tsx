import { BsCheck, BsCheckAll } from 'react-icons/bs'
import { TypeMessageStatus } from '@/store/message/message.types'

interface MessageStatusProps {
	messageStatus?: TypeMessageStatus
}
export function MessageStatus({ messageStatus = 'sent' }: MessageStatusProps) {
	return (
		<>
			{messageStatus === 'sent' && <BsCheck className='text-lg' />}
			{messageStatus === 'delivered' && <BsCheckAll className='text-lg' />}
			{messageStatus === 'read' && (
				<BsCheckAll className='text-xl text-icon-ack' />
			)}
		</>
	)
}
