import { MutableRefObject, useEffect, useRef } from 'react'
import { io, Socket } from 'socket.io-client'
import { useActions } from '@/hooks/useActions'
import { useSelector } from 'react-redux'
import { getSelectUser, getUser } from '@/store/user/user.selector'
import { ChatList } from '@/components/Chatlist/ChatList'
import { Chat } from '@/components/Chat/Chat'
import { Empty } from '@/components/Empty'
import { HOST } from '@/service/const'
import {
	ADD_USER,
	DISCONNECTED,
	INCOMING_VIDEO_CALL,
	INCOMING_VOICE_CALL,
	REJECTED_VIDEO_CALL,
	REJECTED_VOICE_CALL
} from '@/utils/constants'
import { IncomingVideoCall } from '@/UI/IncomingVideoCall'
import { IncomingVoiceCall } from '@/UI/IncomingVoiceCall'
import {
	getIncomingVideoCall,
	getIncomingVoiceCall,
	getIsVideoCall,
	getIsVoiceCall
} from '@/store/call/call.selectors'
import { VoiceCall } from '@/components/Call/VoiceCall'
import { VideoCall } from '@/components/Call/VideoCall'
import { useAuth } from '@/hooks/useAuth'

export function Main() {
	useAuth()
	const user = useSelector(getUser)
	const selectChatUser = useSelector(getSelectUser)
	const socketRef: MutableRefObject<Socket | undefined> = useRef()
	const isVideoCall = useSelector(getIsVideoCall)
	const incomingVideoCall = useSelector(getIncomingVideoCall)
	const isVoiceCall = useSelector(getIsVoiceCall)
	const incomingVoiceCall = useSelector(getIncomingVoiceCall)
	const {
		setSocketState,
		setIncomingVoiceCall,
		setIncomingVideoCall,
		setEndCall
	} = useActions()
	useEffect(() => {
		if (user?.id) {
			const api = HOST
			if (api) socketRef.current = io(api)
			socketRef.current?.emit(ADD_USER, user.id)
			setSocketState(socketRef.current)
		}
		return () => {
			socketRef.current?.emit(DISCONNECTED, user?.id)
			socketRef.current = undefined
			setSocketState(undefined)
		}
	}, [user?.id])
	useEffect(() => {
		socketRef?.current?.on(
			INCOMING_VOICE_CALL,
			({ from, roomId, callType, type }) => {
				setIncomingVoiceCall({ user: from, roomId, callType, type })
			}
		)
		socketRef?.current?.on(
			INCOMING_VIDEO_CALL,
			({ from, roomId, callType, type }) => {
				setIncomingVideoCall({ user: from, roomId, callType, type })
			}
		)
		socketRef?.current?.on(REJECTED_VIDEO_CALL, () => {
			setEndCall()
		})
		socketRef?.current?.on(REJECTED_VOICE_CALL, () => {
			setEndCall()
		})
	}, [socketRef.current])
	return (
		<main
			className='h-screen grid grid-cols-4 overflow-hidden'
			data-testid='mainPage'
		>
			<ChatList />
			<section className='grid col-span-3 relative bg-panel-header-background h-full overflow-hidden'>
				{selectChatUser ? (
					<Chat
						socketRef={socketRef}
						userId={user?.id}
						selectChatUserId={selectChatUser.id}
					/>
				) : (
					<Empty />
				)}
				{isVoiceCall && <VoiceCall />}
				{incomingVoiceCall && <IncomingVoiceCall />}
				{isVideoCall && <VideoCall />}
				{incomingVideoCall && <IncomingVideoCall />}
			</section>
		</main>
	)
}
