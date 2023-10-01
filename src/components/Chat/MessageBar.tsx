import { BsEmojiSmile } from 'react-icons/bs'
import { ImAttachment } from 'react-icons/im'
import { MdSend } from 'react-icons/md'
import { FaMicrophone } from 'react-icons/fa'
import React, { KeyboardEvent, useCallback } from 'react'
import { useActions } from '@/hooks/useActions'
import { useToggle } from '@/hooks/useToggle'
import { Categories, Theme } from 'emoji-picker-react'
import { EmojiClickData } from 'emoji-picker-react/src/types/exposedTypes'
import { useHandleClickOutside } from '@/hooks/useHandleClickOutSide'
import { PhotoPicker } from '@/UI/PhotoPicker'
import { EMOJI_ID_REF, PHOTO_PICKER_MESSAGE } from '@/constants/constants'
import { useGrabPhoto } from '@/hooks/useGrabPhoto'
import dynamic from 'next/dynamic'
import { useSelector } from 'react-redux'
import { getMessageState } from '@/store/message/message.selectors'
import { Icon } from '@/UI/Icon'

const Picker = dynamic(
	() => {
		return import('emoji-picker-react')
	},
	{ ssr: false }
)

const CaptureAudio = dynamic(
	() => import('@/UI/CaptureAudio').then(module => module.CaptureAudio),
	{
		ssr: false
	}
)
interface MessageBarProps {
	userId: number
	selectChatUserId: number
}
export function MessageBar({ userId, selectChatUserId }: MessageBarProps) {
	const message = useSelector(getMessageState)
	const { setMessage, addMessageImage, addMessageSend } = useActions()
	const [showAudioRecorder, setShowAudioRecorder] = useToggle(false)
	const [showEmoji, setShowEmoji, clickShowEmoji] = useToggle(false)
	const chooseImage = async (formData: FormData) =>
		addMessageImage({ formData, userId, selectChatUserId })
	const handleMessage = async () =>
		addMessageSend({ message, from: userId, to: selectChatUserId })
	const handleEmojiClick = useCallback(
		(value: EmojiClickData) => {
			setMessage(value.emoji)
			setShowEmoji(false)
		},
		[setMessage, setShowEmoji]
	)
	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) =>
		e.code === 'Enter' && handleMessage()
	const { grabPhoto, photoChange, fnGrabPhoto } = useGrabPhoto({
		idPhotoPicker: PHOTO_PICKER_MESSAGE,
		callback: chooseImage,
		changeType: 'imageMessage'
	})
	const emojiRef = useHandleClickOutside({
		callback: () => setShowEmoji(false),
		type: 'click',
		idElement: EMOJI_ID_REF
	})
	const startRecording = useCallback(
		() => setShowAudioRecorder(true),
		[setShowAudioRecorder]
	)
	const onChangeInput = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value),
		[setMessage]
	)
	return (
		<section className='h-[4.5rem] mt-2 relative text-white bg-input-background p-4 border-b-4 border-teal-500'>
			{!showAudioRecorder && (
				<div className='animate-scaleIn flex gap-4 justify-around items-center w-full'>
					<button>
						<Icon
							Svg={BsEmojiSmile}
							className='h-6 w-6 cursor-pointer hover:opacity-70'
							title='Choose emoji'
							id={EMOJI_ID_REF}
							onClick={clickShowEmoji}
						/>
					</button>
					{showEmoji && (
						<div
							ref={emojiRef}
							className='absolute z-30 left-10 bottom-28'
						>
							<Picker
								onEmojiClick={handleEmojiClick}
								theme={Theme.DARK}
								lazyLoadEmojis={true}
								categories={[
									{
										name: 'Smiles & Emotions',
										category: Categories.SMILEYS_PEOPLE
									}
								]}
							/>
						</div>
					)}
					<button>
						<Icon
							Svg={ImAttachment}
							className='h-6 w-6 cursor-pointer hover:opacity-70'
							title='Attached'
							onClick={fnGrabPhoto}
						/>
					</button>
					<input
						type='text'
						value={message}
						autoFocus
						onChange={onChangeInput}
						placeholder='Type a message'
						className='outline-none rounded-lg w-full bg-gray-600 px-5 placeholder:text-sm h-10 text-xl'
						onKeyDown={handleKeyDown}
					/>
					<button onClick={handleMessage}>
						<Icon
							Svg={MdSend}
							className='h-6 w-6 cursor-pointer hover:text-zinc-950'
							title='Send message'
						/>
					</button>
					<button>
						<Icon
							Svg={FaMicrophone}
							className='h-6 w-6 cursor-pointer hover:text-zinc-950'
							title='Record message'
							onClick={startRecording}
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
			{showAudioRecorder && (
				<CaptureAudio hideAudio={setShowAudioRecorder} />
			)}
		</section>
	)
}
