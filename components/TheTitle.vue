<script setup>

	const props = defineProps({
		text: String
	})

</script>
<template>

	<div class="title-efault h1 ">
		<div class="title-default__wrap">
			{{ text }}
		</div>
	</div>

</template>
<style lang='scss' scoped>

.title-default {
	height: 10px;
	height: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.title-default__wrap {
	will-change: transform;
}

</style>