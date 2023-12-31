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
		<div className='flex justify-end items-center  gap-4 w-full h-full'>
			<span className='p-2 animate-scaleIn'>
				<FaTrash
					className='h-6 w-6 cursor-pointer hover:text-zinc-950'
					onClick={() => hideAudio(false)}
				/>
			</span>
			<div className='flex items-center gap-4  px-4 py-2  rounded-2xl bg-background-default-hover'>
				{state.isRecording ? (
					<div className='text-red-500 text-center  animate-fadeInfinite'>
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
					className='w-60'
					ref={refs.waveFormRef}
					hidden={state.isRecording}
				/>
				<span className={state.isRecording ? 'text-red-500' : ''}>
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
						className='text-red-500 h-6 w-6 hover:text-gray-300 cursor-pointer'
						onClick={audioFn.handleStartRecording}
					/>
				) : (
					<FaPauseCircle
						className='text-red-500 h-6 w-6 hover:text-gray-300 cursor-pointer'
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
