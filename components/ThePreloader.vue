<script setup>

	const percentage = ref(0)

	onMounted(() => {
		const tl = gsap.timeline()

		tl.to(percentage, {
			progress: 100,
			duration: 1,
			onUpdate() {
				percentage.value = Math.floor(percentage.progress)
			},
			onComplete() {
				general.isPreloaderVisible = false
			}
		})

		tl.fromTo('.preloader', {
			clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
		}, {
			clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
			duration: 1,
		})
	})

</script>
<template>

	<div class="preloader z-50">
		<div class="preloader-percent text-center text-2xl h1">
			 <h1 class="font-medium animation tracking-widest text-3xl md:text-5xl">Welcome</h1>
			{{ percentage }}%
		</div>
	</div>

</template>
<style lang='scss' scoped>

.preloader {
	position: fixed;
	inset: 0;

	z-index: $z-preloader;
	display: flex;
	align-items: center;
	justify-content: center;
	background: $color-white;
	color: white;
}
.animation{
	animation: text 1s  ;
	
}

@keyframes text {
  0% {
   transform: translateY(100px);
  opacity: 0;
  }
  50% {
   transform: translateY(100px);
  opacity: 0;
  }
 
  100% {
	transform: translateY(0px); 
	opacity: 3;
  }
}


</style>