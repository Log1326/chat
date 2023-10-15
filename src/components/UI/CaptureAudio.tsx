import { Dispatch, SetStateAction } from 'react'
import {
	FaMicrophone,
	FaPauseCircle,
	FaPlay,
	FaStop,
	FaTrash
} from 'react-icons/fa'
import { useAudioRecording } from '@/hooks/useAudioRecording'
import { MdSend } from 'react-icons/md'

interface CaptureAudioProps {
	hideAudio: Dispatch<SetStateAction<boolean>>
}
export function CaptureAudio({ hideAudio }: CaptureAudioProps) {
	const { audioFn, refs, state, formatTime } = useAudioRecording()
	const handleSendAudioAndCloseRecorded = async () => {
		await audioFn.sendRecording()
		hideAudio(false)
	}
	return (
		<div className='flex h-full w-full items-center justify-end gap-4'>
			<span className='animate-scaleIn p-2'>
				<FaTrash
					className='h-6 w-6 cursor-pointer hover:text-zinc-950'
					onClick={() => hideAudio(false)}
				/>
			</span>
			<div className='flex items-center gap-4 rounded-2xl bg-background-default-hover px-4 py-2'>
				{state.isRecording ? (
					<div className='animate-fadeInfinite text-center  text-red-500'>
						Recording
					</div>
				) : (
					<div>
						{state.recordedAudio && (
							<>
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
							</>
						)}
					</div>
				)}
				<div
					className='phoneMin:w-14'
					ref={refs.waveFormRef}
					hidden={state.isRecording}
				/>
				<span className={state.isRecording ? 'w-10 text-red-500' : ''}>
					{!state.recordedAudio && state.isPlaying && (
						<span>{formatTime(state.currentPlayBackTime)}</span>
					)}
					{state.recordedAudio && !state.isPlaying && (
						<span>{formatTime(state.totalDuration)}</span>
					)}
				</span>

				<audio ref={refs.audioRef} hidden />
			</div>
			<div>
				{!state.isRecording ? (
					<FaMicrophone
						className='h-6 w-6 cursor-pointer text-red-500 hover:text-gray-300'
						onClick={audioFn.handleStartRecording}
					/>
				) : (
					<FaPauseCircle
						className='h-6 w-6 cursor-pointer text-red-500 hover:text-gray-300'
						onClick={audioFn.handleStopRecording}
					/>
				)}
			</div>
			<div>
				<MdSend
					className='h-6 w-6 cursor-pointer hover:text-zinc-950'
					title='Send'
					onClick={handleSendAudioAndCloseRecorded}
				/>
			</div>
		</div>
	)
}
