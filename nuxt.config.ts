// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  site: {
    // url: "enter-site-url-here ",
  },
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      include: undefined,
      exclude: [],
      cookieRedirect: false,
    }
  },
  app: {
    head: {
      meta: [
        {
          name: 'google-site-verification',
          // content: 'enter-site-validation-key-here',
        },
      ],
    },
  },
  modules: [
    "nuxt-aos",
    "vue3-carousel-nuxt",
    "@nuxtjs/sitemap",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxtjs/supabase",
    "@nuxtjs/google-fonts"
  ],
})