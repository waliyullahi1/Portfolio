export default function hero(el, per) {
	const element = (typeof el === 'string') ? document.querySelectorAll(el) : el
	const percent = (typeof per === 'string') ? document.querySelectorAll(per) : per
  
	const percentNumbers = Array.from(percent).map(p => parseInt(p.textContent))
  
	const tl = gsap.timeline()
  
	if(element) {
	  percentNumbers.forEach((percentNumber, index) => {
		tl.to(el[index].querySelector('.bg-tertiary'), {
		  progress: percentNumber / 100,
		  duration: 1,
		  onUpdate() {
			percent[index].textContent = Math.floor(this.progress() * 100) + '%'
		  },
		  onComplete() {
			general.isPreloaderVisible = false
		  }
		})
	  })
	}
  
	return tl
  }
  