import {render, screen} from "@testing-library/react";
import {Empty} from "@/components/Empty";
describe('empty components',() => {
    test('there is ', () => {
        render(<Empty/>)
        const myElem = screen.getByTestId('empty')
        expect(myElem).toBeInTheDocument()
    })
    test('there is img ', () => {
        render(<Empty/>)
        expect(screen.getByRole('img')).toBeInTheDocument()
    })
    test('there is  alt', () => {
        render(<Empty/>)
        expect(screen.getByAltText(/whats_up/i)).toBeInTheDocument()
    })
})
