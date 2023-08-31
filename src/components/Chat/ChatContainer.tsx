import { useSelector } from 'react-redux'
import { RefObject, useEffect, useRef } from 'react'
import { getAllMessagesState } from '@/store/message/message.selectors'
import { ChatTypeMessage } from '@/components/Chat/ChatTypeMessage'
import { getChatImage, getSelectUserId } from '@/store/user/user.selector'
import { useElementSize } from '@/hooks/useElementSize'
import { useMediaQuery } from '@/hooks/useMediaQuery'

export function ChatContainer() {
	const messages = useSelector(getAllMessagesState)
	const modeBg = useSelector(getChatImage) ?? 'bg-chat-background-teal'
	const selectChatUserId = useSelector(getSelectUserId)
	//================================
	//TO DO
	const [elementRef, { height }] = useElementSize<HTMLDivElement>()
	const matches = useMediaQuery('(max-height: 768px)')
	//TO DO
	//================================
	const positionRef: RefObject<HTMLSpanElement> = useRef(null)
	useEffect(() => {
		if (positionRef.current)
			positionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
	}, [messages])
	return (
		<article className='custom-scrollbar h-[calc(100vh-10rem)] overflow-y-auto text-white relative'>
			<div
				className={`${modeBg} bg-auto bg-center w-full z-10 absolute`}
				ref={elementRef}
			>
				<div className='text-white z-50 '>
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
			</div>
		</article>
	)
}
