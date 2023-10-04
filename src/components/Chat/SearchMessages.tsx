import { useActions } from '@/hooks/useActions'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { getSelectUser } from '@/store/user/user.selector'
import {
	getAllMessagesState,
	getIsLoadingMessages
} from '@/store/message/message.selectors'
import { calculateTime } from '@/utils/CalculateTime'
import { SearchBar } from '@/components/Chatlist/SearchBar'
import { IoClose } from 'react-icons/io5'
import { Icon } from '@/UI/Icon'
import { useFilterInput } from '@/hooks/useFilterInput'
import { IMessage } from '@/store/message/message.types'
import { Loading } from '@/UI/Loading'
import Image from 'next/image'

export const SearchMessages = memo(function SearchMessages() {
	const { changeIsSearchMessage } = useActions()
	const selectedUser = useSelector(getSelectUser)
	const messages = useSelector(getAllMessagesState)
	const isLoadingMessages = useSelector(getIsLoadingMessages)
	const { changeIsLoadingMessage } = useActions()
	const {
		state: { searchUser: searchTerm, filterUser: messageFilter },
		fn: { setSearchUser: setSearchTerm }
	} = useFilterInput<IMessage[]>(
		changeIsLoadingMessage,
		val =>
			messages?.filter(
				msg =>
					msg.type === 'text' &&
					msg.message.toLowerCase().includes(val.toLowerCase())
			)
	)
	const closeSearchMessagesDrawer = useCallback(
		() => changeIsSearchMessage(false),
		[changeIsSearchMessage]
	)
	const terms: boolean = !!(searchTerm && messageFilter)

	return (
		<section className='custom-scrollbar relative z-40 h-full overflow-auto bg-background-default-hover'>
			<span className='absolute p-2 px-5'>
				<Icon
					Svg={IoClose}
					className='h-8 w-8 cursor-pointer text-gray-400 hover:text-gray-800'
					onClick={closeSearchMessagesDrawer}
				/>
			</span>
			<div className='mt-4 px-1 py-4'>
				<SearchBar
					autoFocus
					placeholder='Find message ...'
					state={searchTerm}
					setState={setSearchTerm}
				/>
				<div className='mx-1 px-4'>
					{isLoadingMessages ? (
						<Loading size='text-2xl' center bgTransparent />
					) : (
						<>
							{!searchTerm && (
								<div className=' mt-2 grid animate-fade place-items-center gap-2  text-gray-300'>
									<span className='w-full text-center text-lg screen-3xl:text-[14px]'>
										Search for messages with{' '}
									</span>
									<span className='flex items-center gap-4 text-xl italic'>
										<Image
											src={selectedUser?.image ?? ''}
											alt={selectedUser?.name ?? ''}
											width={40}
											height={40}
											className='rounded-full'
										/>
										{selectedUser?.name}
									</span>
								</div>
							)}
							{searchTerm &&
								!isLoadingMessages &&
								!messageFilter?.length && (
									<span className='mt-4 grid animate-fade place-items-center text-xl text-white screen-xl:text-[14px] screen-2xl:text-[18px]'>
										Messages not found...
									</span>
								)}
							{terms &&
								messageFilter?.map(message => (
									<div
										className='flex animate-appearance flex-col break-all'
										key={message.id}
									>
										<span className='text-xs text-gray-400 '>
											{calculateTime(
												String(message.createdAt)
											)}
										</span>
										<span className='text-xl text-teal-600'>
											{message.message}
										</span>
									</div>
								))}
						</>
					)}
				</div>
			</div>
		</section>
	)
})
