import { Avatar } from '@/UI/Avatar'
import { useSelector } from 'react-redux'
import { getSelectUser } from '@/store/user/user.selector'
import { MdCall } from 'react-icons/md'
import { IoVideocam } from 'react-icons/io5'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { useActions } from '@/hooks/useActions'
import { getStateMessageOnlineUsers } from '@/store/message/message.selectors'
import { useToggle } from '@/hooks/useToggle'
import { DropDown } from '@/UI/DropDown'

export function ChatHeader() {
	const { setSelectUser, changeIsSearchMessage } = useActions()
	const [openMenu, _, openMenuFn] = useToggle()
	const selectUser = useSelector(getSelectUser)
	const onlineUsers = useSelector(getStateMessageOnlineUsers)
	const isOnline = onlineUsers?.some(user => user === selectUser?.id)
	return (
		<article className='bg-input-background h-20 p-2 flex justify-between items-center'>
			<div className='flex items-center justify-center gap-4 pl-4'>
				{selectUser ? (
					<Avatar
						type='sm'
						value={selectUser?.image}
						className={'hover:opacity-70'}
					/>
				) : (
					<Avatar type='lg' value={'/default_avatar.png'} />
				)}
				<article className='text-white cursor-default'>
					<p>{selectUser?.name}</p>
					<p>{isOnline ? 'online' : 'offline'}</p>
				</article>
			</div>
			<article className='inline-flex gap-4 pr-4 text-white cursor-pointer'>
				<BiSearchAlt2
					className='h-6 w-6 hover:text-gray-900'
					onClick={() => changeIsSearchMessage(true)}
				/>
				<MdCall className='h-6 w-6 hover:text-gray-900' title='audio' />
				<IoVideocam className='h-6 w-6 hover:text-gray-900' title='video' />
				<DropDown
					title={
						<BsThreeDotsVertical
							className='h-6 w-6 hover:text-gray-900'
							title='options'
							onClick={openMenuFn}
						/>
					}
					toggle={openMenu}
				>
					<p onClick={() => setSelectUser(undefined)}>close</p>
				</DropDown>
			</article>
		</article>
	)
}
