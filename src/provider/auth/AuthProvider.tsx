import dynamic from 'next/dynamic'
import { FC, PropsWithChildren } from 'react'
import { TypeComponentAuthFields } from '@/provider/auth/auth.types'

const DynamicCheckAuth = dynamic(() => import('./CheckAuth'), {
	ssr: false
})
export const AuthProvider: FC<PropsWithChildren<TypeComponentAuthFields>> = ({
	children,
	Component: { isOnlyUser }
}) => {
	return isOnlyUser ? (
		<DynamicCheckAuth Component={{ isOnlyUser }}>
			{children}
		</DynamicCheckAuth>
	) : (
		<>{children}</>
	)
}
