import { selectByTestId } from '../../helper'

describe('empty spec', () => {
	it('visit page', () => {
		cy.visit('/page')
		cy.get(selectByTestId('login')).should('exist')
	})
	it('visit main page', () => {
		cy.visit('/page')
		cy.login('julia@mail.com')
		cy.visit('/')
		cy.get(selectByTestId('chat-list')).should('exist')
	})
})
