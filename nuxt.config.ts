// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper'],
  css: ['@/assets/css/main.css'],
  app: {
    head: {
      title: 'MOG Clothing',
    },
  },
});
