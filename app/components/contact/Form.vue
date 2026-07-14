<script setup lang="ts">
// From containers/contact/form-contact.tsx. react-i18next -> $t.
// The original had no submit handler (the form was presentational); preserved as-is.
</script>

<template>
	<form
		id="form"
		data-aos="fade-left"
		data-aos-anchor-placement="center-center"
		class="flex-1 w-full h-full p-[16px] rounded-[10px] bg-surface shadow-[0px_49px_49px_0px_rgba(31,13,64,0.10),_0px_0px_2px_0px_rgba(31,13,64,0.08)] sm:p-[20px] sm:rounded-2xl md:px-[30px] md:py-[20px]">
		<div class="flex flex-col items-start gap-[20px]">
			<div
				class="flex flex-col justify-center items-start w-full h-full gap-[20px] sm:flex-row sm:h-[55px] md:gap-[10px] md:h-full lg:flex-row">
				<!-- Name -->
				<div
					class="flex items-center w-full h-full px-[16px] py-[13.5px] rounded-[10px] bg-primary-tint/[0.05] border-[transparent] border hover:border hover:border-primary transition-all sm:h-[55px] lg:w-1/2">
					<label id="form-name" />
					<input
						:placeholder="$t('form.placeholder_name')"
						type="text"
						id="form-name"
						class="flex flex-col justify-center w-full bg-transparent text-input bg-[unset] text-[19px] border-none rounded-[10px] focus:outline-2 focus:outline-transparent focus:text-heading focus:outline-offset-2 focus:outline-none" />
				</div>
				<!-- Email -->
				<div
					class="flex items-center w-full h-full px-[16px] py-[13.5px] rounded-[10px] bg-primary-tint/[0.05] border-[transparent] border hover:border hover:border-primary transition-all sm:h-[55px] lg:w-1/2">
					<label id="form-Email" />
					<input
						:placeholder="$t('form.placeholder_email')"
						type="text"
						id="form-Email"
						class="flex flex-col justify-center w-full bg-transparent text-input bg-[unset] text-[19px] border-none rounded-[10px] focus:outline-2 focus:outline-transparent focus:text-heading focus:outline-offset-2 focus:outline-none" />
				</div>
			</div>

			<div
				class="flex flex-col justify-center items-start w-full h-full gap-[20px] sm:flex-row sm:h-[55px] md:gap-[10px] md:h-full lg:flex-row">
				<!-- Subject -->
				<div
					class="flex items-center w-full h-full px-[16px] py-[13.5px] rounded-[10px] bg-primary-tint/[0.05] border-[transparent] border hover:border hover:border-primary transition-all sm:h-[55px] lg:w-1/2">
					<label id="form-subject" />
					<input
						:placeholder="$t('form.placeholder_subject')"
						type="text"
						id="form-subject"
						class="flex flex-col justify-center w-full bg-transparent text-input bg-[unset] text-[19px] border-none rounded-[10px] focus:outline-2 focus:outline-transparent focus:text-heading focus:outline-offset-2 focus:outline-none" />
				</div>
				<!-- phone -->
				<div
					class="flex items-center w-full h-full px-[16px] py-[13.5px] rounded-[10px] bg-primary-tint/[0.05] border-[transparent] border hover:border hover:border-primary transition-all sm:h-[55px] lg:w-1/2">
					<label id="form-phone" />
					<input
						:placeholder="$t('form.placeholder_phone')"
						type="phone"
						id="form-phone"
						class="flex flex-col justify-center w-full bg-transparent text-input bg-[unset] text-[19px] border-none rounded-[10px] focus:outline-2 focus:outline-transparent focus:text-heading focus:outline-offset-2 focus:outline-none" />
				</div>
			</div>

			<div class="flex flex-col justify-center items-start w-full gap-[20px] sm:flex-row">
				<!-- Note -->
				<div
					class="flex items-center w-full px-[16px] py-[13.5px] rounded-[10px] bg-primary-tint/[0.05] border-[transparent] border hover:border hover:border-primary transition-all duration-150 ease-in-out">
					<label id="form-content" />
					<textarea
						:placeholder="$t('form.placeholder_content')"
						id="form-content"
						class="flex w-full h-[140px] bg-transparent text-input text-[19px] font-normal border-none rounded-[10px] resize-none focus:outline-2 focus:outline-transparent focus:text-heading focus:outline-offset-2 focus:outline-none" />
				</div>
			</div>

			<!-- button -->
			<div class="flex flex-col justify-end w-full sm:flex-row">
				<button
					type="submit"
					class="inline-flex items-start justify-center bg-primary border border-primary rounded-[10px] px-[36px] py-[13px] hover:bg-primary-hover hover:border-primary transition-all duration-500 ease-in-out sm:justify-start">
					<span
						class="text-white text-[18px] leading-[28px] font-normal capitalize text-center">
						{{ $t('form.btn_send_message') }}
					</span>
				</button>
			</div>
		</div>
	</form>
</template>
