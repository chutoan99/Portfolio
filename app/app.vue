<script setup lang="ts">
/**
 * Global SEO head: meta, Open Graph, Twitter Card, canonical, favicon and JSON-LD.
 * Titles/descriptions stay reactive to the active locale.
 */
const { t, locale } = useI18n()
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl
const siteName = 'Chu Toan — Frontend Developer Portfolio'
const ogImage = `${siteUrl}/assets/images/avatar.png`
// TODO: replace with your real X/Twitter handle (leave '' to omit the tag).
const twitterHandle = '@chutoan99'

useHead({
	title: () => t('common.title_page'),
	link: [
		{ rel: 'icon', href: '/rounded-avatar.png', type: 'image/png' },
		{ rel: 'apple-touch-icon', href: '/rounded-avatar.png' },
		{ rel: 'canonical', href: `${siteUrl}/` }
	],
	meta: [
		{
			name: 'keywords',
			content:
				'Trương Văn Chu Toàn, Chu Toan, Frontend Developer, Backend Developer, Fullstack Developer, Web Developer Portfolio, Software Engineer Vietnam, Full Stack Web Developer, Developer Portfolio'
		}
	],
	// JSON-LD structured data (Person + WebSite) via a @graph.
	script: [
		{
			type: 'application/ld+json',
			innerHTML: JSON.stringify({
				'@context': 'https://schema.org',
				'@graph': [
					{
						'@type': 'Person',
						'@id': `${siteUrl}/#person`,
						name: 'Trương Văn Chu Toàn',
						alternateName: 'Chu Toan',
						url: siteUrl,
						image: ogImage,
						jobTitle: 'Frontend Developer',
						email: 'mailto:truongvanchutoan1999@gmail.com',
						sameAs: [
							'https://github.com/chutoan99',
							'https://www.facebook.com/profile.php?id=100068599721013'
						],
						knowsAbout: [
							'Frontend Development',
							'Vue.js',
							'Nuxt',
							'React',
							'Next.js',
							'Node.js',
							'TypeScript'
						],
						address: {
							'@type': 'PostalAddress',
							addressLocality: 'Ho Chi Minh City',
							addressCountry: 'VN'
						}
					},
					{
						'@type': 'WebSite',
						'@id': `${siteUrl}/#website`,
						name: siteName,
						url: siteUrl,
						inLanguage: 'en-US',
						publisher: { '@id': `${siteUrl}/#person` }
					}
				]
			})
		}
	]
})

useSeoMeta({
	title: () => t('common.title_page'),
	description: () => t('common.meta_description'),
	author: 'Trương Văn Chu Toàn',
	robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',

	// Open Graph
	ogType: 'website',
	ogUrl: `${siteUrl}/`,
	ogSiteName: siteName,
	ogLocale: () => (locale.value === 'en' ? 'en_US' : locale.value),
	ogTitle: () => t('common.title_page'),
	ogDescription: () => t('common.meta_description'),
	ogImage: ogImage,
	ogImageAlt: 'Trương Văn Chu Toàn — Frontend Developer',

	// Twitter
	twitterCard: 'summary_large_image',
	twitterSite: twitterHandle || undefined,
	twitterCreator: twitterHandle || undefined,
	twitterTitle: () => t('common.title_page'),
	twitterDescription: () => t('common.meta_description'),
	twitterImage: ogImage,
	twitterImageAlt: 'Trương Văn Chu Toàn — Frontend Developer'
})
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
