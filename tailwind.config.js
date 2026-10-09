/** @type {import('tailwindcss').Config} */

// Semantic color tokens are backed by CSS variables (RGB channels) defined in
// app/assets/scss/index.scss. Light mode is the default; dark mode later only needs
// to override those variables under [data-theme="dark"] — no class changes required.
const withVar = (name) => `rgb(var(${name}) / <alpha-value>)`

module.exports = {
	darkMode: ['class', '[data-theme="dark"]'],
	content: [
		'./app/components/**/*.{js,vue,ts}',
		'./app/layouts/**/*.vue',
		'./app/pages/**/*.vue',
		'./app/plugins/**/*.{js,ts}',
		'./app/app.vue',
		'./app/error.vue'
	],
	theme: {
		backgroundSize: {
			80: '80% !important'
		},
		extend: {
			colors: {
				// Brand
				primary: withVar('--color-primary'),
				'primary-hover': withVar('--color-primary-hover'),
				'primary-tint': withVar('--color-primary-tint'),
				// Text
				heading: withVar('--color-heading'),
				body: withVar('--color-body'),
				muted: withVar('--color-muted'),
				subtle: withVar('--color-subtle'),
				input: withVar('--color-input'),
				// Surfaces
				surface: withVar('--color-surface'),
				'surface-alt': withVar('--color-surface-alt'),
				'surface-muted': withVar('--color-surface-muted'),
				// Lines / borders
				line: withVar('--color-line'),
				'line-dashed': withVar('--color-line-dashed')
			},
			width: {
				fit: 'fit-content'
			}
		},
		screens: {
			sm: '640px',
			md: '768px',
			lt: '1024px',
			'2xl': '1440px'
		}
	},
	plugins: []
}
