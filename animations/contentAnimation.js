export function contentAnimation({ type, element }) {
	const elements = document.querySelectorAll(element)

	elements.forEach((el) => {
		ScrollTrigger.create({
			trigger: el,
			animation: type === "text" ? useAnimateText(el) : (type === "image" ? useAnimateImage(el) : hero(el, per))
		})

		// ScrollTrigger.create({
		// 	trigger: el,
		// 	animation: hero('.w-full', '.percentage p')
		//   })
	})
}