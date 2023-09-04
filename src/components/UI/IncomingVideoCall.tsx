import { Popup } from '@/UI/Popup'
import { useSelector } from 'react-redux'
import { getIncomingVideoCall } from '@/store/call/call.selectors'
import { useCallback } from 'react'
import { IncomingContainer } from '@/UI/IncomingContainer'

export function IncomingVideoCall() {
	const incomingCall = useSelector(getIncomingVideoCall)
	const accept = useCallback(() => {
		alert('accept')
	}, [])
	const reject = useCallback(() => {
		alert('accept')
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
