export function hero(el, per, val) {
	const element = (typeof el === 'string') ? document.querySelectorAll(el) : el
	const percent = (typeof per === 'string') ? document.querySelectorAll(per) : per
	const value = (typeof val === 'string') ? document.querySelector(val) : val

	 const percenumber = parseInt()
	const tl = gsap.timeline()
	console.log(percenumber);
	
	if(element) {
		tl.to(percent, {
			progress: value,
			duration: 1,
			onUpdate() {
				percent.value = Math.floor(percent.progress)
			},
			onComplete() {
				general.isPreloaderVisible = false
			}
		})
	}

	return tl
}
