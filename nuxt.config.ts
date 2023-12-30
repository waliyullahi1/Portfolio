export default defineNuxtConfig({
	pages: true,
	modules: [
		'vue3-carousel-nuxt'
	  ],
	css: [
		'@/assets/scss/default.scss','~/assets/main.css'
	],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/scss/utils.scss";'
				}
			}
		},
	},
	postcss: {
		plugins: {
		  tailwindcss: {},
		  autoprefixer: {},
		},
	  },
	imports: {
		dirs: ['store', 'utils', 'animations'],
	},
})
