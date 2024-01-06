<script setup>


	const main = ref();
    let ctx;
    let smoother;

    const contact = () => {
      smoother.scrollTo(general.pageBg, true, 'top top');
    };

    onMounted(() => {
		useSmoothScroll()
      ctx = gsap.context(() => {
        // create the smooth scroller FIRST!
        smoother = ScrollSmoother.create({
          smooth: 6, // seconds it takes to "catch up" to native scroll position
          effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
        });
        ScrollTrigger.create({
          trigger:general.pageBg,
          pin: true,
          start: 'center center',
          
          // markers: true,
        });
      }, main.value);

      
    });

	// onMounted(() => {
	// 	useSmoothScroll()
	// })

</script>
<template>

	<div id="viewport">
		<ThePreloader />
		<slot />
	</div>


</template>
<style lang='scss' scoped>

</style>