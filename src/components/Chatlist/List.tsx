import { SearchBar } from '@/components/Chatlist/SearchBar'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getUser } from '@/store/user/user.selector'
import { useActions } from '@/hooks/useActions'
import {
	getStateMessageContacts,
	getStateMessageLoading
} from '@/store/message/message.selectors'
import { ChatLIstItem } from '@/components/Chatlist/ChatLIstItem'
import { IGetInitialUsersChat } from '@/store/message/message.types'

export function List() {
	const user = useSelector(getUser)
	const usersContacts = useSelector(getStateMessageContacts)
	const loadingContacts = useSelector(getStateMessageLoading)
	const { getMessageContacts } = useActions()
	const [searchUser, setSearchUser] = useState<string>('')
	const [filterUser, setFilterUser] = useState<IGetInitialUsersChat[]>()

	useEffect(() => {
		user?.id && getMessageContacts(user.id)
	}, [user])
	useEffect(() => {
		if (searchUser)
			setFilterUser(
				usersContacts?.filter(user =>
					user.name.toLowerCase().includes(searchUser.toLowerCase())
				)
			)
	}, [searchUser])
	return (
		<article className='px-2 overflow-y-scroll custom-scrollbar'>
			<div className='bg-search-input-container-background p-3 w-full text-left rounded-2xl'>
				<SearchBar
					state={searchUser}
					setState={setSearchUser}
					placeholder='Find user...'
					viewFilter={true}
				/>
			</div>

			{loadingContacts ? (
				<div className='flex justify-center text-white text-3xl animate-fadeInfinite'>
					Loading ...
				</div>
			) : (
				<>
					{searchUser ? (
						<>
							{filterUser?.map(user => (
								<ChatLIstItem key={String(user.id)} item={user} />
							))}
						</>
					) : (
						<>
							{usersContacts?.map(userContact => (
								<ChatLIstItem key={String(userContact.id)} item={userContact} />
							))}
						</>
					)}
				</>
			)}
		</article>
	)
}
