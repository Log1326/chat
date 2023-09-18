import { screen } from '@testing-library/react'
import { IncomingVideoCall } from '@/UI/IncomingVideoCall'
import { renderWithRedux } from '../../helper/renderWithRedux'

describe('IncomingVideoCall.test', () => {
	test('first', () => {
		renderWithRedux(<IncomingVideoCall />, {
			callStore: {
				videoCall: {
					isVideoCall: true,
					isLoadingVideoCall: false,
					incomingVideoCall: {
						type: 'incoming',
						callType: 'video',
						roomId: 123,
						user: { id: 1, name: 'antonio', image: 'http://image' }
					}
				},
				voiceCall: null
			}
		})
		const container = screen.getByTestId('popup')
		expect(container).toBeInTheDocument()
	})
	test('without data', () => {
		renderWithRedux(<IncomingVideoCall />, {
			callStore: {
				videoCall: null,
				voiceCall: null
			}
		})
		const container = screen.queryByTestId('popup')
		expect(container).not.toBeInTheDocument()
	})
})
