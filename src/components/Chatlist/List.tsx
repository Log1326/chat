import { SearchBar } from '@/components/Chatlist/SearchBar'
import { useEffect } from 'react'
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
import { useFilterInput } from '@/hooks/useFilterInput'

export function List() {
	const usersContacts = useSelector(getStateMessageContacts)
	const user = useSelector(getUser)
	const isLoadingContacts = useSelector(getStateMessageLoading)
	const { getMessageContacts, changeIsLoadingUserContact } = useActions()
	const {
		state: { searchUser, filterUser },
		fn: { setSearchUser }
	} = useFilterInput<IGetInitialUsersChat<IUser>[]>(
		changeIsLoadingUserContact,
		(val: string) =>
			usersContacts?.filter(user =>
				user.name.toLowerCase().includes(val.toLowerCase())
			)
	)
	useEffect(() => {
		user?.id && getMessageContacts(user.id)
	}, [user?.id])

	return (
		<section
			data-testid='list'
			className='custom-scrollbar h-[calc(100vh-5rem)] w-full overflow-y-scroll px-2'
		>
			<div className='mb-4 w-full rounded-2xl bg-search-input-container-background p-3 text-left'>
				<SearchBar
					state={searchUser}
					setState={setSearchUser}
					placeholder='Find user...'
					viewFilter={true}
				/>
			</div>
			{isLoadingContacts ? (
				<Loading size='text-2xl' center />
			) : (
				<div className='inline-block w-full overflow-hidden'>
					{searchUser &&
						!isLoadingContacts &&
						!filterUser?.length && (
							<p className='mt-4 flex animate-pulse justify-center text-2xl text-white opacity-70'>
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
					{!searchUser.length &&
						!filterUser?.length &&
						usersContacts?.map(userContact => (
							<ChatLIstItem<IGetInitialUsersChat<IUser>>
								key={String(userContact.id)}
								item={userContact}
							/>
						))}
				</div>
			)}
		</section>
	)
}
