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
import { ADD_USER, DISCONNECTED } from '@/utils/constants'

export function Main() {
	useAuth()
	const { setSocketState } = useActions()
	const selectChatUser = useSelector(getSelectUser)
	const isSearchMessage = useSelector(getIsSearchMessage)
	const socketRef: MutableRefObject<Socket | undefined> = useRef()
	const user = LocalStorageService.getParseUserLocalStorage()
	useEffect(() => {
		if (user === undefined) LocalStorageService.removeUserLocalStorage()
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
				</section>
			</main>
		</>
	)
}
