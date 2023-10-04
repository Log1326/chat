/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			transitionProperty: {
				width: 'width',
				height: 'height'
			},
			screens: {
				'screen-xs': { min: '320px', max: '384px' },
				'screen-sm': { min: '384px', max: '448px' },
				'screen-md': { min: '448px', max: '512px' },
				'screen-lg': { min: '512px', max: '576px' },
				'screen-xl-max': { max: '576px' },
				'screen-xl-min': { min: '577px' },
				'screen-xl': { min: '577px', max: '692px' },
				'screen-2xl': { min: '692px', max: '768px' },
				'screen-3xl': { min: '768px', max: '896px' },
				'screen-4xl': { min: '896px', max: '1024px' },
				'screen-5xl': { min: '1024px', max: '1152px' },
				'screen-6xl': { min: '1152px', max: '1280px' },
				'screen-7xl': { min: '1280px' }
			},
			backgroundImage: {
				'chat-background-color': "url('/bg-image/image-bg-color.jpg')",
				'chat-background-white': "url('/bg-image/image-bg-white.jpg')",
				'chat-background-pale': "url('/bg-image/image-bg-grey.png')",
				'chat-background-teal': "url('/bg-image/image-bg-teal.jpg')",
				'chat-background-space': "url('/bg-image/image-bg-space.jpg')"
			},
			colors: {
				secondary: '#8696a0',
				'teal-light': '#7ae3c3',
				'photopicker-overlay-background': 'rgba(30,42,49,0.8)',
				'dropdown-background': '#233138',
				'dropdown-background-hover': '#182229',
				'input-background': ' #2a3942',
				'primary-strong': '#e9edef',
				'panel-header-background': '#202c33',
				'panel-header-icon': '#aebac1',
				'icon-lighter': '#8696a0',
				'icon-green': '#00a884',
				'search-input-container-background': '#111b21',
				'conversation-border': 'rgba(134,150,160,0.15)',
				'conversation-panel-background': '#0b141a',
				'background-default-hover': '#202c33',
				'incoming-background': '#202c33',
				'outgoing-background': '#005c4b',
				'bubble-meta': 'hsla(0,0%,100%,0.6)',
				'icon-ack': '#53bdeb'
			},
			gridTemplateColumns: {
				main: '1fr 2.4fr'
			},
			keyframes: {
				appearance: {
					'0%': { transform: 'translateX(-150px)' },
					'50%': { transform: 'translateX(-100px)' },
					'100%': { transform: 'translateX(0px)' }
				},
				appearanceLeft: {
					'0%': { transform: 'translateX(250px)' },
					'50%': { transform: 'translateX(100px)' },
					'100%': { transform: 'translateX(0px)' }
				},
				fade: { from: { opacity: 0 }, to: { opacity: 1 } },
				fadeInfinite: { from: { opacity: 0.3 }, to: { opacity: 0.8 } },
				loadSkeleton: {
					from: { left: '-150px' },
					to: { left: '100%' }
				},
				scaleIn: {
					'0%': { opacity: 0, transform: 'scale(0.9)' },
					'5%': { opacity: 0.3 },
					'45%': { opacity: 0.6 },
					'100%': { opacity: 1, transform: 'scale(1)' }
				}
			},
			animation: {
				appearance: 'appearance 0.5s linear',
				appearanceLeft: 'appearanceLeft 1s linear',
				scaleIn: 'scaleIn .5s ease-in-out',
				fadeInfinite: 'fadeInfinite 1.2s linear infinite',
				fade: 'fade 1s linear',
				loadSkeleton: 'loadSkeleton 1s linear'
			}
		}
	},
	plugins: ['prettier-plugin-tailwindcss']
}
