import { Container } from '@/components/Call/Container'
import { Modal } from '@/UI/Modal'
import { useSelector } from 'react-redux'
import { getVideoCallState } from '@/store/call/call.selectors'
import { getSocketState } from '@/store/message/message.selectors'
import { getSelectUser } from '@/store/user/user.selector'
import { useEffect } from 'react'
import { OUTGOING_VIDEO_CALL } from '@/utils/constants'

export function VideoCall() {
	const videoCall = useSelector(getVideoCallState)
	const socketRef = useSelector(getSocketState)
	const selectedUser = useSelector(getSelectUser)

	useEffect(() => {
		if (videoCall?.type === 'outgoing') {
			socketRef?.emit(OUTGOING_VIDEO_CALL, {
				to: videoCall.id,
				from: {
					id: selectedUser?.id,
					image: selectedUser?.image,
					name: selectedUser?.name
				},
				callType: videoCall.callType,
				roomId: videoCall.roomId
			})
		}
	}, [videoCall])
	if (selectedUser)
		return (
			<Modal>
				<Container data={selectedUser} type='video' />
			</Modal>
		)
}
