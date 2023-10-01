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
import { IUser } from '@/store/user/user.types'
import { Loading } from '@/UI/Loading'

export function List() {
	const [searchUser, setSearchUser] = useState<string>('')
	const [filterUser, setFilterUser] =
		useState<IGetInitialUsersChat<IUser>[]>()
	const user = useSelector(getUser)
	const usersContacts = useSelector(getStateMessageContacts)
	const loadingContacts = useSelector(getStateMessageLoading)
	const { getMessageContacts } = useActions()
	useEffect(() => {
		user?.id && getMessageContacts(user.id)
	}, [user.id])
	useEffect(() => {
		if (searchUser)
			setFilterUser(
				usersContacts?.filter(user =>
					user.name.toLowerCase().includes(searchUser.toLowerCase())
				)
			)
	}, [searchUser])
	return (
		<article
			data-testid='list'
			className='px-2 h-[calc(100vh-5rem)] overflow-y-scroll custom-scrollbar'
		>
			<div className='bg-search-input-container-background p-3 w-full text-left rounded-2xl'>
				<SearchBar
					state={searchUser}
					setState={setSearchUser}
					placeholder='Find user...'
					viewFilter={true}
				/>
			</div>
			{loadingContacts ? (
				<Loading size='text-2xl' center />
			) : (
				<div className='inline-block w-full overflow-hidden'>
					{searchUser && !filterUser?.length && (
						<p className='mt-4 text-2xl text-white flex justify-center animate-pulse opacity-70'>
							There is no data...
						</p>
					)}
					{searchUser &&
						filterUser?.map(user => (
							<ChatLIstItem<IGetInitialUsersChat<IUser>>
								key={String(user.id)}
								item={user}
							/>
						))}
					{!searchUser &&
						usersContacts?.map(userContact => (
							<ChatLIstItem<IGetInitialUsersChat<IUser>>
								key={String(userContact.id)}
								item={userContact}
							/>
						))}
				</div>
			)}
		</article>
	)
}
