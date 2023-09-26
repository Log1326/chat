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
		(e: React.MouseEvent<HTMLDivElement>) => {
			e.preventDefault()
			setCoordinates({ x: e.pageX, y: e.pageY })
			setOpenMenu(true)
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
	const handleCloseAndClearInput = () =>
		useCallback(() => {
			setOpenInputField(false)
			setAlterText('')
		}, [])
	const inputRef = useHandleClickOutside({
		callback: handleCloseAndClearInput(),
		type: 'click',
		idElement: INPUT_ALTER_ID_REF
	})
	const handleCloseAndSend = () => {
		updateMessageIdAsync({
			id: Number(findId),
			message: alterText
		})
		setOpenInputField(false)
		setAlterText('')
	}
	useKeyListener({
		methodListener: 'keydown',
		pressButton: 'Enter',
		callback: handleCloseAndSend
	})
	return (
		<article className='custom-scrollbar h-[calc(100vh-10rem)] overflow-y-auto text-white relative'>
			<div className={`${modeBg} bg-auto bg-center w-full z-10 absolute`}>
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
						<Popup classname='absolute top-1/2 right-1/4'>
							<div
								className='flex items-end space-x-3'
								id={INPUT_ALTER_ID_REF}
								ref={inputRef}
							>
								<InputCustom
									value={alterText}
									onChange={setAlterText}
									placeholder='Input...'
									label
									name={'Replace message'}
									classname='w-40 '
									autoFocus
								/>
								<button
									onClick={() => handleCloseAndSend()}
									className='py-2 px-4 bg-teal-800 rounded-xl cursor-pointer hover:opacity-80'
								>
									<span>alter</span>
								</button>
							</div>
						</Popup>
					)}
					{messages?.map(message => (
						<article
							onDoubleClick={handleDoubleClick}
							onClick={() => setFindId(message.id)}
							key={message.id}
							className={`text-white px-10 text-2xl flex hover:cursor-pointer hover:opacity-80 ${
								message.senderId === selectChatUserId
									? 'justify-start '
									: 'justify-end '
							}`}
						>
							<ChatTypeMessage
								message={message}
								key={message.id}
							/>
						</article>
					))}
				</div>
				<span ref={positionRef} />
			</div>
		</article>
	)
}
