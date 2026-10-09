<script setup lang="ts">
// Long text clamped to `lines` lines on phones (< 640px) with a Show more toggle; from 640px
// up the full text is always shown. The toggle only appears when the text actually overflows.
// Typography comes from the classes put on this component (inherited by the paragraph).
const props = withDefaults(defineProps<{ lines?: number }>(), { lines: 4 })

const textEl = ref<HTMLElement | null>(null)
const expanded = ref(false)
const overflowing = ref(false)

const measure = () => {
	if (!textEl.value || expanded.value) return
	overflowing.value =
		textEl.value.scrollHeight > textEl.value.clientHeight + 1
}

onMounted(measure)
useResizeObserver(textEl, measure)
</script>

<template>
	<div>
		<p
			ref="textEl"
			:class="{ 'clamp-on-phone': !expanded }"
			:style="{ '--clamp-lines': props.lines }">
			<slot />
		</p>
		<UiShowMoreButton
			v-if="overflowing || expanded"
			class="mt-[6px]"
			:expanded="expanded"
			@toggle="expanded = !expanded" />
	</div>
</template>

<style scoped>
@media (max-width: 639px) {
	.clamp-on-phone {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: var(--clamp-lines);
		overflow: hidden;
	}
}
</style>
