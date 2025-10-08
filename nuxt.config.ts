import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  pages: true,

  modules: [
    'vue3-carousel-nuxt'
  ],

  css: [
    '@/assets/main.css', // ✅ Tailwind entry file
    '@/assets/scss/default.scss',
    '@/assets/font.css'
  ],

  vite: {
    plugins: [
      tailwindcss(), // ✅ correct place for Tailwind Vite plugin
    ],
    css: {
      preprocessorOptions: {
        scss: {
          // ✅ Inject global SCSS variables/mixins/utilities
          additionalData: `
            @use "@/assets/scss/variables" as *;
            @use "@/assets/scss/mixins" as *;
            @use "@/assets/scss/utils" as *;
          `,
        },
      },
    },
  },

  plugins: [
    { src: '~/plugins/slow-scroll.js', mode: 'client' },
  ],

  imports: {
    dirs: ['store', 'utils', 'animations'],
  },

  compatibilityDate: '2025-10-06',
});
