<script setup lang="ts">
import Typed from 'typed.js'
import { gsap, Linear } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// The hero: particle backdrop (<UiParticleField>) with the greeting overlaid.
// typed.js drives the rotating role text; a GSAP timeline reveals the `.seq` lines.
const { t } = useI18n()

const typedSpanElement = ref<HTMLSpanElement | null>(null)
const targetSection = ref<HTMLDivElement | null>(null)

onMounted(() => {
	gsap.registerPlugin(ScrollTrigger)
	gsap.config({ nullTargetWarn: false })

	const typed = new Typed(typedSpanElement.value as Element, {
		strings: [t('common.msg_typed_frontend'), t('common.msg_typed_backend')],
		typeSpeed: 50,
		backSpeed: 50,
		backDelay: 8000,
		loop: true
	})

	if (targetSection.value) {
		const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } })
		revealTl
			.to(targetSection.value, { opacity: 1, duration: 2 })
			.from(
				targetSection.value.querySelectorAll('.seq'),
				{ opacity: 0, duration: 0.5, stagger: 0.5 },
				'<'
			)
	}

	onBeforeUnmount(() => typed.destroy())
})
</script>

<template>
	<UiParticleField />

	<div class="flex justify-center section-container">
		<section
			class="absolute top-0 flex py-[32px] h-full justify-start px-[16px] min-h-screen mx-auto w-full max-w-[1200px] md:items-center md:px-[48px] 2xl:container">
			<div class="font-medium flex flex-col justify-center select-none md:pt-0">
				<div ref="targetSection" class="mb-2 md:mb-[16px]" :style="{ opacity: 0 }">
					<p class="text-2xl seq sm:text-3xl text-black">{{ t('common.msg_greeting') }}</p>
					<h1 class="text-2xl seq sm:text-3xl text-black">{{ t('common.msg_intro_name') }}</h1>
				</div>
				<p class="mb-[16px] text-black">
					<span ref="typedSpanElement" class="text-3xl seq sm:text-4xl md:text-5xl" />
				</p>
			</div>
		</section>
	</div>
</template>
