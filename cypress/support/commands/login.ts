import { LocalStorageService } from '@/service/LocalStorageService'
import { ILogin } from '@/types/login'

export const loginCy = (email: string = 'julia@mail.com') => {
	cy.request<ILogin>({
		method: 'POST',
		url: 'http://localhost:4000/api/auth/check-user',
		body: { email }
	}).then(({ body }) => {
		LocalStorageService.setUserLocalStorage(body.data)
		return body.data
	})
}
declare global {
	namespace Cypress {
		interface Chainable {
			login(email: string): Chainable<ILogin>
		}
	}
}
