describe('empty spec', () => {
	it('passes', () => {
		cy.visit('/')
		cy.get('[data-testid=mainPage]').should('exist')
	})
})
