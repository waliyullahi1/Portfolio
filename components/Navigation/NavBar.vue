<template>
<div  :class="headertext?' md:bg-transparent':''" class=" w-full place-contnt-center     ">
 
  <header class="fixed w-full  top-0 left-0">
        <div class="mx-auto px-2 container">
          <nav class="flex  w-full mt-5 justify-between   items-center ">
            <ul>
              <li><a href="/index.html" class="  font-['Advert'] font-light text-[2.5rem]"><span
                    class=" text-primary">Wa</span>liu</a></li>
            </ul>
            <ul class="flex font-normal text-lg gap-10 font-['Advert'] list-none">
              <li class="group ">
                <a class=" /  " href="">Home</a>
                <div class=" h-[2px] group-hover:w-full w-0 duration-500 bg-[#03fcec]  "></div>
              </li>


              <li class="group ">
                <a class=" " href="">About</a>
                <div class=" h-[2px] group-hover:w-full w-0 duration-500 bg-[#03fcec]  "></div>
              </li>


              <li class="group">
                <a class=" " href="">Contact</a>
                <div class=" h-[2px] group-hover:w-full w-0 duration-500  md:bg-[#03fcec]  "></div>
              </li>


            </ul>
          </nav>
        </div>
        <div>
          
        </div>
      </header>
   
</div>
</template>

<script>


export default {

   
  data(){
    return{
  
     
    }
  },

   props: {
     

    },

  

}
</script>

<style>
 .shodow{
  box-shadow: -3px 17px 28px -2px rgba(0,0,0,0.75);
  -webkit-box-shadow: -3px 17px 28px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: -3px 17px 28px -2px rgba(0,0,0,0.75);
 }
</style>