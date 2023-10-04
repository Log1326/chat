import {
	ChangeEvent,
	FC,
	InputHTMLAttributes,
	KeyboardEvent,
	memo
} from 'react'
import { twMerge } from 'tailwind-merge'

type InputType = 'email' | 'text' | 'password'
type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>
interface InputProps extends HTMLInputProps {
	value?: string
	onChange?: (value: string) => void
	label?: string
	type?: InputType
	placeholder?: string
	classnames?: string
	autoFocus?: boolean
	callback?: () => void
}
export const InputCustom: FC<InputProps> = memo(
	(
		{
			label = '',
			value,
			onChange,
			type = 'text',
			placeholder = '',
			classnames = '',
			autoFocus = false,
			callback
		},
		...others
	) => {
		const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
			onChange?.(e.target.value)
		const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) =>
			e.code === 'Enter' && callback?.()

		return (
			<div className='flex flex-col gap-1'>
				{label && (
					<label className='px-1 text-lg text-teal-light'>
						{label}
					</label>
				)}
				<div>
					<input
						{...others}
						autoFocus={autoFocus}
						data-testid='input-value'
						type={type}
						value={value}
						onChange={handleChange}
						onKeyDown={handleKeyDown}
						placeholder={placeholder}
						className={twMerge(
							classnames,
							'h-10 rounded-lg bg-input-background px-5 text-start text-white focus:outline-none'
						)}
					/>
				</div>
			</div>
		)
	}
)
