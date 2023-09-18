import { ChangeEvent, FC } from 'react'

type InputType = 'email' | 'text' | 'password'
interface InputProps {
	name?: string
	value?: string
	onChange?: (value: string) => void
	label?: boolean
	type?: InputType
	placeholder?: string
}
export const InputCustom: FC<InputProps> = ({
	label = false,
	value,
	onChange,
	name,
	type = 'text',
	placeholder
}) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
		onChange?.(e.target.value)
	return (
		<div className='flex gap-1 flex-col' data-testid='inputCustom'>
			{label && (
				<label htmlFor={name} className='text-teal-light text-lg px-1'>
					{name}
				</label>
			)}
			<div>
				<input
					data-testid='input-value'
					id={name}
					type={type}
					value={value}
					onChange={handleChange}
					placeholder={placeholder}
					className='bg-input-background text-start focus:outline-none text-white h-10 rounded-lg px-5'
				/>
			</div>
		</div>
	)
}
