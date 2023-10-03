import { BsCheck, BsCheckAll } from 'react-icons/bs'
import { TypeMessageStatus } from '@/store/message/message.types'
import { memo } from 'react'

interface MessageStatusProps {
	messageStatus?: TypeMessageStatus
}
export const MessageStatus = memo(function MessageStatus({
	messageStatus = 'sent'
}: MessageStatusProps) {
	return (
		<>
			{messageStatus === 'sent' && <BsCheck className='text-lg' />}
			{messageStatus === 'delivered' && (
				<BsCheckAll className='text-lg' />
			)}
			{messageStatus === 'read' && (
				<BsCheckAll className='text-lg text-icon-ack' />
			)}
		</>
	)
})
