// https://nuxt.com/docs/api/configuration/nuxt-config
const SITE_URL = process.env.NUXT_PUBLIC_SITE_URL || 'https://portfolio-chutoan.vercel.app'
const SITE_NAME = 'Chu Toan — Frontend Developer Portfolio'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },

  // Content site -> SSR + prerender the homepage (SSG) for best Core Web Vitals.
  ssr: true,

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt'
  ],

  // Shared site config consumed by @nuxtjs/sitemap + @nuxtjs/robots (nuxt-site-config).
  site: {
    url: SITE_URL,
    name: SITE_NAME
  },

  // Global stylesheets.
  css: [
    '~/assets/scss/grid.scss',
    'aos/dist/aos.css',
    'swiper/css',
    'swiper/css/pagination'
  ],

  // @nuxtjs/tailwindcss processes this entry (it holds the @tailwind directives + @apply rules).
  tailwindcss: {
    cssPath: '~/assets/scss/index.scss',
    configPath: 'tailwind.config.js',
    viewer: false
  },

  // @nuxt/image — AVIF/WebP + remote (Cloudinary) allow-list for <NuxtImg>.
  image: {
    format: ['avif', 'webp'],
    quality: 80,
    domains: ['res.cloudinary.com'],
    provider: 'ipx'
  },

  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales',
    locales: [{ code: 'en', name: 'English', language: 'en-US', file: 'en.json' }],
    bundle: { optimizeTranslationDirective: false }
  },

  // Only the Jost family is actually used — load it alone (was 4 families/all weights),
  // with preconnect + display=swap to cut render-blocking time and improve LCP.
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#7d11f9' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800;900&display=swap'
        }
      ]
    }
  },

  robots: {
    // Block private/data areas; sitemap is auto-declared by the module.
    disallow: ['/api', '/admin', '/login', '/dashboard']
  },

  sitemap: {
    autoLastmod: true,
    // Single public route; extend with dynamic URLs from an API when pages are added.
    defaults: { changefreq: 'monthly', priority: 1.0 }
  },

  runtimeConfig: {
    public: {
      siteUrl: SITE_URL
    }
  },

  // Caching, security headers, and static prerender of the homepage.
  routeRules: {
    '/': { prerender: true },
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload'
      }
    },
    // Hashed build assets — cache hard.
    '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    '/assets/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    // Internal data endpoints must not be indexed.
    '/api/**': { headers: { 'X-Robots-Tag': 'noindex' } }
  },

  nitro: {
    compressPublicAssets: { gzip: true, brotli: true },
    prerender: { crawlLinks: true, routes: ['/'] }
  }
})
