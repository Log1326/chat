const nextConfig = {
	reactStrictMode: false,
	env: {
		API_HOST: process.env.API_HOST,
		MODE_DEVELEPMENT: process.env.MODE_DEVELEPMENT,
		API_KEY_FIREBASE: process.env.API_KEY_FIREBASE,
		AUTH_DOMAIN_FIREBASE: process.env.AUTH_DOMAIN_FIREBASE,
		PROJECT_ID_FIREBASE: process.env.PROJECT_ID_FIREBASE,
		STORAGE_BUCKET_FIREBASE: process.env.STORAGE_BUCKET_FIREBASE,
		MESSAGING_SENDER_ID_FIREBASE: process.env.MESSAGING_SENDER_ID_FIREBASE,
		APP_IP_FIREBASE: process.env.APP_IP_FIREBASE,
		ZEG_APP_ID: process.env.ZEG_APP_ID,
		ZEG_APP_PUBLIC_SERVER: process.env.ZEG_APP_PUBLIC_SERVER
	},
	images: {
		domains: [
			'lh3.googleusercontent.com',
			'localhost',
			'i.ndtvimg.com',
			'klike.net'
		]
	}
}

module.exports = nextConfig
