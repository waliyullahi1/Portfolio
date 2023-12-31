<template>
<div  class="group items-center border-b w-fit gap-1 flex" >
 
  <button class="  group-hover:text-tertiary hover:text-tertiar borderb border-white  pb-2 tracking-wide rounded-sm "><slot /></button>
  <div class="w-5 group-hover:text-tertiary text-white">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
    <path d="M14 5.3417969C13.744125 5.3417969 13.487969 5.4412187 13.292969 5.6367188L13.207031 5.7226562C12.816031 6.1136563 12.816031 6.7467188 13.207031 7.1367188L17.070312 11L4 11C3.448 11 3 11.448 3 12C3 12.552 3.448 13 4 13L17.070312 13L13.207031 16.863281C12.816031 17.254281 12.816031 17.887344 13.207031 18.277344L13.292969 18.363281C13.683969 18.754281 14.317031 18.754281 14.707031 18.363281L20.363281 12.707031C20.754281 12.316031 20.754281 11.682969 20.363281 11.292969L14.707031 5.6367188C14.511531 5.4412187 14.255875 5.3417969 14 5.3417969 z" fill="currentColor" />
    </svg>
  </div>
 
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