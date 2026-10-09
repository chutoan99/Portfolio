<script setup lang="ts">
// From containers/contact/index.tsx. Composes ContactInfo + ContactForm.
</script>

<template>
	<section id="contact" class="bg-surface-alt px-[16px] py-[70px] lg:py-[100px]">
		<div
			class="flex flex-col justify-between h-full max-w-[1200px] mx-auto gap-[25px] sm:gap-[30px] sm:mt-[20px] sm:py-[20px] md:flex-row">
			<ContactInfo />
			<ContactForm />
		</div>
	</section>
</template>
