import { ReactElement } from 'react'
import { render } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { NextRouter } from 'next/router'

export const renderWithNextRouter = (
	component: ReactElement,
	route: NextRouter
) => {
	const routers = (router: Partial<NextRouter>) => {
		return {
			basePath: '',
			pathname: '/',
			route: '/',
			query: {},
			asPath: '/',
			back: jest.fn(),
			prefetch: jest.fn(),
			push: jest.fn(),
			reload: jest.fn(),
			replace: jest.fn(),
			...router
		}
	}
	return render(
		<RouterContext.Provider value={routers(route) as NextRouter}>
			{component}
		</RouterContext.Provider>
	)
}
