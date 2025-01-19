// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss', [
    '@nuxtjs/google-fonts',
    {
      families: {
        Manrope: {
          wght: [500,800]
        }
      }
    }
  ], '@nuxt/image', '@pinia/nuxt'],
  
  pinia: {
    storesDirs: ['./store/**']
  }
})