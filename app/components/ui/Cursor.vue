<script setup lang="ts">
import { gsap, Linear } from 'gsap'

// From components/cursor/index.tsx. GSAP kept as-is (per spec).
// useRef -> template refs; useEffect -> onMounted; listeners cleaned up on unmount.
const props = defineProps<{ isDesktop: boolean }>()

const cursor = ref<HTMLDivElement | null>(null)
const follower = ref<HTMLDivElement | null>(null)

const isSmallScreen = () => document.body.clientWidth < 767

const onHover = () => {
	gsap.to(cursor.value, { scale: 0.5, duration: 0.3 })
	gsap.to(follower.value, { scale: 3, duration: 0.3 })
}

const onUnHover = () => {
	gsap.to(cursor.value, { scale: 1, duration: 0.3 })
	gsap.to(follower.value, { scale: 1, duration: 0.3 })
}

const moveCircle = (e: MouseEvent) => {
	gsap.to(cursor.value, { x: e.clientX, y: e.clientY, duration: 0.1, ease: Linear.easeNone })
	gsap.to(follower.value, { x: e.clientX, y: e.clientY, duration: 0.3, ease: Linear.easeNone })
}

const hoverEls: Element[] = []

const initCursorAnimation = () => {
	follower.value?.classList.remove('hidden')
	cursor.value?.classList.remove('hidden')

	document.addEventListener('mousemove', moveCircle)

	document.querySelectorAll('.link').forEach((el) => {
		el.addEventListener('mouseenter', onHover)
		el.addEventListener('mouseleave', onUnHover)
		hoverEls.push(el)
	})
}

const start = () => {
	if (props.isDesktop && !isSmallScreen()) initCursorAnimation()
}

onMounted(() => {
	start()
	// The React effect depended on isDesktop; re-run once it flips to a real value.
	watch(() => props.isDesktop, start)
})

onBeforeUnmount(() => {
	document.removeEventListener('mousemove', moveCircle)
	hoverEls.forEach((el) => {
		el.removeEventListener('mouseenter', onHover)
		el.removeEventListener('mouseleave', onUnHover)
	})
})
</script>

<template>
	<div
		ref="cursor"
		class="fixed hidden bg-surface w-[16px] h-[16px] select-none pointer-events-none z-50"
		:style="{ borderRadius: '100%', mixBlendMode: 'difference' }" />
	<div
		ref="follower"
		class="fixed hidden h-[32px] w-[32px] select-none pointer-events-none z-50"
		:style="{
			borderRadius: '100%',
			left: '-0.5rem',
			top: '-0.5rem',
			background: 'rgba(255, 255, 255, 0.2)',
			willChange: 'transform'
		}" />
</template>
