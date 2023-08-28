import { TypeContextCoordinates } from '@/types/contextTypes'
import React, { Dispatch, MouseEvent, SetStateAction } from 'react'
import { CONTEXT_OPENED } from '@/constants/constants'
import { useHandleClickOutside } from '@/hooks/useHandleClickOutSide'

interface ContextMenuProps {
	options: any[]
	coordinates: TypeContextCoordinates
	contextMenu: boolean
	setContextMenu: Dispatch<SetStateAction<boolean>>
}
export function ContextMenu({
	setContextMenu,
	coordinates,
	options
}: ContextMenuProps) {
	const contextMenuRef = useHandleClickOutside(
		() => setContextMenu(false),
		'click',
		CONTEXT_OPENED
	)
	const handleClick = (e: MouseEvent<HTMLElement>, callback: () => void) => {
		e.stopPropagation()
		setContextMenu(false)
		callback()
	}
	return (
		<div
			ref={contextMenuRef}
			className='bg-dropdown-background rounded-lg fixed py-2 z-30 shadow-xl'
			style={{
				top: coordinates.y,
				left: coordinates.x
			}}
		>
			<ul>
				{options.map(({ name, callback }) => (
					<li
						className='px-5 py-2 cursor-pointer hover:opacity-70 hover:bg-search-input-container-background  duration-75'
						key={name}
						onClick={e => handleClick(e, callback)}
					>
						<span className='text-white'>{name}</span>
					</li>
				))}
			</ul>
		</div>
	)
}
