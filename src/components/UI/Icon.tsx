import React, { memo } from 'react'
import { IconBaseProps, IconType } from 'react-icons/lib/cjs/iconBase'

interface IconProps extends IconBaseProps {
	Svg: IconType
}

export const Icon = memo((props: IconProps) => {
	const { Svg, ...otherProps } = props
	return <Svg {...otherProps} />
})
