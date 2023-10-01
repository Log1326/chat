import {
	MutableRefObject,
	useCallback,
	useEffect,
	useRef,
	useState
} from 'react'
import { IMessage } from '@/store/message/message.types'
import { HOST } from '@/service/const'
import WaveSurfer from 'wavesurfer.js'

export const useAudioPlayer = (message: IMessage) => {
	const [audioMessage, setAudioMessage] = useState<HTMLAudioElement | null>(
		null
	)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentPlayBackTime, setCurrentPlayBackTime] = useState<number>(0)
	const [totalDuration, setTotalDuration] = useState<number>(0)

	const waveForm: MutableRefObject<WaveSurfer | null> = useRef(null)
	const waveFormRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

	const handlePlayRecording = useCallback(async () => {
		if (audioMessage) {
			waveForm.current?.stop()
			waveForm.current?.play()
			await audioMessage.play()
			setIsPlaying(true)
		}
	}, [audioMessage])
	const handlePauseRecording = useCallback(() => {
		waveForm.current?.stop()
		audioMessage?.pause()
		setIsPlaying(false)
	}, [audioMessage])
	useEffect(() => {
		if (!waveForm.current) {
			waveForm.current = WaveSurfer.create({
				container: waveFormRef?.current as any,
				waveColor: '#ccc',
				progressColor: '#4a9eff',
				cursorColor: '#435766',
				barWidth: 2,
				height: 30
			})
			waveForm.current?.on('finish', () => setIsPlaying(false))
			return () => waveForm.current?.destroy()
		}
	}, [])
	useEffect(() => {
		if (audioMessage) {
			const updatePlayBackTime = () =>
				setCurrentPlayBackTime(audioMessage.currentTime)
			audioMessage.addEventListener('timeupdate', updatePlayBackTime)
			return () => {
				audioMessage?.removeEventListener(
					'timeupdate',
					updatePlayBackTime
				)
			}
		}
	}, [audioMessage])

	useEffect(() => {
		const audioURL = `${HOST}/${message.message}`
		const audio = new Audio(audioURL)
		setAudioMessage(audio)
		waveForm.current?.load(audioURL)
		waveForm.current?.on('ready', () => {
			setTotalDuration(Number(waveForm.current?.getDuration()))
		})
	}, [message.message])
	const formatTime = (time: number) => {
		if (isNaN(time)) return '00:00'
		const minutes = Math.floor(time / 60)
		const seconds = Math.floor(time % 60)
		return `${minutes.toString().padStart(2, '0')}:${seconds
			.toString()
			.padStart(2, '0')}`
	}
	return {
		state: { audioMessage, isPlaying, currentPlayBackTime, totalDuration },
		audioFn: { handlePlayRecording, handlePauseRecording },
		refs: { waveForm, waveFormRef },
		formatTime
	}
}
