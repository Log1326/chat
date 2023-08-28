import { useSelector } from 'react-redux'
import { RefObject, useEffect, useRef } from 'react'
import { getAllMessagesState } from '@/store/message/message.selectors'
import { ChatTypeMessage } from '@/components/Chat/ChatTypeMessage'
import { getSelectUserId } from '@/store/user/user.selector'

export function ChatContainer() {
	const messages = useSelector(getAllMessagesState)
	const selectChatUserId = useSelector(getSelectUserId)
	const positionRef: RefObject<HTMLSpanElement> = useRef(null)
	useEffect(() => {
		if (positionRef.current)
			positionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
	}, [messages])
	return (
		<article className='custom-scrollbar h-[81vh] overflow-y-auto text-white relative'>
			<span className='opacity-10 bg-chat-background h-full w-full absolute' />
			<div className='text-white  z-10 mt-10'>
				{messages &&
					messages?.map(message => (
						<article
							key={message.id}
							className={`text-white px-10 text-2xl flex ${
								message.senderId === selectChatUserId
									? 'justify-start '
									: 'justify-end '
							}`}
						>
							<ChatTypeMessage message={message} key={message.id} />
						</article>
					))}
			</div>
			<span ref={positionRef} />
		</article>
	)
}
