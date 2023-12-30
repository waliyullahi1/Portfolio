export function heroanimation({ type, element }) {
	const elements = document.querySelectorAll(element)

	elements.forEach((el) => {
		ScrollTrigger.create({
			trigger: el,
			animation: type === "text" ? hero(el) : useAnimateImage(el)
		})
	})
}