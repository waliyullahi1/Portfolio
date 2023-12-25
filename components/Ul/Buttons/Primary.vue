<template>
<div  >
 
  <button class=" hover:text-tertiary bg-primary px-4 py-2 tracking-wide rounded-sm "><slot /></button>
   
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