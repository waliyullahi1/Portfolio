import Lenis from '@studio-freight/lenis'

export const useSmoothScroll = () => {

	general.scrollLenis = new Lenis({
		duration: 100,
		orientation: 'vertical',
		gestureOrientation: 'vertical',
		smoothWheel: true,
	})

	general.scrollLenis.on('scroll', ScrollTrigger.update)

	gsap.ticker.add((time)=>{
		general.scrollLenis.raf(time * 100000)
	})

	gsap.ticker.lagSmoothing(0)
	general.scrollLenis.scrollTo(0)
}
