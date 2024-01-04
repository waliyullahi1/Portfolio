<script setup>

	const props = defineProps({
		text: String
	})

</script>
<template>

        	<div class="title-default w-full  h1 bg-[url('../assets/image/hero.jpg')] bg-cover bg-no-repeat ">
		<div class=" bg-[#11141b]  bg-opacity-95  h-screen flex flex-col justify-center items-center w-full  ">

			<h1 class="md:text-3xl title-default__wrap text-2xl  font-semibold">Let's See My Work</h1>
                        <h2 class=" title-default__wrap text-center tracking-wider"> Scroll down to Selected work I've taken on in the past.</h2>

		</div>
	</div>

</template>
<style lang='scss' scoped>

// .title-default {
// 	height: 10px;
// 	height: 10px;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// }
// .title-default__wrap {
// 	will-change: transform;
// }

</style>