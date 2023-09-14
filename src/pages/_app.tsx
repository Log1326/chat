import { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Head>
				<title>Whatsapp</title>
				<link rel='shortcut icon' href='/favicon.png' />
			</Head>
			<Component {...pageProps} />
		</Provider>
	)
}
