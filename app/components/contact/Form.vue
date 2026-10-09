<script setup lang="ts">
// Contact form: POSTs directly to Web3Forms (client-side, no backend), which emails
// the message to the site owner. Client validation + a hidden honeypot deter bots.
const form = reactive({
	name: '',
	email: '',
	subject: '',
	phone: '',
	message: '',
	website: '' // honeypot — must stay empty
})

const errors = reactive({ name: false, email: false, message: false })
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

// Web3Forms access key (client-side, no backend). Set NUXT_PUBLIC_WEB3FORMS_KEY.
// Get a free key at https://web3forms.com (just enter the email that should receive messages).
const accessKey = useRuntimeConfig().public.web3formsKey as string

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validate = () => {
	errors.name = !form.name.trim()
	errors.email = !EMAIL_RE.test(form.email.trim())
	errors.message = !form.message.trim()
	return !errors.name && !errors.email && !errors.message
}

const onSubmit = async () => {
	if (status.value === 'sending') return
	if (!validate()) return

	status.value = 'sending'
	try {
		// Web3Forms delivers the message straight to the owner's inbox — no server needed.
		const res = await $fetch<{ success: boolean }>('https://api.web3forms.com/submit', {
			method: 'POST',
			body: {
				access_key: accessKey,
				from_name: form.name,
				name: form.name,
				email: form.email,
				phone: form.phone,
				subject: form.subject || `New message from ${form.name}`,
				message: form.message,
				botcheck: Boolean(form.website) // honeypot
			}
		})
		if (res?.success) {
			status.value = 'success'
			form.name = form.email = form.subject = form.phone = form.message = ''
		} else {
			status.value = 'error'
		}
	} catch {
		status.value = 'error'
	}
}

// Shared classes.
const boxBase =
	'flex items-center w-full px-[16px] py-[13.5px] rounded-[10px] bg-primary-tint/[0.05] border transition-all sm:h-[55px]'
const boxOk = 'border-transparent hover:border-primary'
const boxErr = 'border-red-500'
const inputBase =
	'flex flex-col justify-center w-full bg-transparent text-input bg-[unset] text-[19px] border-none rounded-[10px] focus:outline-2 focus:outline-transparent focus:text-heading focus:outline-offset-2 focus:outline-none'
</script>

<template>
	<form
		id="form"
		data-aos="fade-left"
		data-aos-anchor-placement="center-center"
		novalidate
		class="flex-1 w-full h-full p-[16px] rounded-[10px] bg-surface shadow-[0px_49px_49px_0px_rgba(31,13,64,0.10),_0px_0px_2px_0px_rgba(31,13,64,0.08)] sm:p-[20px] sm:rounded-2xl md:px-[30px] md:py-[20px]"
		@submit.prevent="onSubmit">
		<div class="flex flex-col items-start gap-[20px]">
			<div class="flex flex-col justify-center items-start w-full gap-[20px] sm:flex-row md:gap-[10px]">
				<!-- Name -->
				<div class="flex flex-col gap-[6px] w-full lg:w-1/2">
					<div :class="[boxBase, errors.name ? boxErr : boxOk]">
						<label for="contact-name" class="sr-only">{{ $t('form.placeholder_name') }}</label>
						<input
							id="contact-name"
							v-model="form.name"
							type="text"
							name="name"
							autocomplete="name"
							:aria-invalid="errors.name"
							:placeholder="$t('form.placeholder_name')"
							:class="inputBase" />
					</div>
					<p v-if="errors.name" class="text-red-500 text-[14px] px-[4px]">{{ $t('form.err_name') }}</p>
				</div>
				<!-- Email -->
				<div class="flex flex-col gap-[6px] w-full lg:w-1/2">
					<div :class="[boxBase, errors.email ? boxErr : boxOk]">
						<label for="contact-email" class="sr-only">{{ $t('form.placeholder_email') }}</label>
						<input
							id="contact-email"
							v-model="form.email"
							type="email"
							name="email"
							autocomplete="email"
							:aria-invalid="errors.email"
							:placeholder="$t('form.placeholder_email')"
							:class="inputBase" />
					</div>
					<p v-if="errors.email" class="text-red-500 text-[14px] px-[4px]">
						{{ $t('form.err_email') }}
					</p>
				</div>
			</div>

			<div class="flex flex-col justify-center items-start w-full gap-[20px] sm:flex-row md:gap-[10px]">
				<!-- Subject -->
				<div class="flex flex-col gap-[6px] w-full lg:w-1/2">
					<div :class="[boxBase, boxOk]">
						<label for="contact-subject" class="sr-only">{{ $t('form.placeholder_subject') }}</label>
						<input
							id="contact-subject"
							v-model="form.subject"
							type="text"
							name="subject"
							:placeholder="$t('form.placeholder_subject')"
							:class="inputBase" />
					</div>
				</div>
				<!-- Phone -->
				<div class="flex flex-col gap-[6px] w-full lg:w-1/2">
					<div :class="[boxBase, boxOk]">
						<label for="contact-phone" class="sr-only">{{ $t('form.placeholder_phone') }}</label>
						<input
							id="contact-phone"
							v-model="form.phone"
							type="tel"
							name="phone"
							autocomplete="tel"
							:placeholder="$t('form.placeholder_phone')"
							:class="inputBase" />
					</div>
				</div>
			</div>

			<!-- Message -->
			<div class="flex flex-col gap-[6px] w-full">
				<div
					:class="[
						'flex items-center w-full px-[16px] py-[13.5px] rounded-[10px] bg-primary-tint/[0.05] border transition-all duration-150 ease-in-out',
						errors.message ? boxErr : boxOk
					]">
					<label for="contact-message" class="sr-only">{{ $t('form.placeholder_content') }}</label>
					<textarea
						id="contact-message"
						v-model="form.message"
						name="message"
						:aria-invalid="errors.message"
						:placeholder="$t('form.placeholder_content')"
						class="flex w-full h-[140px] bg-transparent text-input text-[19px] font-normal border-none rounded-[10px] resize-none focus:outline-2 focus:outline-transparent focus:text-heading focus:outline-offset-2 focus:outline-none" />
				</div>
				<p v-if="errors.message" class="text-red-500 text-[14px] px-[4px]">
					{{ $t('form.err_message') }}
				</p>
			</div>

			<!-- Honeypot (hidden from users) -->
			<input
				v-model="form.website"
				type="text"
				name="website"
				tabindex="-1"
				autocomplete="off"
				aria-hidden="true"
				class="hidden" />

			<!-- Status message -->
			<p
				v-if="status === 'success'"
				role="status"
				aria-live="polite"
				class="text-green-600 text-[16px] font-medium w-full">
				{{ $t('form.msg_success') }}
			</p>
			<p
				v-else-if="status === 'error'"
				role="alert"
				class="text-red-500 text-[16px] font-medium w-full">
				{{ $t('form.msg_error') }}
			</p>

			<!-- Submit -->
			<div class="flex flex-col justify-end w-full sm:flex-row">
				<button
					type="submit"
					:disabled="status === 'sending'"
					class="inline-flex items-start justify-center bg-primary border border-primary rounded-[10px] px-[36px] py-[13px] hover:bg-primary-hover hover:border-primary transition-all duration-500 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed sm:justify-start">
					<span class="text-white text-[18px] leading-[28px] font-normal capitalize text-center">
						{{ status === 'sending' ? $t('form.btn_sending') : $t('form.btn_send_message') }}
					</span>
				</button>
			</div>
		</div>
	</form>
</template>
