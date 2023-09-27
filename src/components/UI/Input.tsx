import { ChangeEvent, FC, InputHTMLAttributes, KeyboardEvent } from 'react'

type InputType = 'email' | 'text' | 'password'
type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange'
>
interface InputProps extends HTMLInputProps {
	name?: string
	value?: string
	onChange?: (value: string) => void
	label?: string
	type?: InputType
	placeholder?: string
	classname?: string
	autoFocus?: boolean
	callback?: () => void
}
export const InputCustom: FC<InputProps> = (
	{
		label = '',
		value,
		onChange,
		type = 'text',
		placeholder = '',
		classname = '',
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
		<div className='flex gap-1 flex-col' data-testid='inputCustom'>
			{label && (
				<label className='text-teal-light text-lg px-1'>{label}</label>
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
					className={`${classname} bg-input-background text-start focus:outline-none text-white h-10 rounded-lg px-5`}
				/>
			</div>
		</div>
	)
}
