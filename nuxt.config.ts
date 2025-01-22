// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  typescript: {
    includeWorkspace: true,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Manrope: {
            wght: [500, 800],
          },
        },
      },
    ],
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/eslint',
  ],

  pinia: {
    storesDirs: ['./store/**'],
  },
})
