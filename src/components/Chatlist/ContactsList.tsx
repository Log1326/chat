import { BiArrowBack } from 'react-icons/bi'
import { useActions } from '@/hooks/useActions'
import { SearchBar } from '@/components/Chatlist/SearchBar'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUsersSelected } from '@/store/user/user.selector'
import { ChatLIstItem } from '@/components/Chatlist/ChatLIstItem'
import { IUser } from '@/store/user/user.types'

export function ContactsList() {
	const users = useSelector(getUsersSelected)
	const [searchTerm, setSearchTerm] = useState('')
	const { getAllUsers, toggleChatPage } = useActions()
	const handleCloseContactList = () => toggleChatPage(true)
	useEffect(() => {
		getAllUsers()
	}, [])
	return (
		<section data-testid='contact-list' className='flex flex-col h-screen'>
			<article className='flex justify-start items-center h-[5.43rem]'>
				<button
					data-testid='button-contact-list'
					onClick={handleCloseContactList}
					className='text-white p-4 hover:text-zinc-950'
				>
					<BiArrowBack className='h-8 w-8' title='arrow back' />
				</button>
				<p className='text-white text-2xl cursor-default'> New Chat</p>
			</article>
			<article className='bg-search-input-container-background animate-scaleIn'>
				<SearchBar
					state={searchTerm}
					setState={setSearchTerm}
					placeholder='Search user...'
				/>
				<div className=' h-[calc(100vh-10rem)] overflow-y-scroll custom-scrollbar'>
					{users.map(values => (
						<div key={values.key}>
							<div className='text-teal-light pl-10 py-5'>
								{values.key}
							</div>
							{values.users.map(user => (
								<div
									key={user.id}
									className='text-white cursor-pointer text-center w-full flex justify-center'
								>
									<ChatLIstItem<IUser> item={user} />
								</div>
							))}
						</div>
					))}
				</div>
			</article>
		</section>
	)
}
