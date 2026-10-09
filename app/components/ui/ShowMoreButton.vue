<script setup lang="ts">
// Phone-only "Show more / Show less" toggle shared by long blocks of content.
// Hidden from 640px (sm) up, where the full content is always shown.
defineProps<{ expanded: boolean; moreLabel?: string }>()
defineEmits<{ toggle: [] }>()
</script>

<template>
	<button
		type="button"
		class="sm:hidden inline-flex items-center gap-[4px] text-[14px] font-semibold leading-[20px] text-primary hover:text-primary-hover transition-colors"
		:aria-expanded="expanded"
		@click="$emit('toggle')">
		{{
			expanded
				? $t('common.btn_show_less')
				: (moreLabel ?? $t('common.btn_show_more'))
		}}
		<!-- lucide chevron-down -->
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="h-[16px] w-[16px] transition-transform duration-200"
			:class="{ 'rotate-180': expanded }">
			<path d="m6 9 6 6 6-6" />
		</svg>
	</button>
</template>
