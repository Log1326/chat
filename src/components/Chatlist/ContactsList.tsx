import { useActions } from '@/hooks/useActions'
import { SearchBar } from '@/components/Chatlist/SearchBar'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getIsLoadingData, getUsersSelected } from '@/store/user/user.selector'
import { IUser } from '@/store/user/user.types'
import { ChatLIstItem } from '@/components/Chatlist/ChatLIstItem'
import { Loading } from '@/UI/Loading'
import { useFilterInput } from '@/hooks/useFilterInput'

export function ContactsList() {
	const isLoadingData = useSelector(getIsLoadingData)
	const users = useSelector(getUsersSelected)
	const { getAllUsers, changeIsLoadingData } = useActions()
	const {
		state: { searchUser, filterUser },
		fn: { setSearchUser }
	} = useFilterInput<IUser[][]>(
		changeIsLoadingData,
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
	const terms: boolean = !!(searchUser && filterUser?.flat())
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
				{isLoadingData ? (
					<Loading size='text-2xl' center bgTransparent />
				) : (
					<>
						{searchUser &&
							!isLoadingData &&
							!filterUser?.flat().length && (
								<p className='mt-4 flex animate-pulse justify-center text-2xl text-white opacity-70'>
									There is no data...
								</p>
							)}
						{terms
							? filterUser
									?.flat()
									.map(user => (
										<ChatLIstItem<IUser>
											item={user}
											key={String(user.id)}
										/>
									))
							: users.map(values => (
									<div key={values.key}>
										<div className='py-5 pl-10 text-teal-light'>
											{values.key}
										</div>
										{values.users.map(user => (
											<div
												key={user.id}
												className='flex w-full cursor-pointer justify-center text-center text-white'
											>
												<ChatLIstItem<IUser>
													item={user}
												/>
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
