import { BiSearchAlt2 } from 'react-icons/bi'
import { BsFilter } from 'react-icons/bs'
import { ChangeEvent, Dispatch, memo, SetStateAction } from 'react'
import { Icon } from '@/UI/Icon'

interface SearchBarProps {
	viewFilter?: boolean
	state?: string
	setState?: Dispatch<SetStateAction<string>>
	placeholder?: string
	autoFocus?: boolean
}
export const SearchBar = memo(function ({
	state,
	setState,
	placeholder = 'Search...',
	viewFilter = false,
	autoFocus = false
}: SearchBarProps) {
	const handleChangeState = (event: ChangeEvent<HTMLInputElement>) =>
		setState?.(event.target.value)
	return (
		<div
			className={`flex items-center justify-center gap-2  p-1 ${
				!viewFilter && 'mt-4'
			}`}
		>
			<div className='flex items-center justify-center bg-input-background text-white rounded-lg p-2'>
				<Icon Svg={BiSearchAlt2} className={'w-6 h-6 cursor-pointer'} />
				<input
					autoFocus={autoFocus}
					type='text'
					placeholder={placeholder}
					value={state ?? ''}
					onChange={handleChangeState}
					className='outline-none w-full px-3 rounded-sm bg-input-background'
				/>
			</div>
			{viewFilter && (
				<Icon
					Svg={BsFilter}
					className='text-white w-8 h-8 cursor-pointer hover:text-gray-400'
				/>
			)}
		</div>
	)
})
