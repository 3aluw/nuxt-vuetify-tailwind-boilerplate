// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass','@mdi/font/css/materialdesignicons.min.css',],
  modules: ['@pinia/nuxt','@nuxtjs/tailwindcss','@vueuse/nuxt',],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  build: {
transpile: ['vuetify'],
},

  vite: {
    define: {
      'process.env.DEBUG': false,
    },server:{
        allowedHosts: true,
    }
  },

  compatibilityDate: '2024-08-01',
})