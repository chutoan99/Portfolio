import '../styles/index.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import { LazyMotion, domAnimation } from 'framer-motion';

import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/rounded-avatar.png" type="image/x-icon" />

        <title>{`Portfolio`}</title>

        <meta name="description" content="Chu toan Portfolio" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Chu Toan dev Portfolio" />
        <meta property="og:description" content="Trương Văn Chu Toàn" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Chu Toan dev Portfolio" />
      </Head>
      <LazyMotion features={domAnimation}>
        <Component {...pageProps} />
      </LazyMotion>
    </>
  );
}

export default MyApp;
