import { ChangeEvent, FC, useCallback } from 'react'

type InputType = 'email' | 'text' | 'password'
interface InputProps {
	name?: string
	value: string
	onChange: (value: string) => void
	label?: boolean
	type?: InputType
}
export const InputCustom: FC<InputProps> = ({
	label = false,
	value,
	onChange,
	name,
	type = 'text'
}) => {
	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value),
		[]
	)
	return (
		<div className='flex gap-1 flex-col'>
			{label && (
				<label htmlFor={name} className='text-teal-light text-lg px-1'>
					{name}
				</label>
			)}
			<div>
				<input
					type={type}
					value={value}
					onChange={handleChange}
					className='bg-input-background text-start focus:outline-none text-white h-10 rounded-lg px-5'
				/>
			</div>
		</div>
	)
}
