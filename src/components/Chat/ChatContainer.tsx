import { ContextMenu } from '@/UI/ContextMenu'
import { InputCustom } from '@/UI/Input'
import { Popup } from '@/UI/Popup'
import { ChatTypeMessage } from '@/components/Chat/ChatTypeMessage'
import { INPUT_ALTER_ID_REF, MENU_MESSAGE_WINDOW } from '@/constants/constants'
import { useActions } from '@/hooks/useActions'
import { useHandleClickOutside } from '@/hooks/useHandleClickOutSide'
import { useKeyListener } from '@/hooks/useKeyListener'
import { useToggle } from '@/hooks/useToggle'
import { getAllMessagesState } from '@/store/message/message.selectors'
import {
	getChatImage,
	getCoordinates,
	getSelectUserId
} from '@/store/user/user.selector'
import React, {
	RefObject,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState
} from 'react'
import { useSelector } from 'react-redux'
import { twMerge } from 'tailwind-merge'

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
		<article className='custom-scrollbar relative h-[calc(100vh-10rem)] overflow-auto text-white'>
			<div
				className={twMerge(
					' fixed z-0 h-full w-full bg-contain',
					modeBg
				)}
			/>
			<div className='relative z-20 text-white'>
				{openMenu && (
					<ContextMenu
						position='fixed'
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
					<Popup classname='fixed top-1/2 left-1/2 screen-xl-max:absolute screen-xl-max:left-1/4 screen-xl-max:top-4/5'>
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
								classnames='w-40 '
								autoFocus
								callback={handleCloseAndSend}
							/>
							<button
								onClick={handleCloseAndSend}
								className='cursor-pointer rounded-xl bg-teal-800 px-4 py-2 hover:opacity-80'
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
							className={twMerge(
								'z-20 cursor-default break-all px-10 text-2xl text-white',
								isSender
									? 'flex w-fit justify-start'
									: 'flex justify-end'
							)}
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
