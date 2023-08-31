import { TypeContextCoordinates } from '@/types/contextTypes'
import React, { Dispatch, MouseEvent, SetStateAction } from 'react'
import { useHandleClickOutside } from '@/hooks/useHandleClickOutSide'

interface IMenu {
	name: string
	callback: () => void
}
interface ContextMenuProps {
	item: {
		options: IMenu[]
		coordinates?: TypeContextCoordinates
		contextMenu?: boolean
		setContextMenu: Dispatch<SetStateAction<boolean>>
	}
	idElement: string
}
export function ContextMenu({
	item: { options, setContextMenu, coordinates, contextMenu },
	idElement
}: ContextMenuProps) {
	const contextMenuRef = useHandleClickOutside(
		() => setContextMenu(false),
		'click',
		idElement
	)
	const handleClick = (e: MouseEvent<HTMLElement>, callback: () => void) => {
		e.stopPropagation()
		setContextMenu(false)
		callback()
	}
	return (
		<div
			ref={contextMenuRef}
			className={
				contextMenu
					? 'bg-dropdown-background rounded-lg fixed py-2 z-30 shadow-xl'
					: ''
			}
			style={
				coordinates && {
					top: coordinates.y,
					left: coordinates.x
				}
			}
		>
			<ul>
				{options.map(({ name, callback }) => (
					<li
						className='px-5 py-2 cursor-pointer rounded-lg hover:opacity-70 hover:bg-search-input-container-background  duration-75'
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
