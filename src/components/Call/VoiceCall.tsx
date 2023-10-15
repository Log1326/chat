import { Container } from '@/components/Call/Container'
import { Modal } from '@/UI/Modal'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getVoiceCallState } from '@/store/call/call.selectors'
import { getSocketState } from '@/store/message/message.selectors'
import { getSelectUser } from '@/store/user/user.selector'
import { OUTGOING_VOICE_CALL } from '@/utils/constants'

export function VoiceCall() {
	const voiceCall = useSelector(getVoiceCallState)
	const socketRef = useSelector(getSocketState)
	const selectedUser = useSelector(getSelectUser)
	console.log(voiceCall)
	useEffect(() => {
		if (voiceCall && voiceCall.type === 'outgoing') {
			alert('sad')
			socketRef?.emit(OUTGOING_VOICE_CALL, {
				to: voiceCall.id,
				from: {
					id: selectedUser?.id,
					image: selectedUser?.image,
					name: selectedUser?.name
				},
				callType: voiceCall.callType,
				roomId: voiceCall.roomId
			})
		}
	}, [])
	if (selectedUser)
		return (
			<Modal>
				<Container data={selectedUser} type='voice' />
			</Modal>
		)
}
