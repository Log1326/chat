import { render } from '@testing-library/react'
import { ReactElement } from 'react'
import { NextRouter } from 'next/router'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { Provider } from 'react-redux'
import { store, TypeRootState } from '@/store/store'

export const renderWithReduxAndNextRouter = (
	component: ReactElement,
	route: Partial<NextRouter>,
	state: Partial<TypeRootState> = {}
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
			<Provider store={store(state)}>{component}</Provider>
		</RouterContext.Provider>
	)
}
