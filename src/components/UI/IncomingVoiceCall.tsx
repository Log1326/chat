import { Popup } from '@/UI/Popup'
import { useSelector } from 'react-redux'
import { getIncomingVoiceCall } from '@/store/call/call.selectors'
import { IncomingContainer } from '@/UI/IncomingContainer'
import { useCallback } from 'react'
import { useActions } from '@/hooks/useActions'
import { getSocketState } from '@/store/message/message.selectors'
import { ACCEPT_INCOMING_CALL, REJECT_VOICE_CALL } from '@/utils/constants'

export const IncomingVoiceCall = () => {
	const { voiceCallOpenWindow, voiceCall, setIncomingVoiceCall } = useActions()
	const incomingCall = useSelector(getIncomingVoiceCall)
	const socketRef = useSelector(getSocketState)
	const accept = useCallback(() => {
		console.log(incomingCall)
		if (incomingCall) voiceCall(incomingCall)
		voiceCallOpenWindow(true)
		socketRef?.emit(ACCEPT_INCOMING_CALL, { id: incomingCall?.user.id })
		setIncomingVoiceCall(undefined)
	}, [])
	const reject = useCallback(() => {
		socketRef?.emit(REJECT_VOICE_CALL, { to: incomingCall?.user.id })
		setIncomingVoiceCall(undefined)
	}, [])
	if (incomingCall)
		return (
			<Popup>
				<IncomingContainer
					accept={accept}
					reject={reject}
					info={incomingCall}
				/>
			</Popup>
		)
}
