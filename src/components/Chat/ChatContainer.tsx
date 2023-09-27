import { useSelector } from 'react-redux'
import React, {
	RefObject,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState
} from 'react'
import { getAllMessagesState } from '@/store/message/message.selectors'
import { ChatTypeMessage } from '@/components/Chat/ChatTypeMessage'
import {
	getChatImage,
	getCoordinates,
	getSelectUserId
} from '@/store/user/user.selector'
import { useActions } from '@/hooks/useActions'
import { useToggle } from '@/hooks/useToggle'
import { ContextMenu } from '@/UI/ContextMenu'
import { INPUT_ALTER_ID_REF, MENU_MESSAGE_WINDOW } from '@/constants/constants'
import { Popup } from '@/UI/Popup'
import { InputCustom } from '@/UI/Input'
import { useHandleClickOutside } from '@/hooks/useHandleClickOutSide'
import { useKeyListener } from '@/hooks/useKeyListener'

export function ChatContainer() {
	const [openMenu, setOpenMenu] = useToggle(false)
	const [alterText, setAlterText] = useState<string>('')
	const [openInputField, setOpenInputField] = useToggle(false)
	const [findId, setFindId] = useState<number>()
	const messages = useSelector(getAllMessagesState)
	const coordinates = useSelector(getCoordinates)
	const modeBg = useSelector(getChatImage) ?? 'bg-chat-background-teal'
	const selectChatUserId = useSelector(getSelectUserId)
	const { removeMessageIdAsync, updateMessageIdAsync, setCoordinates } =
		useActions()
	const handleDoubleClick = useCallback(
		(e: React.MouseEvent<HTMLElement>, isSender: boolean) => {
			if (isSender) {
				e.preventDefault()
				setCoordinates({ x: e.pageX, y: e.pageY })
				setOpenMenu(true)
			}
		},
		[setCoordinates, setOpenMenu]
	)
	const contextMenu = useMemo(
		() => [
			{
				name: 'remove message',
				callback: () => removeMessageIdAsync(Number(findId))
			},
			{ name: 'change message', callback: () => setOpenInputField(true) }
		],
		[findId, removeMessageIdAsync, setOpenInputField]
	)
	const positionRef: RefObject<HTMLSpanElement> = useRef(null)
	useEffect(() => {
		if (positionRef.current)
			positionRef.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'end'
			})
	}, [messages])

	const handleCloseAndClearInput = useCallback(() => {
		setOpenInputField(false)
		setAlterText('')
	}, [setOpenInputField])
	const handleCloseAndSend = useCallback(() => {
		updateMessageIdAsync({
			id: Number(findId),
			message: alterText
		})
		setOpenInputField(false)
		setAlterText('')
	}, [alterText, findId, setOpenInputField, updateMessageIdAsync])
	useKeyListener({
		methodListener: 'keydown',
		pressButton: 'Escape',
		callback: () => handleCloseAndClearInput()
	})
	const inputRef = useHandleClickOutside({
		callback: () => handleCloseAndClearInput(),
		type: 'click',
		idElement: INPUT_ALTER_ID_REF
	})
	return (
		<article className='custom-scrollbar h-[calc(100vh-10rem)] overflow-auto text-white relative'>
			<div className={`${modeBg} bg-contain h-full w-full fixed z-0 `} />
			<div className='text-white z-50 relative'>
				{openMenu && (
					<ContextMenu
						fixed
						item={{
							options: contextMenu,
							setContextMenu: setOpenMenu,
							coordinates: coordinates,
							contextMenu: openMenu
						}}
						idElement={MENU_MESSAGE_WINDOW}
					/>
				)}
				{openInputField && (
					<Popup classname='fixed top-1/2 left-1/2'>
						<div
							className='flex items-end space-x-3'
							id={INPUT_ALTER_ID_REF}
							ref={inputRef}
						>
							<InputCustom
								value={alterText}
								onChange={setAlterText}
								placeholder='Input...'
								label='Replace message'
								classname='w-40 '
								autoFocus
								callback={handleCloseAndSend}
							/>
							<button
								onClick={handleCloseAndSend}
								className='py-2 px-4 bg-teal-800 rounded-xl cursor-pointer hover:opacity-80'
							>
								<span>alter</span>
							</button>
						</div>
					</Popup>
				)}
				{messages?.map(message => {
					const isSender = message.senderId !== selectChatUserId
					return (
						<article
							onDoubleClick={event =>
								handleDoubleClick(event, isSender)
							}
							onClick={() => setFindId(message.id)}
							key={message.id}
							className={`text-white px-10 text-2xl flex  cursor-default
							${isSender && 'hover:opacity-80 cursor-pointer'}
						 ${isSender ? 'justify-start ' : 'justify-end '}`}
						>
							<ChatTypeMessage
								isSender={isSender}
								message={message}
							/>
						</article>
					)
				})}
			</div>
			<span ref={positionRef} />
		</article>
	)
}
