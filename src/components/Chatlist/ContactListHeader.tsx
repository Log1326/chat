import { Icon } from '@/UI/Icon'
import { BiArrowBack } from 'react-icons/bi'
import { useCallback } from 'react'
import { useActions } from '@/hooks/useActions'

export const ContactListHeader = () => {
	const { toggleChatPage } = useActions()
	const handleCloseContactList = useCallback(
		() => toggleChatPage(true),
		[toggleChatPage]
	)
	return (
		<header className='flex h-20 items-center justify-start'>
			<button
				data-testid='button-contact-list'
				onClick={handleCloseContactList}
				className='p-4 text-white hover:text-zinc-950'
			>
				<Icon
					Svg={BiArrowBack}
					className='h-8 w-8'
					title='arrow back'
				/>
			</button>
			<p className='cursor-default text-2xl text-white'> New Chat</p>
		</header>
	)
}
