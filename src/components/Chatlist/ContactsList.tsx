import { useActions } from '@/hooks/useActions'
import { SearchBar } from '@/components/Chatlist/SearchBar'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getLoadingUser, getUsersSelected } from '@/store/user/user.selector'
import { IUser } from '@/store/user/user.types'
import { ChatLIstItem } from '@/components/Chatlist/ChatLIstItem'
import { Loading } from '@/UI/Loading'
import { useFilterInput } from '@/hooks/useFilterInput'

export function ContactsList() {
	const isLoading = useSelector(getLoadingUser)
	const users = useSelector(getUsersSelected)
	const { getAllUsers, changeIsLoading } = useActions()
	const {
		state: { searchUser, filterUser },
		fn: { setSearchUser }
	} = useFilterInput<IUser[][]>(
		changeIsLoading,
		(val: string) =>
			users?.map(values =>
				values.users.filter(user =>
					user.name
						.toLocaleLowerCase()
						.includes(val.toLocaleLowerCase())
				)
			)
	)
	useEffect(() => {
		getAllUsers()
	}, [])
	return (
		<section
			data-testid='contact-list'
			className='flex h-screen animate-scaleIn flex-col border-r-2 border-gray-800 bg-search-input-container-background px-2'
		>
			<SearchBar
				state={searchUser}
				setState={setSearchUser}
				placeholder='Search user...'
			/>
			<div className=' custom-scrollbar h-[calc(100vh-10rem)] overflow-y-scroll'>
				{isLoading ? (
					<Loading size='text-2xl' center bgTransparent />
				) : (
					<>
						{searchUser &&
							!isLoading &&
							!filterUser?.flat().length && (
								<p className='mt-4 flex animate-pulse justify-center text-2xl text-white opacity-70'>
									There is no data...
								</p>
							)}
						{searchUser &&
							filterUser
								?.flat()
								.map(user => (
									<ChatLIstItem<IUser>
										item={user}
										key={String(user.id)}
									/>
								))}
						{!searchUser &&
							!filterUser?.flat().length &&
							users.map(values => (
								<div key={values.key}>
									<div className='py-5 pl-10 text-teal-light'>
										{values.key}
									</div>
									{values.users.map(user => (
										<div
											key={user.id}
											className='flex w-full cursor-pointer justify-center text-center text-white'
										>
											<ChatLIstItem<IUser> item={user} />
										</div>
									))}
								</div>
							))}
					</>
				)}
			</div>
		</section>
	)
}
