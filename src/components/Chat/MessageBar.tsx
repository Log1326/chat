import { BsEmojiSmile } from 'react-icons/bs'
import { ImAttachment } from 'react-icons/im'
import { MdSend } from 'react-icons/md'
import { FaMicrophone } from 'react-icons/fa'
import React, { KeyboardEvent, MutableRefObject } from 'react'
import { MessageService } from '@/service/ApiRoutes'
import { Socket } from 'socket.io-client/build/esm/socket'
import { DefaultEventsMap } from '@socket.io/component-emitter'
import { useActions } from '@/hooks/useActions'
import { useToggle } from '@/hooks/useToggle'
import EmojiPicker, { Theme } from 'emoji-picker-react'
import { EmojiClickData } from 'emoji-picker-react/src/types/exposedTypes'
import { useHandleClickOutside } from '@/hooks/useHandleClickOutSide'
import { PhotoPicker } from '@/UI/PhotoPicker'
import { EMOJI_ID_REF, PHOTO_PICKER_MESSAGE } from '@/constants/constants'
import { useGrabPhoto } from '@/hooks/useGrabPhoto'
import dynamic from 'next/dynamic'
import { useSelector } from 'react-redux'
import { getMessageState } from '@/store/message/message.selectors'

const CaptureAudio = dynamic(
	() => import('@/UI/CaptureAudio').then(module => module.CaptureAudio),
	{
		ssr: false
	}
)
interface MessageBarProps {
	userId: number
	selectChatUserId: number
	socketRef: MutableRefObject<
		Socket<DefaultEventsMap, DefaultEventsMap> | undefined
	>
}
export function MessageBar({
	userId,
	selectChatUserId,
	socketRef
}: MessageBarProps) {
	const message = useSelector(getMessageState)
	const { setMessages, setMessage } = useActions()
	const [showAudioRecorder, setShowAudioRecorder] = useToggle(false)
	const [showEmoji, setShowEmoji, clickShowEmoji] = useToggle(false)
	const chooseImage = async (formData: FormData) => {
		try {
			const { status, data } = await MessageService.addMessageImage(
				formData,
				userId,
				selectChatUserId
			)
			if (status === 201) {
				socketRef.current?.emit('send-msg', {
					to: selectChatUserId,
					from: userId,
					message: data.message
				})
				setMessages(data.message)
				setMessage('')
			}
		} catch (err) {
			console.log(err)
		}
	}
	const { grabPhoto, photoChange, fnGrabPhoto } = useGrabPhoto({
		idPhotoPicker: PHOTO_PICKER_MESSAGE,
		callback: chooseImage,
		changeType: 'imageMessage'
	})
	const emojiRef = useHandleClickOutside(
		() => {
			setShowEmoji(false)
		},
		'click',
		EMOJI_ID_REF
	)
	const handleEmojiClick = (value: EmojiClickData) => setMessage(value.emoji)
	const handleMessage = async () => {
		const response = await MessageService.addMessageSent({
			to: selectChatUserId,
			from: userId,
			message: message ? message : ''
		})
		socketRef.current?.emit('send-msg', {
			to: selectChatUserId,
			from: userId,
			message: response?.message
		})
		if (response) setMessages(response.message)
		setMessage('')
	}
	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) =>
		e.code === 'Enter' && handleMessage()
	console.log(message)
	return (
		<article className='h-20 relative text-white flex bg-input-background p-2'>
			{!showAudioRecorder && (
				<div className='animate-scaleIn flex gap-4 justify-around items-center w-full'>
					<button>
						<BsEmojiSmile
							className='h-6 w-6 cursor-pointer hover:opacity-70'
							title='Choose emoji'
							id={EMOJI_ID_REF}
							onClick={clickShowEmoji}
						/>
					</button>
					{showEmoji && (
						<div ref={emojiRef} className='absolute z-50 left-10 bottom-28'>
							<EmojiPicker
								onEmojiClick={handleEmojiClick}
								theme={Theme.DARK}
								lazyLoadEmojis
							/>
						</div>
					)}
					<button>
						<ImAttachment
							className='h-6 w-6 cursor-pointer hover:opacity-70'
							title='Attached'
							onClick={fnGrabPhoto}
						/>
					</button>
					<input
						type='text'
						value={message as string}
						autoFocus
						onChange={e => setMessage(e.target.value)}
						placeholder='Type a message'
						className='outline-none rounded-lg w-full bg-gray-600 px-5 placeholder:text-sm h-10 text-xl'
						onKeyDown={handleKeyDown}
					/>
					<button onClick={handleMessage}>
						<MdSend
							className='h-6 w-6 cursor-pointer hover:text-zinc-950'
							title='Send message'
						/>
					</button>
					<button>
						<FaMicrophone
							className='h-6 w-6 cursor-pointer hover:text-zinc-950'
							title='Record message'
							onClick={() => setShowAudioRecorder(true)}
						/>
					</button>
				</div>
			)}
			{grabPhoto && (
				<PhotoPicker
					idPhotoPicker={PHOTO_PICKER_MESSAGE}
					onChange={photoChange}
				/>
			)}
			{showAudioRecorder && <CaptureAudio hideAudio={setShowAudioRecorder} />}
		</article>
	)
}
