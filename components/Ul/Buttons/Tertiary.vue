<template>
<div  class="group items-center  font-medium  w-fit gap-1 flex" >
  <button class=" hover:text-tertiary bg-secondary  bg-opacity-80 px-4 py-2 tracking-widest  rounded-3xl "><slot /></button>
   
 
</div>
</template>

<script>


export default {

   
  data(){
    return{
    rotate : false,
    flex : true,
     
    }
  },

   props: {
      headertext: Boolean

    },

  

   methods:{
    transc(){
       this.$emit("transaction",)
    },
   emitclick(){
    this.rotate = !this.rotate
   
   },

     updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },

   mounted() {
    window.addEventListener('scroll', this.updateScroll);
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