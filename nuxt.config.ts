import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Website personal, portofoliu, blog',
      titleTemplate: '%s | Liviu.dev',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'description', content: 'Liviu.dev - website personal, blog, cv online si portofoliu.' },
      ],
      // script: [
      //   { src: 'https://awesome-lib.js' },
      // ],
      link: [
        // Poppins web font
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' },
        // Icons
        { rel: 'icon', sizes: '16x16', href: '/icons/favicon-16x16.png', type: 'image/png' },
        { rel: 'icon', sizes: '32x32', href: '/icons/favicon-32x32.png', type: 'image/png' },
        { rel: 'icon', sizes: '192x192', href: '/icons/android-chrome-192x192.png', type: 'image/png' },
        { rel: 'icon', sizes: '512x512', href: '/icons/android-chrome-512x512.png', type: 'image/png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png', type: 'image/png' },
      ],
      // style: [
      //   { children: ':root { color: red }', type: 'text/css' },
      // ],
      noscript: [
        { children: 'Javascript is required.' },
      ],
    },
  },

  modules: ['@nuxtjs/supabase'],

  css: [
    '~/assets/css/app.sass',
    '~/assets/css/tablet.sass',
    '~/assets/css/laptop.sass',
    '~/assets/css/desktop.sass',
  ],


})
