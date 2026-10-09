import AOS from 'aos'

/**
 * AOS was initialised inside a `useEffect` in Next's index.tsx. In Nuxt it becomes a
 * client-only plugin. The `data-aos="..."` attributes on elements are unchanged.
 *
 * `AOS.refreshHard()` runs after each route change so newly rendered elements animate.
 */
export default defineNuxtPlugin((nuxtApp) => {
	AOS.init({
		easing: 'ease-out-cubic',
		once: true,
		duration: 1200
	})

	nuxtApp.hook('page:finish', () => {
		AOS.refreshHard()
	})

	return {
		provide: {
			aos: AOS
		}
	}
})
