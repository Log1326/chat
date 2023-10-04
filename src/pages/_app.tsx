import { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import '@/styles/globals.css'
import { AuthProvider } from '@/provider/auth/AuthProvider'
import { TypeComponentAuthFields } from '@/provider/auth/auth.types'

const storeFN = store()

export default function App({
	Component,
	pageProps
}: AppProps & TypeComponentAuthFields) {
	return (
		<Provider store={storeFN}>
			<AuthProvider Component={{ isOnlyUser: Component.isOnlyUser }}>
				<Head>
					<title>Whatsapp</title>
					<link rel='shortcut icon' href='/favicon.png' />
				</Head>
				<Component {...pageProps} />
			</AuthProvider>
		</Provider>
	)
}
