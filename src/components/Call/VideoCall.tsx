import { Container } from '@/components/Call/Container'
import { Modal } from '@/UI/Modal'
import { useSelector } from 'react-redux'
import { getVideoCallState } from '@/store/call/call.selectors'
import { getSocketState } from '@/store/message/message.selectors'
import { getUser } from '@/store/user/user.selector'
import { useEffect } from 'react'
import { OUTGOING_VIDEO_CALL } from '@/utils/constants'

export function VideoCall() {
	const videoCall = useSelector(getVideoCallState)
	const socketRef = useSelector(getSocketState)
	const userInfo = useSelector(getUser)
	useEffect(() => {
		if (videoCall?.type === 'outgoing') {
			socketRef?.emit(OUTGOING_VIDEO_CALL, {
				to: Number(videoCall.id),
				from: {
					id: userInfo?.id,
					image: userInfo?.image,
					name: userInfo?.name
				},
				callType: videoCall.callType,
				roomId: videoCall.roomId
			})
		}
	}, [videoCall?.type === 'outgoing'])
	if (videoCall)
		return (
			<Modal>
				<Container data={videoCall} type='video' />
			</Modal>
		)
}
