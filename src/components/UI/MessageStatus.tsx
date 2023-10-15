import { BsCheck, BsCheckAll } from 'react-icons/bs'
import { TypeMessageStatus } from '@/store/message/message.types'
import { memo } from 'react'
import { Icon } from '@/UI/Icon'

interface MessageStatusProps {
	messageStatus?: TypeMessageStatus
}
export const MessageStatus = memo(function MessageStatus({
	messageStatus = 'sent'
}: MessageStatusProps) {
	return (
		<>
			{messageStatus === 'sent' && (
				<Icon Svg={BsCheck} className='text-lg' />
			)}
			{messageStatus === 'delivered' && (
				<Icon Svg={BsCheckAll} className='text-lg' />
			)}
			{messageStatus === 'read' && (
				<Icon Svg={BsCheckAll} className='text-lg text-icon-ack' />
			)}
		</>
	)
})
