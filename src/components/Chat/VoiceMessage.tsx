import { Avatar } from '@/UI/Avatar'
import { useSelector } from 'react-redux'
import { getUser } from '@/store/user/user.selector'
import { FaPlay, FaStop } from 'react-icons/fa'
import { calculateTime } from '@/utils/CalculateTime'
import { useAudioPlayer } from '@/hooks/useAudioPlayer'
import { IMessage } from '@/store/message/message.types'

interface IVoiceMessage {
	message: IMessage
}
export function VoiceMessage({ message }: IVoiceMessage) {
	const user = useSelector(getUser)
	const { state, refs, audioFn } = useAudioPlayer(message)
	return (
		<div className='flex items-center justify-center gap-8 z-50'>
			<Avatar type='lg' value={user?.image ?? ''} />
			<div>
				{!state.isPlaying ? (
					<FaPlay
						className='h-6 w-6 cursor-pointer hover:text-zinc-950'
						onClick={audioFn.handlePlayRecording}
					/>
				) : (
					<FaStop
						className='h-6 w-6 cursor-pointer hover:text-zinc-950'
						onClick={audioFn.handlePauseRecording}
					/>
				)}
			</div>
			<div className='relative'>
				<div ref={refs.waveFormRef} />
				<div className='w-fit'>
					<span>{calculateTime(String(message.createdAt))}</span>
				</div>
			</div>
		</div>
	)
}
