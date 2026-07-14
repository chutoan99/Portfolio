<script setup lang="ts">
// From containers/about/avatar-card.tsx. Static markup; the `.avatar-card` / `.shine`
// hover effect is defined in assets/scss/index.scss.
</script>

<template>
	<div class="avatar-card">
		<div
			class="w-full h-[489px]"
			:style="{
				background: `url('/assets/images/avatar.png') center / cover no-repeat`,
				boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.13)'
			}" />
		<span class="shine" />
	</div>
</template>
