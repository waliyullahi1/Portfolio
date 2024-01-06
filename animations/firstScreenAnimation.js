export function firstScreenAnimation({ parent }) {
	const parentEl = document.querySelector(parent)
	const title = parentEl.querySelectorAll('.title-default__wrap')
	const header = parentEl.querySelector('.header')
	const pageMask = parentEl.querySelector('.page-mask')
	const percentage = parentEl.querySelectorAll('.title-default__wrap')
	const tl = gsap.timeline()

	tl.to(pageMask, {
		opacity: 0
	})

	
	  

	// for (let i = 1; i <= 12; i++) {
	// 	tl.from(`.tittle:nth-child(${i})`, {
	// 	  yPercent: -100,
	// 	  opacity: 0,
	// 	  clearProps: 'all'
	// 	});
	tl.from(title, {
		yPercent: -100,
		opacity: 0,
		clearProps: 'all'
	})
	tl.from(header, {
		yPercent: -100,
		clearProps: 'all'
	}, '<')
}