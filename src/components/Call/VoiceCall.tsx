import { Container } from '@/components/Call/Container'
import { Modal } from '@/UI/Modal'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getVoiceCallState } from '@/store/call/call.selectors'
import { getSocketState } from '@/store/message/message.selectors'
import { getUser } from '@/store/user/user.selector'
import { OUTGOING_VOICE_CALL } from '@/utils/constants'

export function VoiceCall() {
	const voiceCall = useSelector(getVoiceCallState)
	const socketRef = useSelector(getSocketState)
	const userInfo = useSelector(getUser)
	useEffect(() => {
		if (voiceCall?.type === 'outgoing') {
			socketRef?.emit(OUTGOING_VOICE_CALL, {
				to: Number(voiceCall.id),
				from: {
					id: userInfo?.id,
					image: userInfo?.image,
					name: userInfo?.name
				},
				callType: voiceCall.callType,
				roomId: voiceCall.roomId,
				type: voiceCall.type
			})
		}
	}, [voiceCall?.type === 'outgoing'])
	if (voiceCall)
		return (
			<Modal>
				<Container data={voiceCall} type='voice' />
			</Modal>
		)
}
