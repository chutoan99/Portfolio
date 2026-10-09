<script setup lang="ts">
/**
 * From _app.tsx. The <LazyMotion features={domAnimation}> wrapper existed only to
 * lazy-load Framer Motion features; @vueuse/motion (registered globally by its Nuxt
 * module) needs no equivalent wrapper, so the layout is a plain pass-through.
 */
</script>

<template>
	<slot />
</template>
