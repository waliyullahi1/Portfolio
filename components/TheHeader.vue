<script setup>

	const links = [
		{href: '/', text: 'MAIN'},
		{href: '/about', text: 'ABOUT'},
		{href: '/gallery', text: 'GALLERY'},
	]

</script>
<template>

	<!-- <header class="" > -->

		<!-- <nuxt-link
			v-for="link in links"
			:to="link.href"
			class="header-link hover-fadein"
		>
			{{ link.text }}
		</nuxt-link> -->
		<header class="fixed w-full z-50 header  top-0 left-0 data-lenis-prevent">
      <div class="mx-auto px-2 container">
        <nav class="flex  w-full mt-5 justify-between   items-center ">
          <ul>
            <li><a href="/index.html" class="  font-['Advert'] font-light text-[2.5rem]"><span
                  class=" text-primary">Wa</span>liu</a></li>
          </ul>
          <ul class="flex font-normal text-lg gap-10 font-['Advert'] list-none">
            <li class="group ">
              
              <NuxtLink to="/">Home</NuxtLink>
              <div class=" h-[2px] group-hover:w-full w-0 duration-500 bg-[#03fcec]  "></div>
            </li>


            <li class="group ">
             <NuxtLink to="/works">Works</NuxtLink>
             
              <div class=" h-[2px] group-hover:w-full w-0 duration-500 bg-[#03fcec]  "></div>
            </li>


            <li class="group">
              <a class=" " href="">Contact</a>
              <div class=" h-[2px] group-hover:w-full w-0 duration-500  md:bg-[#03fcec]  "></div>
            </li>


          </ul>
        </nav>
      </div>
     
    </header>
	

</template>
<style lang='scss' scoped>

.header {
	z-index: $z-header;
}
.header-link {
	margin: 0 20px;
}

.page_white .header {
	hybackdrop-filter:blur(12px) ; 

}
.page_black .header {

  backdrop-filter:blur(12px) ;
}

</style>