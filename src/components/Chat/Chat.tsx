import { ChatHeader } from '@/components/Chat/ChatHeader'
import { ChatContainer } from '@/components/Chat/ChatContainer'
import { MessageBar } from '@/components/Chat/MessageBar'
import { MutableRefObject, useEffect } from 'react'
import { useActions } from '@/hooks/useActions'
import { Socket } from 'socket.io-client/build/esm/socket'
import { DefaultEventsMap } from '@socket.io/component-emitter'
import {
	INCOMING_VIDEO_CALL,
	INCOMING_VOICE_CALL,
	MESSAGE_RECEIVE,
	REJECTED_VIDEO_CALL,
	REJECTED_VOICE_CALL
} from '@/utils/constants'
import { useSelector } from 'react-redux'
import {
	getIncomingVideoCall,
	getIncomingVoiceCall
} from '@/store/call/call.selectors'
import { IncomingVideoCall } from '@/UI/IncomingVideoCall'
import { IncomingVoiceCall } from '@/UI/IncomingVoiceCall'

interface ChatProps {
	selectChatUserId?: number | null
	userId?: number | null
	socketRef: MutableRefObject<
		Socket<DefaultEventsMap, DefaultEventsMap> | undefined
	>
}
export function Chat({ selectChatUserId, userId, socketRef }: ChatProps) {
	const {
		getAllMessage,
		setMessages,
		setIncomingVoiceCall,
		setIncomingVideoCall,
		setEndCall
	} = useActions()
	const incomingVideoCall = useSelector(getIncomingVideoCall)
	const incomingVoiceCall = useSelector(getIncomingVoiceCall)
	useEffect(() => {
		if (selectChatUserId) getAllMessage({ to: userId, from: selectChatUserId })
	}, [selectChatUserId])
	useEffect(() => {
		if (socketRef.current) {
			socketRef.current.on(MESSAGE_RECEIVE, data => {
				setMessages(data.message)
			})
			socketRef.current.on(
				INCOMING_VOICE_CALL,
				({ from, roomId, callType }) => {
					setIncomingVoiceCall({ ...from, roomId, callType })
				}
			)
			socketRef.current.on(
				INCOMING_VIDEO_CALL,
				({ from, roomId, callType }) => {
					setIncomingVideoCall({ ...from, roomId, callType })
				}
			)
			socketRef.current.on(REJECTED_VIDEO_CALL, () => {
				setEndCall()
			})
			socketRef.current.on(REJECTED_VOICE_CALL, () => {
				setEndCall()
			})
		}
	}, [socketRef.current])
	return (
		<section className='flex h-full flex-col justify-between bg-search-input-container-background animate-scaleIn'>
			<ChatHeader />
			<ChatContainer />
			<MessageBar
				userId={Number(userId)}
				selectChatUserId={Number(selectChatUserId)}
			/>
			{incomingVideoCall && !incomingVoiceCall && (
				<div className='relative'>
					<IncomingVideoCall />
				</div>
			)}
			{!incomingVideoCall && incomingVoiceCall && (
				<div className='relative'>
					<IncomingVoiceCall />
				</div>
			)}
		</section>
	)
}
