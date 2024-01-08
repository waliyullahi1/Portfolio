export default defineNuxtConfig({
	pages: true,
	modules: [
		'vue3-carousel-nuxt'
	],
	css: [
		'@/assets/scss/default.scss','~/assets/main.css','@/assets/font.css'
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
	plugins: [
		{ src: '~/plugins/slow-scroll.js', mode: 'client' },
	],
	imports: {
		dirs: ['store', 'utils', 'animations'],
	},
})
