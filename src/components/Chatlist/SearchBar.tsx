import { BiSearchAlt2 } from 'react-icons/bi'
import { BsFilter } from 'react-icons/bs'
import { ChangeEvent, Dispatch, SetStateAction, useCallback } from 'react'

interface SearchBarProps {
	viewFilter?: boolean
	state?: string
	setState?: Dispatch<SetStateAction<string>>
	placeholder?: string
}
export function SearchBar({
	viewFilter = false,
	state,
	setState,
	placeholder = 'Search...'
}: SearchBarProps) {
	const handleChangeState = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			if (setState) setState(event.target.value)
		},
		
		[setState]
	)

	return (
		<article
			className={`flex items-center justify-center gap-2  p-1 ${
				!viewFilter && 'mt-4'
			}`}
		>
			<div className='flex items-center justify-center bg-input-background text-white rounded-lg p-2'>
				<BiSearchAlt2 className='w-6 h-6 cursor-pointer' />
				<input
					type='text'
					placeholder={placeholder}
					value={state ?? ''}
					onChange={handleChangeState}
					className='outline-none w-full px-3 rounded-sm bg-input-background'
				/>
			</div>
			{viewFilter && (
				<BsFilter className='text-white w-8 h-8 cursor-pointer  hover:text-gray-400' />
			)}
		</article>
	)
}
