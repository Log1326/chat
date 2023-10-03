import { Avatar } from '@/UI/Avatar'
import { useSelector } from 'react-redux'
import { getUser } from '@/store/user/user.selector'
import { IMessage } from '@/store/message/message.types'
import { Icon } from '@/UI/Icon'
import { useAudioPlayer } from '@/hooks/useAudioPlayer'
import { FaPlay, FaStop } from 'react-icons/fa'
import { BsMic } from 'react-icons/bs'

interface IVoiceMessage {
	message: IMessage
	compressed?: boolean
}
export function VoiceMessage({ message, compressed }: IVoiceMessage) {
	const user = useSelector(getUser)
	const { state, refs, audioFn, formatTime } = useAudioPlayer(message)
	if (compressed) {
		return (
			<div className='relative'>
				<Icon Svg={BsMic} className='h-6 w-6 p-1' />
				<div ref={refs.waveFormRef} hidden />
			</div>
		)
	}
	return (
		<div className='z-50 flex items-center justify-center gap-2'>
			<Avatar
				alt={user.name}
				type='lg'
				src={user?.image ?? ''}
				title={user.name}
			/>
			<div className='mx-2'>
				{!state.isPlaying ? (
					<Icon
						Svg={FaPlay}
						className='h-6 w-6 cursor-pointer hover:text-zinc-950 '
						onClick={audioFn.handlePlayRecording}
					/>
				) : (
					<Icon
						Svg={FaStop}
						className='h-6 w-6 cursor-pointer hover:text-zinc-950 '
						onClick={audioFn.handlePauseRecording}
					/>
				)}
			</div>
			<div className='relative text-center'>
				<div ref={refs.waveFormRef} />
				<div className='w-16 '>
					<span className='text-lg'>
						{state.isPlaying
							? formatTime(state.currentPlayBackTime)
							: formatTime(state.totalDuration)}
					</span>
				</div>
			</div>
		</div>
	)
}
