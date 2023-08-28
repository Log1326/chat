import { initializeApp } from 'firebase/app'
import { getAuth } from '@firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyDBvxob4tad4cQbp4L52nlm4AN1-64PPW4',
	authDomain: 'whats-up-f6a59.firebaseapp.com',
	projectId: 'whats-up-f6a59',
	storageBucket: 'whats-up-f6a59.appspot.com',
	messagingSenderId: '584515637272',
	appId: '1:584515637272:web:fff233bf6721398760f36d'
}

const app = initializeApp(firebaseConfig)
export const firebasaeAuth = getAuth(app)
