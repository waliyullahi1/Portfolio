import { NuxtLink } from '../../.nuxt/components';
<template>
  <div :class="headertext ? ' md:bg-transparent' : ''" class=" w-full place-contnt-center     ">

    <header class="fixed z-40 w-full shodow blurr top-0 left-0">
      <div class="mx-auto  px-2 container">
        <nav class="flex  w-full pt-5 justify-between   items-center ">
          <ul>
            <li><a href="/index.html" class="  font-['Advert'] font-light text-[2.5rem]"><span
                  class=" text-primary">Wa</span>liu</a></li>
          </ul>
          <ul class="flex font-normal text-lg gap-10 font-['Advert'] list-none">
            <li class="group ">
         <NuxtLink to="/">Home</NuxtLink>
              <div class=" h-[2px] group-hover:w-full w-0 duration-500 bg-primary "></div>
            </li>


            <li class="group ">
              <a class=" " href="#about">About</a>
              <div class=" h-[2px] group-hover:w-full w-0 duration-500 bg-primary "></div>
            </li>


            <li class="group">
              <a class=" " href="#contact">Contact</a>
              <div class=" h-[2px] group-hover:w-full w-0 duration-500  md:bg-primary  "></div>
            </li>


            <li class="group">
            <NuxtLink to="/works">works</NuxtLink>
              <div class=" h-[2px] group-hover:w-full w-0 duration-500  md:bg-primary  "></div>
            </li>

          </ul>
        </nav>
      </div>
    
    </header>
    <div>

    </div>
  </div>
</template>

<script>


export default {


  data() {
    return {


    }
  },

  props: {


  },



}
</script>

<style>
.shodow {
  box-shadow: -3px 17px 28px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: -3px 17px 28px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -3px 17px 28px -2px rgba(0, 0, 0, 0.75);
}
.router-link-active{
  color: #7a7a7a;
}

.blurr{
       backdrop-filter: blur(5px);
     
    }
</style>