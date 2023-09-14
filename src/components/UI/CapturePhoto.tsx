import {
	Dispatch,
	MutableRefObject,
	SetStateAction,
	useEffect,
	useRef
} from 'react'
import { IoClose } from 'react-icons/io5'
import { useActions } from '@/hooks/useActions'

interface CapturePhotoProps {
	hide: Dispatch<SetStateAction<boolean>>
}
export function CapturePhoto({ hide }: CapturePhotoProps) {
	const { setImage } = useActions()
	const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null)
	useEffect(() => {
		let stream: MediaStream
		const startCamera = async () => {
			stream = await navigator.mediaDevices.getUserMedia({
				video: true,
				audio: false
			})
			if (videoRef.current) {
				videoRef.current.srcObject = stream
			}
		}
		startCamera()
		return () => stream?.getTracks().forEach(track => track.stop())
	}, [])

	const capturePhoto = () => {
		const canvas: HTMLCanvasElement = document.createElement('canvas')
		if (videoRef.current) {
			canvas.getContext('2d')?.drawImage(videoRef.current, 0, 0, 300, 150)
		}
		setImage(canvas.toDataURL('image/jpeg'))
		hide(false)
	}
	return (
		<div className=' absolute rounded-xl border-2 bg-gray-900 h-fit w-2/5 top-1/4 left-1/3'>
			<div className='flex flex-col gap-4 w-full'>
				<div
					onClick={() => hide(false)}
					className='bg-gray-800 cursor-pointer p-2 m-2 hover:bg-gray-700 rounded-lg absolute top-0 right-0'
				>
					<IoClose className='h-10 w-10' />
				</div>
				<div className='flex justify-center w-full h-full mt-20 rounded-2xl '>
					<video id='video' width='400' autoPlay ref={videoRef}></video>
				</div>
				<div className='mx-auto'>
					<button
						className='h-16 w-16 bg-white text-black  rounded-full cursor-pointer border-4 border-teal-500 p-2 my-4 hover:opacity-70'
						onClick={capturePhoto}
					>
						save
					</button>
				</div>
			</div>
		</div>
	)
}
