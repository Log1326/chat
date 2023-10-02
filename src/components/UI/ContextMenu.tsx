import { TypeContextCoordinates } from '@/types/contextTypes'
import React, { Dispatch, MouseEvent, SetStateAction, useCallback } from 'react'
import { useHandleClickOutside } from '@/hooks/useHandleClickOutSide'
import { twMerge } from 'tailwind-merge'

interface IMenu {
	name: string
	callback: () => void
}
type TypePosition = 'fixed' | 'absolute' | 'relative' | 'sticky'
interface ContextMenuProps {
	item: {
		options: IMenu[]
		coordinates?: TypeContextCoordinates
		contextMenu?: boolean
		setContextMenu: Dispatch<SetStateAction<boolean>>
	}
	idElement: string
	position?: TypePosition
	classname?: string
}
export function ContextMenu({
	item,
	idElement,
	position = 'relative',
	classname = ''
}: ContextMenuProps) {
	const handleCloseContextMenu = useCallback(
		() => item.setContextMenu?.(false),
		[item]
	)

	const contextMenuRef = useHandleClickOutside({
		callback: handleCloseContextMenu,
		type: 'click',
		idElement
	})
	const handleClick = (e: MouseEvent<HTMLElement>, callback: () => void) => {
		e.stopPropagation()
		handleCloseContextMenu()
		callback()
	}
	return (
		<div
			ref={contextMenuRef}
			className={twMerge(
				classname,
				position,
				'rounded-lg bg-background-default-hover p-2',
				item.contextMenu &&
					'z-50 rounded-lg bg-dropdown-background py-4 text-center shadow-xl'
			)}
			style={
				item.coordinates && {
					top: item.coordinates.y,
					left: item.coordinates.x
				}
			}
		>
			<ul>
				{item.options.map(({ name, callback }) => (
					<li
						className='grid w-full animate-fade cursor-pointer place-items-center rounded-lg px-10 py-2 duration-75 hover:bg-search-input-container-background hover:opacity-70'
						key={name}
						onClick={e => handleClick(e, callback)}
					>
						<span className='w-28  text-white'>{name}</span>
					</li>
				))}
			</ul>
		</div>
	)
}
