import { useActions } from '@/hooks/useActions'
import { memo, useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getSelectUser } from '@/store/user/user.selector'
import { IMessage } from '@/store/message/message.types'
import { getAllMessagesState } from '@/store/message/message.selectors'
import { calculateTime } from '@/utils/CalculateTime'
import { SearchBar } from '@/components/Chatlist/SearchBar'
import { IoClose } from 'react-icons/io5'
import { Icon } from '@/UI/Icon'

export const SearchMessages = memo(function SearchMessages() {
	const { changeIsSearchMessage } = useActions()
	const selectedUser = useSelector(getSelectUser)
	const messages = useSelector(getAllMessagesState)
	const [searchTerm, setSearchTerm] = useState('')
	const [messageFilter, setMessageFilter] = useState<IMessage[]>([])
	useEffect(() => {
		if (messages && searchTerm)
			setMessageFilter(
				messages?.filter(
					msg =>
						msg.type === 'text' && msg.message.includes(searchTerm)
				)
			)
		else setMessageFilter([])
	}, [searchTerm])
	const closeSearchMessagesDrawer = useCallback(
		() => changeIsSearchMessage(false),
		[changeIsSearchMessage]
	)
	return (
		<div className='bg-background-default-hover z-40 h-full w-auto relative overflow-auto custom-scrollbar'>
			<span className='p-2 px-5 absolute'>
				<Icon
					Svg={IoClose}
					className='h-8 w-8 text-gray-400 hover:text-gray-800 cursor-pointer'
					onClick={closeSearchMessagesDrawer}
				/>
			</span>
			<div className='py-4 px-1 mt-4'>
				<SearchBar
					autoFocus
					placeholder='Find message ...'
					state={searchTerm}
					setState={setSearchTerm}
				/>
				<div className='px-8 mx-1'>
					{!searchTerm && (
						<div className='grid place-items-center gap-2 animate-fade text-lg text-gray-300 mt-2'>
							Search for messages with{' '}
							<span className='underline text-xl decoration-1'>
								{selectedUser?.name}
							</span>
						</div>
					)}
					{searchTerm && !messageFilter.length && (
						<span className='grid place-items-center text-xl animate-fade text-gray-950'>
							Messages not found
						</span>
					)}
					{searchTerm &&
						messageFilter &&
						messageFilter.map(message => (
							<div
								className='flex flex-col break-all animate-appearance'
								key={message.id}
							>
								<span className='text-xs text-gray-400 '>
									{calculateTime(String(message.createdAt))}
								</span>
								<span className='text-teal-600 text-xl'>
									{message.message}
								</span>
							</div>
						))}
				</div>
			</div>
		</div>
	)
})
