import { useActions } from '@/hooks/useActions'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getSelectUser } from '@/store/user/user.selector'
import { IMessage } from '@/store/message/message.types'
import { getAllMessagesState } from '@/store/message/message.selectors'
import { calculateTime } from '@/utils/CalculateTime'
import { SearchBar } from '@/components/Chatlist/SearchBar'
import { IoClose } from 'react-icons/io5'
import { useHandleClickOutside } from '@/hooks/useHandleClickOutSide'
import { useToggle } from '@/hooks/useToggle'

export function SearchMessages() {
	const [init, setInit] = useToggle(false)
	const { changeIsSearchMessage } = useActions()
	const selectedUser = useSelector(getSelectUser)
	const messages = useSelector(getAllMessagesState)
	const [searchTerm, setSearchTerm] = useState('')
	const [messageFilter, setMessageFilter] = useState<IMessage[]>([])
	useEffect(() => {
		if (!messages) return
		if (searchTerm)
			setMessageFilter(
				messages?.filter(
					msg =>
						msg.type === 'text' && msg.message.includes(searchTerm)
				)
			)
		else setMessageFilter([])
	}, [messages, searchTerm])
	const handleClose = () => changeIsSearchMessage(false)
	const closeRef = useHandleClickOutside({
		callback: () => {
			setInit(true)
			if (init) handleClose()
		},
		type: 'click'
	})
	return (
		<div
			ref={closeRef}
			className='h-full bg-background-default-hover w-full relative overflow-auto custom-scrollbar grow'
		>
			<span className='p-2 absolute px-5'>
				<IoClose
					className='h-8 w-8 text-gray-400 hover:text-gray-800 cursor-pointer'
					onClick={handleClose}
				/>
			</span>
			<SearchBar
				placeholder={'Find message ...'}
				state={searchTerm}
				setState={setSearchTerm}
			/>
			<div className='h-full w-full px-10'>
				{!searchTerm && (
					<div className='flex justify-center items-center gap-2 text-lg text-gray-300 animate-fade mt-2'>
						Search for messages with{' '}
						<span className='underline text-xl decoration-1'>
							{selectedUser?.name}
						</span>
					</div>
				)}
				{searchTerm && !messageFilter.length && (
					<span className='flex justify-center items-center text-xl animate-fade text-gray-950'>
						Messages not found
					</span>
				)}
				{searchTerm &&
					messageFilter &&
					messageFilter.map(message => (
						<div className='flex flex-col' key={message.id}>
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
	)
}
