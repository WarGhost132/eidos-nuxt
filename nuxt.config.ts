// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/image', '@pinia/nuxt', [
    '@nuxtjs/google-fonts',
    {
      families: {
        Manrope: {
          wght: [500,800]
        }
      }
    }
  ], '@nuxtjs/tailwindcss', '@nuxt/icon'],
  
  pinia: {
    storesDirs: ['./store/**']
  }
})