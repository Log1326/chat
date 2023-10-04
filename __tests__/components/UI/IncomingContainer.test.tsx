import { render, screen } from '@testing-library/react'
import { IncomingContainer } from '@/UI/IncomingContainer'
import { CallStateIncoming } from '@/store/call/call.types'

const accept = () => {}
const reject = () => {}
let info: CallStateIncoming = {
	id: '1',
	roomId: 123,
	type: 'incoming',
	callType: 'audio',
	user: { id: 2, name: 'anton', image: 'http://avatar' }
}
describe('IncomingContainer.test', () => {
	test('first', () => {
		render(
			<IncomingContainer accept={accept} reject={reject} info={info} />
		)
		const container = screen.getByTestId('IncomingContainer')
		const image = screen.getByAltText('anton') as HTMLImageElement
		expect(container).toBeInTheDocument()
		expect(container).toHaveClass('flex flex-1 gap-4')
		expect(image.width).toBe(100)
		screen.debug()
	})
})
