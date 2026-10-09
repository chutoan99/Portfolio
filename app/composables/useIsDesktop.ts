/**
 * Ported from the debounced `debouncedDimensionCalculator` + isDesktop state that
 * lived inline in Next's pages/index.tsx.
 *
 * React `useState` + `useEffect(resize listener)` -> `ref` + VueUse `useEventListener`
 * (auto-cleaned up on unmount, SSR-safe: defaults to `true` on the server).
 */
export function useIsDesktop() {
	const isDesktop = ref(true)
	let timer: ReturnType<typeof setTimeout> | null = null

	const calculate = () => {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			const result =
				typeof window.orientation === 'undefined' &&
				navigator.userAgent.indexOf('IEMobile') === -1
			window.history.scrollRestoration = 'manual'
			isDesktop.value = result
		}, 100)
	}

	onMounted(() => {
		calculate()
		useEventListener(window, 'resize', calculate)
	})

	return { isDesktop }
}
