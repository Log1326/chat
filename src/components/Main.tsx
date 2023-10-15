import { MutableRefObject, useEffect, useRef } from 'react'
import { LocalStorageService } from '@/service/LocalStorageService'
import { io } from 'socket.io-client'
import { useActions } from '@/hooks/useActions'
import { useSelector } from 'react-redux'
import { getSelectUser } from '@/store/user/user.selector'
import { useAuth } from '@/hooks/useAuth'
import { ChatList } from '@/components/Chatlist/ChatList'
import { Chat } from '@/components/Chat/Chat'
import { Empty } from '@/components/Empty'
import { Socket } from 'socket.io-client/build/esm/socket'
import { getIsSearchMessage } from '@/store/message/message.selectors'
import { SearchMessages } from '@/components/Chat/SearchMessages'
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

export function Main() {
	useAuth()
	const user = LocalStorageService.getParseUserLocalStorage()
	const selectChatUser = useSelector(getSelectUser)
	const isSearchMessage = useSelector(getIsSearchMessage)
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
		<>
			<main className='h-screen grid grid-cols-4'>
				<ChatList />
				<section className='grid col-span-3 bg-panel-header-background h-screen overflow-hidden border-b-4 border-teal-500'>
					{selectChatUser ? (
						<div
							className={`${
								isSearchMessage
									? 'grid grid-cols-2'
									: 'grid-cols-4 animate-fade'
							}`}
						>
							<Chat
								socketRef={socketRef}
								userId={user?.id}
								selectChatUserId={selectChatUser.id}
							/>
							{isSearchMessage && <SearchMessages />}
						</div>
					) : (
						<Empty />
					)}
					{isVoiceCall && <VoiceCall />}
					{incomingVoiceCall && <IncomingVoiceCall />}
					{isVideoCall && <VideoCall />}
					{incomingVideoCall && <IncomingVideoCall />}
				</section>
			</main>
		</>
	)
}
