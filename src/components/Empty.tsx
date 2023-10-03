import Image from 'next/image'

export function Empty() {
	return (
		<div
			data-testid='empty'
			className='screen-xl:hidden grid h-full place-content-center'
		>
			<Image
				src={'/whatsapp.gif'}
				alt={'whats_up'}
				width={300}
				height={300}
			/>
		</div>
	)
}
