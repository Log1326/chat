import { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import '@/styles/globals.css'

const storeFN = store()

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={storeFN}>
			<Head>
				<title>Whatsapp</title>
				<link rel='shortcut icon' href='/favicon.png' />
			</Head>
			<Component {...pageProps} />
		</Provider>
	)
}
