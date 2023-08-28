import { Head, Html, Main, NextScript } from 'next/document'
import { PHOTO_PICKER_ELEMENT } from '@/constants/constants'

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<body>
				<Main />
				<NextScript />
				<div id={PHOTO_PICKER_ELEMENT} />
			</body>
		</Html>
	)
}
