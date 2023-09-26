import { Popup } from '@/UI/Popup'
import { useSelector } from 'react-redux'
import { getIncomingVideoCall } from '@/store/call/call.selectors'
import { useCallback } from 'react'
import { IncomingContainer } from '@/UI/IncomingContainer'
import { getSocketState } from '@/store/message/message.selectors'
import { useActions } from '@/hooks/useActions'
import { ACCEPT_INCOMING_CALL, REJECTED_VIDEO_CALL } from '@/utils/constants'

export function IncomingVideoCall() {
	const incomingCall = useSelector(getIncomingVideoCall)
	const socketRef = useSelector(getSocketState)
	const {
		videoCallOpenWindow,
		videoCall,
		setIncomingVideoCall,
		setIsAcceptCall
	} = useActions()

	const accept = useCallback(() => {
		if (incomingCall) videoCall(incomingCall)
		videoCallOpenWindow(true)
		setIsAcceptCall(true)
		socketRef?.emit(ACCEPT_INCOMING_CALL, { id: incomingCall?.user.id })
		setIncomingVideoCall(undefined)
	}, [incomingCall])
	const reject = useCallback(() => {
		socketRef?.emit(REJECTED_VIDEO_CALL, { to: incomingCall?.user.id })
		setIncomingVideoCall(undefined)
	}, [])
	if (incomingCall)
		return (
			<Popup classname='absolute bottom-24'>
				<IncomingContainer
					accept={accept}
					reject={reject}
					info={incomingCall}
				/>
			</Popup>
		)
}
