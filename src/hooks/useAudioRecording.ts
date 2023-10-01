import { MutableRefObject, useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'
import { MessageService } from '@/service/ApiRoutes'
import { useActions } from '@/hooks/useActions'
import { useSelector } from 'react-redux'
import { getSelectUserId, getUserId } from '@/store/user/user.selector'
import { getSocketState } from '@/store/message/message.selectors'

export const useAudioRecording = () => {
	const userId = useSelector(getUserId)
	const selectChatUserId = useSelector(getSelectUserId)
	const socket = useSelector(getSocketState)
	const { setMessages, setMessage } = useActions()

	const [isRecording, setIsRecording] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)

	const [renderedAudio, setRenderedAudio] = useState<File | null>(null)
	const [recordedAudio, setRecordedAudio] = useState<HTMLAudioElement | null>(
		null
	)
	const [waveForm, setWaveForm] = useState<WaveSurfer>()
	const audioRef: MutableRefObject<HTMLVideoElement | null> = useRef(null)
	const waveFormRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

	const mediaRecordedRef: MutableRefObject<MediaRecorder | null> =
		useRef(null)
	const [recordingDuration, setRecordingDuration] = useState<number>(0)
	const [currentPlayBackTime, setCurrentPlayBackTime] = useState<number>(0)
	const [totalDuration, setTotalDuration] = useState<number>(0)

	const handleStartRecording = () => {
		setRecordingDuration(0)
		setCurrentPlayBackTime(0)
		setTotalDuration(0)
		setIsRecording(true)
		setRenderedAudio(null)
		navigator.mediaDevices
			.getUserMedia({ audio: true })
			.then(stream => {
				const mediaRecorder = new MediaRecorder(stream)
				mediaRecordedRef.current = mediaRecorder
				if (audioRef.current) audioRef.current.srcObject = stream
				const chunks: BlobPart[] | undefined = []
				mediaRecorder.ondataavailable = event => chunks.push(event.data)
				mediaRecorder.onstop = () => {
					const blob = new Blob(chunks, {
						type: 'audio/webm;codecs=opus'
					})
					const audioURL = URL.createObjectURL(blob)
					const audio = new Audio(audioURL)
					setRecordedAudio(audio)
					waveForm?.load(audioURL)
				}
				mediaRecorder.start()
			})
			.catch(error => {
				console.log('Error microphone', error)
			})
	}
	const handleStopRecording = () => {
		if (mediaRecordedRef.current && isRecording) {
			mediaRecordedRef.current?.stop()
			setIsRecording(false)
			waveForm?.stop()
			const audioChunks: BlobPart[] | undefined = []
			mediaRecordedRef.current?.addEventListener('dataavailable', event =>
				audioChunks.push(event.data)
			)
			mediaRecordedRef.current?.addEventListener('stop', () => {
				const audioBlob = new Blob(audioChunks, { type: 'audio/mp3' })
				const audioFile = new File([audioBlob], 'recording.mp3')
				setRenderedAudio(audioFile)
			})
		}
	}
	const handlePlayRecording = async () => {
		if (recordedAudio) {
			waveForm?.stop()
			waveForm?.play()
			await recordedAudio.play()
			setIsPlaying(true)
		}
	}
	const handlePauseRecording = () => {
		waveForm?.stop()
		recordedAudio?.pause()
		setIsPlaying(false)
	}
	const sendRecording = async () => {
		try {
			const formData = new FormData()
			renderedAudio && formData.append('audio', renderedAudio)
			const { status, data } = await MessageService.addMessageAudio(
				formData,
				userId,
				selectChatUserId
			)
			if (status === 201) {
				socket?.emit('send-msg', {
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

	const formatTime = (time: number) => {
		if (isNaN(time)) return null
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
		return `${minutes.toString().padStart(2, '0')}:${seconds
			.toString()
			.padStart(2, '0')}`
	}
	useEffect(() => {
		if (recordedAudio) {
			const updatePlayBackTime = () =>
				setCurrentPlayBackTime(recordedAudio.currentTime)
			recordedAudio.addEventListener('timeupdate', updatePlayBackTime)
			return () =>
				recordedAudio?.removeEventListener(
					'timeupdate',
					updatePlayBackTime
				)
		}
	}, [recordedAudio])
	useEffect(() => {
		let interval: string | number | NodeJS.Timeout | undefined
		if (isRecording) {
			interval = setInterval(() => {
				setRecordingDuration(prevDuration => {
					setTotalDuration(prevDuration + 1)
					return prevDuration + 1
				})
			}, 1000)
		}
		return () => clearInterval(interval)
	}, [isRecording])
	useEffect(() => {
		const wavesurfer = WaveSurfer.create({
			container: waveFormRef.current as string | HTMLElement,
			waveColor: '#ccc',
			progressColor: '#4a9eff',
			cursorColor: '#435766',
			barWidth: 2,
			height: 30
		})
		setWaveForm(wavesurfer)
		wavesurfer.on('finish', () => setIsPlaying(false))
		return () => wavesurfer.destroy()
	}, [])
	useEffect(() => {
		waveForm && handleStartRecording()
	}, [waveForm])
	return {
		state: {
			isRecording,
			recordingDuration,
			isPlaying,
			recordedAudio,
			totalDuration,
			currentPlayBackTime
		},
		audioFn: {
			handleStartRecording,
			handleStopRecording,
			handlePauseRecording,
			handlePlayRecording,
			sendRecording
		},
		refs: { audioRef, waveFormRef },
		formatTime
	}
}
