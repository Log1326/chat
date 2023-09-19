import { Provider } from 'react-redux'
import { ReactElement } from 'react'
import { store, TypeRootState } from '@/store/store'
import { render } from '@testing-library/react'

export const renderWithRedux = (
	component: ReactElement,
	state: Partial<TypeRootState> = {}
) => {
	return render(<Provider store={store(state)}>{component}</Provider>)
}
