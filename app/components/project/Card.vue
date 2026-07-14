<script setup lang="ts">
import type { Project } from '~/types'

// Unifies the old projects_1..4.tsx. Each old file created a useAnimation() per mockup
// and, on scroll past a threshold, spread the device images out with a linear tween.
// Here that is a scroll latch + reactive transforms, driven by `project.showcase`.
const props = defineProps<{ project: Project }>()

const showcase = computed(() => props.project.showcase)
const triggered = ref(false)

const onScroll = () => {
	if (window.scrollY > showcase.value.scrollThreshold) triggered.value = true
}

onMounted(() => {
	useEventListener(window, 'scroll', onScroll)
})

const deviceStyle = (i: number) => {
	const d = showcase.value.devices[i]!
	const pos = triggered.value ? d.to : d.from
	return {
		transform: `translate(${pos.x}, ${pos.y})`,
		zIndex: triggered.value ? d.zIndex : undefined,
		transition: 'transform 0.3s linear'
	}
}
</script>

<template>
	<div
		class="flex items-start gap-[50px] w-full p-[16px] rounded-xl lt:max-w-[1200px] lt:px-0 lt:w-[1200px]">
		<div
			class="flex flex-col gap-[20px] lt:grid"
			:style="{ gridTemplateColumns: showcase.gridTemplate }">
			<!-- Info-left layout (old projects_2 / projects_4) -->
			<template v-if="showcase.reversed">
				<div
					data-aos="fade-right"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					data-aos-duration="800"
					class="order-2 lt:order-1 lt:mr-[50px]">
					<ProjectInfo :project="project" />
				</div>
				<div
					data-aos="zoom-in"
					data-aos-offset="200"
					data-aos-easing="ease-in-sine"
					data-aos-duration="500"
					class="order-1 hidden h-[200px] justify-center items-center flex-[1_0_0] self-stretch lt:h-full lt:flex">
					<div
						class="flex justify-center center items-center w-full relative h-[200px] scale-[0.5] lt:h-full lt:scale-[1]">
						<div
							v-for="(device, index) in showcase.devices"
							:key="index"
							class="absolute"
							:style="deviceStyle(index)">
							<div class="w-full h-full">
								<img
								:src="device.image"
								:alt="`${$t(project.nameKey)} — device preview`"
								loading="lazy"
								decoding="async"
								width="100%"
								height="100%" />
							</div>
						</div>
					</div>
				</div>
			</template>

			<!-- Info-right layout (old projects_1 / projects_3) -->
			<template v-else>
				<div
					data-aos="zoom-in"
					data-aos-offset="200"
					data-aos-easing="ease-in-sine"
					data-aos-duration="500"
					class="hidden h-[200px] justify-center items-center flex-[1_0_0] self-stretch lt:h-full lt:flex">
					<div
						class="flex justify-center center items-center w-full relative h-[200px] scale-[0.5] lt:h-full lt:scale-[1]">
						<div
							v-for="(device, index) in showcase.devices"
							:key="index"
							class="absolute"
							:style="deviceStyle(index)">
							<div class="w-full h-full">
								<img
								:src="device.image"
								:alt="`${$t(project.nameKey)} — device preview`"
								loading="lazy"
								decoding="async"
								width="100%"
								height="100%" />
							</div>
						</div>
					</div>
				</div>
				<div
					data-aos="fade-left"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					data-aos-duration="800"
					class="lt:ml-[50px]">
					<ProjectInfo :project="project" />
				</div>
			</template>
		</div>
	</div>
</template>
