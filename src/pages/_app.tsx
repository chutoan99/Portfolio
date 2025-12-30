import '../styles/index.scss'
import '../styles/grid.scss'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import '../i18n/config'

import { LazyMotion, domAnimation } from 'framer-motion'

import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useTranslation } from 'react-i18next'

function MyApp({ Component, pageProps }: AppProps) {
	const { t } = useTranslation()

	return (
		<>
			<Head>
				<title>{t('common.title_page')}</title>
				<link
					rel='shortcut icon'
					href='/rounded-avatar.png'
					type='image/x-icon'
				/>

				{/* Primary Meta Tags */}
				<meta
					name='title'
					content={t('common.title_page')}
				/>
				<meta
					name='description'
					content={t('common.meta_description')}
				/>
				<meta
					name='keywords'
					content={t('common.meta_keywords')}
				/>
				<meta
					name='keywords'
					content='
						Trương Văn Chu Toàn,
						Chu Toan,
						Frontend Developer,
						Backend Developer,
						Fullstack Developer,
						Web Developer Portfolio,
						Software Engineer Vietnam,
						Full Stack Web Developer,
						Personal Website Design,
						Developer Portfolio,
						Best Portfolio Websites,
						Beautiful Portfolio,
          '
				/>

				<meta name='author' content='Trương Văn Chu Toàn' />
				<meta name='robots' content='index, follow' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>

				{/* Open Graph / Facebook */}
				<meta property='og:type' content='website' />
				<meta
					property='og:url'
					content='https://portfolio-chutoan.vercel.app/'
				/>
				<meta
					property='og:title'
					content={t('common.title_page')}
				/>
				<meta
					property='og:description'
					content={t('common.meta_description')}
				/>
				<meta
					property='og:image'
					content='https://yourdomain.com/preview-image.png'
				/>

				{/* Twitter */}
				<meta property='twitter:card' content='summary_large_image' />
				<meta
					property='twitter:url'
					content='https://portfolio-chutoan.vercel.app/'
				/>
				<meta
					property='twitter:title'
					content={t('common.title_page')}
				/>
				<meta
					property='twitter:description'
					content={t('common.meta_description')}
				/>
				<meta
					property='twitter:image'
					content='https://yourdomain.com/preview-image.png'
				/>

				{/* Canonical URL */}
				<link
					rel='canonical'
					href='https://portfolio-chutoan.vercel.app/'
				/>
			</Head>

			<LazyMotion features={domAnimation}>
				<Component {...pageProps} />
			</LazyMotion>
		</>
	)
}

export default MyApp
