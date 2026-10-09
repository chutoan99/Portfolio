<script setup lang="ts">
// From components/label/index.tsx. Props via defineProps; `content` is passed
// already-translated by the parent page (same as the React version).
defineProps<{ content: string }>()
</script>

<template>
	<section>
		<div
			class="
				bg-primary-tint/[0.15] pt-[16px] pb-[16px]
				sm:pt-[40px] sm:pb-[40px]
				md:pt-[48px] md:pb-[48px]
			">
			<h2
				class="
					flex flex-col flex-shrink-0 justify-center text-center
					text-heading font-medium not-italic leading-[60px] text-[27px]
					h-[73px] max-w-[1200px] mx-auto
					sm:text-[34px]
					md:text-[50px]
				">
				{{ content }}
			</h2>
		</div>
	</section>
</template>
