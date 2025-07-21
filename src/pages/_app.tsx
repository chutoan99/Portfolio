import '../styles/index.css'
import 'locomotive-scroll/dist/locomotive-scroll.css'

import { LazyMotion, domAnimation } from 'framer-motion'

import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Chu Toan | Frontend Developer Portfolio</title>
				<link
					rel='shortcut icon'
					href='/rounded-avatar.png'
					type='image/x-icon'
				/>

				{/* Primary Meta Tags */}
				<meta
					name='title'
					content='Chu Toan | Frontend Developer Portfolio'
				/>
				<meta
					name='description'
					content='Portfolio Trương Văn Chu Toàn - Frontend Developer - BackEnd Developer'
				/>
				<meta
					name='keywords'
					content='Portfolio Trương Văn Chu Toàn - Frontend Developer - BackEnd Developer'
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
					content='Chu Toan | Frontend Developer Portfolio'
				/>
				<meta
					property='og:description'
					content='Portfolio Trương Văn Chu Toàn - Frontend Developer - BackEnd Developer'
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
					content='Chu Toan | Frontend Developer Portfolio'
				/>
				<meta
					property='twitter:description'
					content='Portfolio Trương Văn Chu Toàn - Frontend Developer - BackEnd Developer'
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
