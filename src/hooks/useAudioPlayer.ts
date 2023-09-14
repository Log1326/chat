import { MutableRefObject, useEffect, useRef, useState } from 'react'
import WaveSurfer from 'wavesurfer.js'
import { IMessage } from '@/store/message/message.types'
import { HOST } from '@/service/const'

export const useAudioPlayer = (message: IMessage) => {
	const [audioMessage, setAudioMessage] = useState<HTMLAudioElement | null>(
		null
	)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentPlayBackTime, setCurrentPlayBackTime] = useState<number>(0)
	const [totalDuration, setTotalDuration] = useState<number>(0)

	const waveForm: MutableRefObject<WaveSurfer | null> = useRef(null)
	const waveFormRef: MutableRefObject<HTMLDivElement | null> = useRef(null)

	const handlePlayRecording = async () => {
		if (audioMessage) {
			waveForm.current?.stop()
			waveForm.current?.play()
			await audioMessage.play()
			setIsPlaying(true)
		}
	}
	const handlePauseRecording = () => {
		waveForm.current?.stop()
		audioMessage?.pause()
		setIsPlaying(false)
	}
	useEffect(() => {
		if (waveForm.current === null) {
			waveForm.current = WaveSurfer.create({
				container: waveFormRef.current as string | HTMLElement,
				waveColor: '#ccc',
				progressColor: '#4a9eff',
				cursorColor: '#435766',
				barWidth: 2,
				height: 30,
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
				audioMessage?.removeEventListener('timeupdate', updatePlayBackTime)
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
	return {
		state: { audioMessage, isPlaying, currentPlayBackTime, totalDuration },
		audioFn: { handlePlayRecording, handlePauseRecording },
		refs: { waveForm, waveFormRef }
	}
}
