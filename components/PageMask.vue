<template>

	<div class="page-mask"></div>

</template>

<style lang="scss" scoped>

.page-mask {
	position: fixed;
	inset: 0;
	pointer-events: none;
	z-index: $z-mask;
}
.page_white .page-mask {
	background: rgb(0, 0, 0);
}
.page_black .page-mask {
	background: rgb(0, 0, 0);
}

</style>
