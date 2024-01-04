<script setup>




import pic1 from "../assets/image/image.jpg"
import pic9 from "../assets/image/image.jpg"
import pic2 from "../assets/image/image.jpg"
import pic3 from "../assets/image/image.jpg"
import pic4 from "../assets/image/image.jpg"
import pic5 from "../assets/image/image.jpg"
import pic6 from "../assets/image/image.jpg"
import pic7 from "../assets/image/image.jpg"
import pic8 from "../assets/image/image.jpg"
import vueImage from "../assets/image/vue.png"
import angularmage from "../assets/image/angular.png"
import figmaImage from "../assets/image/figma.png"
import coreldraw from "../assets/image/coreldraw.png"
// import mangodb from "../assets/image/mongodb.png"

import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import photoshop from "../assets/image/photoshop.png"
import solidity from "../assets/image/solidity.png"
import nodejs from "../assets/image/nodejs.png"


const main = ref();
    let ctx;
    let smoother;

    const scrollTo = () => {
      smoother.scrollTo('.box-c', true, 'center center');
    };

    onMounted(() => {
      // ctx = gsap.context(() => {
      //   // create the smooth scroller FIRST!
      //   smoother = ScrollSmoother.create({
      //     smooth: 2, // seconds it takes to "catch up" to native scroll position
      //     effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
      //   });
      //   // ScrollTrigger.create({
      //   //   trigger: '.box-c',
      //   //   pin: true,
      //   //   start: 'center center',
      //   //   end: '+=300',
      //   //   markers: true,
      //   // });
      // }, main.value);
    });
    


const props = defineProps({
		title: String,
		pageName: String,
	})

	watch(() =>
		[general.isTransitionStart, general.isPreloaderVisible],
		([transitionStart, preloaderVisibility]) => {

		if(transitionStart && !preloaderVisibility) {
			firstScreenAnimation({parent: `.${props.pageName}`})
      contentAnimation({type: 'text', element: '.page-content__block'})
     
			contentAnimation({type: 'image', element: '.page-content__block-photo'})
		}
	})



const state = reactive({
  tools: [
    {
      id: 1,
      img: pic5,
      header: 'Abanise Website',
      description: 'The official website was redesigned from scratch using content management system',
      items: [
        { id: 1, text: 'vue3' },
        { id: 2, text: 'figma' },

      ],
    },

    {
      id: 2,
      header: 'Odori',
      description: 'A B2C Ordering Platform',
      img: pic6,
      name: 'gucci',
      price: '100$',
      cnumber: '3',
      items: [
        { id: 1, text: 'nuxt' },
        { id: 2, text: 'figma' },

      ],
    },

    {
      id: 3,
      header: 'Osun State ',
      description: 'The official website was redesigned from scratch using content management system',
      img: pic7,
      name: 'gucci',
      price: '100$',
      cnumber: '3',
      items: [
        { id: 1, text: 'javascript' },
        { id: 2, text: 'figma' },

      ],
    },

    {
      id: 4,
      header: ' Studio Website',
      description: 'Portfolio website for a brand identity designer',
      img: pic8,
      name: 'gucci',
      price: '100$',
      cnumber: '3',
      items: [
        { id: 1, text: 'vue3' },
        { id: 2, text: 'html' },

      ],
    },
    {
      id: 5,
      header: 'GTN Website ',
      description: 'Green Tempo Nigeria website design and Lagos green directory portal',
      img: pic1,
      name: 'gucci',
      price: '100$',
      cnumber: '3',
      items: [
        { id: 1, text: 'vue3' },
        { id: 2, text: 'vu3' },

      ],
    },

    {
      id: 6,
      header: ' Official Website',
      description: 'Business website for a consultancy group',
      img: pic2,
      items: [
        { id: 1, text: 'figma' },
        { id: 2, text: 'figma' },

      ],

    },

    {
      id: 7,
      header: 'UNDP-OSSH  ',
      description: 'Portal development for application and screening during 2022 UNDP-OSSH Programme',
      img: pic9,
      name: 'gucci',
      price: '100$',
      cnumber: '3',
      items: [
        { id: 1, text: 'vue3' },
        { id: 2, text: 'html' },

      ],
    },

    {
      id: 8,
      header: 'Tojum',
      description: 'A landing page web design for a hospitality company in Nigeria',
      img: pic3,
      name: 'gucci',
      price: '100$',
      cnumber: '3',

    },

  ],
  hero: [

    {
      id: 1,
      image: vueImage,
      heroSection:'VUE'
    },

    {
      id: 2,
      image: angularmage,
      heroSection:"ANGULAR"
    },

    {
      id: 3,
      image: nodejs,
      heroSection:"NODEJS"
    },

    {
      id: 4,
      image: solidity,
      heroSection:'SOLIDITY'
    },

    // {
    //   id: 4,
    //   image:mangodb,

    // },

    {
      id: 4,
      image: coreldraw,
      heroSection:'COREL DRAWN'

    },

    {
      id: 4,
      image: photoshop,
      heroSection:'PHOTOSHOP'
    },

    {
      id: 4,
      image: figmaImage,
      heroSection:'FIGMA'

    },
  ]
});

//METHODS

const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
});

const breakpoints = ref({
  700: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
  100: {
    itemsToShow: 1.5,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 5,
    snapAlign: 'start',
  },
});


let mouseOver = () => {
  console.log('Mouse is over the element');
}

let mouseLeave = () => {
  console.log('Mouse has left the element');
}
	definePageMeta(transition)

</script>
<template>

	<div :class="general.pageBg">

    <div :class="`page ${props.pageName}`">
		<TheHeader />
	
		<div class="page-wra _container">

	  <PageMask></PageMask>


    <div class="title-efault h1 ">
		<div class="">
			<section  id="mySection" 
        class=" font-['Poppins'] bg-[url('../assets/image/hero.jpg')] bg-no-repeat justify-center bg-contain  h-screen ">
        <div class="w-full page-content bg-[#11141b]  bg-opacity-95 h-full ">
          <div>

            <div class="    top-32 w-fit items-center sm:left-7 left-3 justify-center  absolute flex flex-col gap-3">
              <a href="">
                <div class="w-6   hover:scale-110 duration-300 hover:text-white text-gray-500  ">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 208 208"
                    version="1.1">
                    <g id="surface1">
                      <path style=" stroke:none;fill-rule:nonzero;fill: currentColor;fill-opacity:1;"
                        d="M 203.710938 43.917969 C 196.292969 47.210938 188.320313 49.425781 179.949219 50.441406 C 188.476563 45.304688 195.0625 37.207031 198.140625 27.546875 C 190.136719 32.285156 181.273438 35.730469 171.855469 37.578125 C 164.316406 29.546875 153.574219 24.527344 141.664063 24.527344 C 118.828125 24.527344 100.300781 43.054688 100.300781 65.890625 C 100.300781 69.125 100.671875 72.292969 101.378906 75.308594 C 67 73.585938 36.53125 57.089844 16.125 32.070313 C 12.558594 38.195313 10.527344 45.304688 10.527344 52.90625 C 10.527344 67.246094 17.820313 79.894531 28.929688 87.3125 C 22.128906 87.097656 15.757813 85.25 10.1875 82.140625 C 10.1875 82.328125 10.1875 82.480469 10.1875 82.664063 C 10.1875 102.703125 24.4375 119.414063 43.363281 123.230469 C 39.886719 124.183594 36.253906 124.675781 32.46875 124.675781 C 29.792969 124.675781 27.207031 124.429688 24.683594 123.9375 C 29.945313 140.339844 45.210938 152.34375 63.308594 152.652344 C 49.179688 163.761719 31.332031 170.347656 11.941406 170.347656 C 8.585938 170.347656 5.324219 170.164063 2.09375 169.792969 C 20.375 181.519531 42.132813 188.351563 65.492188 188.351563 C 141.570313 188.351563 183.183594 125.320313 183.183594 70.695313 C 183.183594 68.878906 183.152344 67.09375 183.058594 65.308594 C 191.152344 59.523438 198.171875 52.226563 203.710938 43.917969 " />
                    </g>
                  </svg>
                </div>
              </a>

              <a href="https://github.com/waliyullahi1">
                <div class="w-7  hover:scale-110 duration-300 hover:text-white text-gray-500 top-10 ">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"
                    version="1.1">
                    <g id="surface1">
                      <path style=" stroke:none;fill-rule:evenodd;fill: currentColor;fill-opacity:1;"
                        d="M 256 64 C 149.9375 64 64 149.9375 64 256 C 64 340.8125 119 412.8125 195.3125 438.1875 C 204.9375 439.9375 208.4375 434.0625 208.4375 428.9375 C 208.4375 424.375 208.25 412.3125 208.1875 396.3125 C 154.75 407.875 143.5 370.5625 143.5 370.5625 C 134.75 348.375 122.1875 342.4375 122.1875 342.4375 C 104.75 330.5625 123.5 330.8125 123.5 330.8125 C 142.75 332.1875 152.875 350.5625 152.875 350.5625 C 170 379.9375 197.8125 371.4375 208.75 366.5625 C 210.5 354.125 215.5 345.6875 220.9375 340.875 C 178.3125 336.0625 133.5 319.5625 133.5 246 C 133.5 225 141 207.875 153.25 194.4375 C 151.3125 189.625 144.6875 170.0625 155.125 143.625 C 155.125 143.625 171.25 138.5 207.9375 163.3125 C 223.25 159.0625 239.6875 156.9375 256 156.875 C 272.3125 156.9375 288.75 159.0625 304.0625 163.3125 C 340.75 138.5 356.8125 143.625 356.8125 143.625 C 367.3125 170.0625 360.75 189.625 358.75 194.4375 C 371.0625 207.875 378.4375 225 378.4375 246 C 378.4375 319.75 333.5625 335.9375 290.8125 340.75 C 297.6875 346.625 303.8125 358.375 303.8125 376.25 C 303.8125 401.9375 303.625 422.625 303.625 428.9375 C 303.625 434.0625 307.0625 440.0625 316.8125 438.1875 C 393.0625 412.75 448 340.8125 448 256 C 448 149.9375 362.0625 64 256 64 Z " />
                    </g>
                  </svg>
                </div>
              </a>


              <a href="">
                <div class="w-5  hover:scale-110 duration-300 hover:text-white text-gray-500 top-10 ">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 208 208"
                    version="1.1">
                    <g id="surface1">
                      <path style=" stroke:none;fill-rule:nonzero;fill: currentColor;fill-opacity:1;"
                        d="M 166.4375 0 L 38.410156 0 C 17.203125 0 0 17.203125 0 38.410156 L 0 166.4375 C 0 187.644531 17.203125 204.847656 38.410156 204.847656 L 166.4375 204.847656 C 187.644531 204.847656 204.847656 187.644531 204.847656 166.4375 L 204.847656 38.410156 C 204.847656 17.203125 187.644531 0 166.4375 0 Z M 63.339844 173.886719 L 31.515625 173.886719 L 31.332031 78.601563 L 63.152344 78.601563 Z M 46.625 66.140625 L 46.441406 66.140625 C 36.039063 66.140625 29.328125 58.96875 29.328125 50.042969 C 29.328125 40.902344 36.253906 33.976563 46.84375 33.976563 C 57.429688 33.976563 63.921875 40.902344 64.136719 50.042969 C 64.136719 58.96875 57.398438 66.140625 46.625 66.140625 Z M 173.671875 173.886719 L 141.570313 173.886719 L 141.570313 122.121094 C 141.570313 109.59375 138.25 101.070313 127.046875 101.070313 C 118.488281 101.070313 113.875 106.824219 111.65625 112.394531 C 110.828125 114.394531 110.609375 117.136719 110.609375 119.9375 L 110.609375 173.886719 L 78.355469 173.886719 L 78.171875 78.601563 L 110.425781 78.601563 L 110.609375 92.050781 C 114.734375 85.683594 121.597656 76.664063 138.03125 76.664063 C 158.40625 76.664063 173.640625 89.960938 173.640625 118.550781 L 173.640625 173.886719 Z " />
                    </g>
                  </svg>
                </div>
              </a>

              <a href="">
                <div class="w-5  hover:scale-110 duration-300 hover:text-white text-gray-500 top-10 ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                    <path
                      d="M7.546875 0C3.390625 0 0 3.390625 0 7.546875L0 18.453125C0 22.609375 3.390625 26 7.546875 26L18.453125 26C22.609375 26 26 22.609375 26 18.453125L26 7.546875C26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2L18.453125 2C21.527344 2 24 4.46875 24 7.546875L24 18.453125C24 21.527344 21.53125 24 18.453125 24L7.546875 24C4.472656 24 2 21.53125 2 18.453125L2 7.546875C2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4C19.671875 4 19 4.671875 19 5.5C19 6.328125 19.671875 7 20.5 7C21.328125 7 22 6.328125 22 5.5C22 4.671875 21.328125 4 20.5 4 Z M 13 6C9.144531 6 6 9.144531 6 13C6 16.855469 9.144531 20 13 20C16.855469 20 20 16.855469 20 13C20 9.144531 16.855469 6 13 6 Z M 13 8C15.773438 8 18 10.226563 18 13C18 15.773438 15.773438 18 13 18C10.226563 18 8 15.773438 8 13C8 10.226563 10.226563 8 13 8Z"
                      fill="currentColor" />
                  </svg>
                </div>
              </a>

              <div class="w-[2px] bg-gray-700 h-24 "></div>
              <p class="text-gray-500 font-medium text-[20px] mt-3 -rotate-90">follow</p>
            </div>

            <div class="container _container lg:pt-62 md:pt-48 pt-28 relative  gap mx-auto md:grid grid-cols-2  block mb-10  gap-4   justify-center">
              <div class=" flex md:justify-end justify-center ">
                <div class="circles">

                </div>
                <div
                  class="py-4 relative   px-4 shadows animation  title-default__wrap bg-[#0a0f1a]  sm:w-80 h-64  w-64 sm:h-80 rounded-full flex justify-center ">
                  <div class="  rounded-full overflow-hidden    justify-center items-center  relative z-50 bg-red-500">
                    <img class=" w-[1300px] h-[300px]  bg-white " src="../assets/image/image.jpg" alt="" />
                  </div>

                </div>
              </div>
              <div class=" page-content w-full px-2 md:text-left text-center m py-5">
                <h2 class="text-[14px] h1 font-normal title-default__wrap text-gray-300 capitalize font-['Poppins'] tracking-[.1rem]">Full-stack
                  developer</h2>
                <h1 class="md:text-5xl h1 font-semibold text-3xl pb-3 capitalize title-default__wrap ">Waliu idowu</h1>
                <p class="title-default__wrap mr-6">“Hi, I’m Waliu, a full-stack developer. I’ve mastered web development from frontend to backend,
                  enhancing
                  my skills and problem-solving</p>

                <div class="flex title-default__wrap md:justify-start justify-center gap-5 mt-10 ">
                  <button
                    class=" shadows  h1 w-fit text-[14px] bg-gray-700  hover:bg-gray-400 hover:text-white duration-700 border-2  border-gray-400 text-white font-normal py-2 px-2 tracking-[.2rem] rounded-full"><a
                      href="" class="">View Work</a></button>

                  <button
                    class=" shadows  h1 w-fit text-[14px] hover:bg-primary duration-700 border-2  border-primary text-white font-normal py-2 px-2 tracking-[.2rem] bg-gray-700  rounded-full"><a
                      href="">Download CV</a></button>
                </div>

                <div class="w-full mt-5 flex md:justify-start justify-center">
                  <div class="bg-gray-900 animate-bounce rounded-full py-2 px-2">
                    <div class="w-5   text-white ">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                          d="M21,11.109L21,11.109c0-1.329-1.481-2.122-2.587-1.385L12,14L5.587,9.725C4.481,8.988,3,9.78,3,11.109v0 c0,0.556,0.278,1.076,0.741,1.385l7.15,4.766c0.672,0.448,1.547,0.448,2.219,0l7.15-4.766C20.722,12.185,21,11.666,21,11.109z"
                          fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>
      </section>
		</div>
	</div>
			
		</div>
	</div>
		<!-- <NuxtLayout
			name="custom"
			pageame="index"
			title="welcome"
		/> -->

    <section
        class="page-content bg-[#11141b] py-20 npx tailwindcss font-['Poppins'] ./assets/inpute.css -o ./assets/output.css --watchpx-4 w-full md:px-0 mx-auto ">
        <div class="container py-20 px-4  md:px-0 mx-auto">
          <h1 class="  text-4xl text-center py-8 page-content__block  font-normal">About Me</h1>
          <div class="md:flex block justify-center items-center gap-5">
            <div class="  md:w-1/3 w-full overflow-hidden px-2 h-96 py-2 shadows   border-4 bg-yellow-400 rounded-lg">
              <div class="bg-[url('../assets/image/image.jpg')] page-content__block-photo bg-cover  w-full h-full">
                <img src="../assets/image/image.jpg" class=" opacity-0 w-96" alt="">
              </div>

            </div>
            <div class="md:w-1/2 w-full">
              <h1 class="font-semibold py-4 text-3xl page-content__block"> I am <span class="text-yellow-400"> waliu</span></h1>
              <h1 class=" text-gray-500 text-[15px] page-content__block tracking-[.3rem]">WEB DEVELOPER & GRAPHIC DESIGN</h1>
              <P class="indent-8 page-content__block text-justify py-5">
                Hello, I’m Waliu, a full-stack developer. I craft frontend experiences and manage backend systems. I’ve
                gained comprehensive web development understanding, turning ideas into applications. This journey
                broadened my skills and opened creative problem-solving avenues. Stay tuned for project updates!
              </P>
              <p class="indent-8 text-justify page-content__block">
                Also, i am graphic designer with a knack for bringing brands to life. I create unique logos and business
                cards, and with my expertise in Photoshop and Corel Draw, I can cater to all your design needs
              </p>
              <div class=" w-full h-7 group py-5 overflow-idden">
                <div class="w-10 h-10    group-hover:w-[12.5rem] duration-500 bg-[#22252b]"></div>
                <button class=" page-content__block relative bottom-8 pl-3 font-semibold text-white tracking-[.2rem]">Download my CV</button>
              </div>
            </div>
          </div>
        </div>
        
      </section>


      <section class=" w-full font-['Poppins']  bg-[#0c0f16] ">
        <div class="w-[100%]  py-20  md:px-0 mx-auto">
          <div class="flex flex-col mx-10 gap-2 justify-center items-center">
            <h1 class="md:text-2xl text-xl text-center   font-semibold">MY TOOLS</h1>
            <div class="w-96 h-[1px] items-center  ctxx"></div>

            <Carousel :transition="1000" :wrap-around="true"   :breakpoints="breakpoints" class=" mt-20 gap-8 flex flex-wrap w-full justify-center items-center  ">
              <Slide v-for="item in state.hero" :key="item.id" class="group">
                <div
                  class="  w-64 group group-hover:scale-105 group-hover:bg-gray-800 duration-700  rounded-lg bg-secondary py-9 px-9  ">
                  <div class="py-5 gap-5 flex flex-col justify-center items-center">
                    <div
                      class="  flex justify-center  items-center w-[5rem] h-[5rem] rounded-3xl rotate-45 duration-500  group-hover:bg-gray-500 bg-gray-800  ">
                      <img class=" w-10  -rotate-45 " v-bind:src="item.image" alt="">
                    </div>

                     <h1 class=" text-[18px]   font-normal">{{ item.heroSection }}</h1>
                    
                  </div>
                </div>
              </Slide>

              <template #addons>
                <Navigation />
              </template>
            </Carousel>
          </div>
        </div>
      </section>
      <section class="w-full page-content py-10 bg-[#11141b] ">
        <div class="flex justify-center font-['Poppins']  w-[100%]  px-20  mx-auto  ">
          <div>
            <h1 class="text-3xl text-center page-content__block md:py-4 px-2 font">WORK & EXPERIENCE</h1>
            <div class=" w-full h-fit page-content__block flex justify-center items-cente">
              <div class="w-96 h-[1px]   ctxx"></div>
            </div>
            <div class="grid  items-end mt-20 md:grid-cols-2 grid-cols-1 gap-10">
              <div class="  duration-500 group-hover:scale-105 w-full  h-full py-6 md:px-6 px-2  bg-[#0c0f16]">
                <div class="flex justify-start gap-6">
                  <div class="flex  flex-col mt-2  justify-c gap-[1rem] items-center">
                    <div class="w-2 h-2   bg-tertiary rounded-full"></div>
                    <div class="w-[2px]  h-full bg-tertiary"></div>
                  </div>
                  <div class="   gap-[3rem]  ">
                    <h1 class="font-semibold mb-[1rem] page-content__block ">Full stack Web Developer</h1>
                    <div class=" flex flex-col ">
                      <h1 class="bg-tertiary page-content__block text-white text-[12px] py-1 px-4 font-semibold w-fit mb-5 h-fit">2018<span
                          class="font-bold">-</span> 2020</h1>
                      <p class=" page-content__block leading-6 text-[14px] pb-10 ">Over the past five years, I’ve specialized in front-end
                        development, mastering HTML, CSS, JavaScript, and frameworks like React.js and Vue.js. My diverse
                        project experience, ranging from simple websites to complex applications, has significantly
                        contributed to my growth as a developer.</p>
                    </div>
                  </div>


                </div>

                <div class="flex  justify-start gap-6">
                  <div class="flex  flex-col mt-2  justify-c gap-[1rem] items-center">
                    <div class="w-2 h-2   bg-tertiary rounded-full"></div>
                    <div class="w-[2px]  h-full bg-tertiary"></div>
                  </div>
                  <div class="   gap-[3rem]  ">
                    <h1 class="font-semibold mb-[1rem] page-content__block ">Back-End Developer</h1>
                    <div class=" flex flex-col ">
                      <h1 class="bg-tertiary page-content__block text-white text-[12px] py-1 px-4 font-semibold w-fit mb-5 h-fit">2020 <span
                          class="font-bold">-</span> 2023</h1>
                      <p class=" page-content__block leading-6 text-[14px] pb-10 ">My journey for past in 3 years in back-end development has
                        been marked by a variety of projects, each presenting unique challenges and learning
                        opportunities. From developing RESTful APIs to implementing complex database schemas, these
                        experiences have enriched my understanding of back-end development.</p>
                    </div>
                  </div>


                </div>
              </div>

              <div class="  duration-500 group-hover:scale-105  w-full mt-5 h-full py-6 md:px-6 px-2 6 bg-[#0c0f16]">
                <div class="flex justify-start gap-6">
                  <div class="flex  flex-col mt-2  justify-c gap-[1rem] items-center">
                    <div class="w-2 h-2   bg-tertiary rounded-full"></div>
                    <div class="w-[2px]  h-full bg-tertiary"></div>
                  </div>
                  <div class="   gap-[3rem]  ">
                    <h1 class="font-semibold page-content__block mb-[1rem] page-content__block ">UI/UX Designer</h1>
                    <div class=" flex flex-col ">
                      <h1 class="bg-tertiary  page-content__block text-white text-[12px] py-1 px-4 font-semibold w-fit mb-5 h-fit">2017 <span
                          class="font-bold">-</span> 2023</h1>
                      <p class=" page-content__block leading-6 text-[14px] pb-10 ">Throughout my career, I’ve worked on numerous projects,
                        each with its unique challenges and learning opportunities. From designing mobile apps to complex
                        web applications, each project has allowed me to apply and refine my UI/UX design skills and it
                        make me .</p>
                    </div>
                  </div>


                </div>

                <div class="flex justify-start gap-6">
                  <div class="flex  flex-col mt-2  justify-c gap-[1rem] items-center">
                    <div class="w-2 h-2   bg-tertiary rounded-full"></div>
                    <div class="w-[2px]  h-full bg-tertiary"></div>
                  </div>
                  <div class="   gap-[3rem]  ">
                    <h1 class="font-semibold mb-[1rem] page-content__block ">Graphic Design </h1>
                    <div class=" flex flex-col ">
                      <h1 class="bg-tertiary page-content__block text-white text-[12px] py-1 px-4 font-semibold w-fit mb-5 h-fit">2017 <span
                          class="font-bold">-</span> 2020</h1>
                      <p class=" leading-6 text-[14px] page-content__block pb-10 ">My professional journey began in the realm of graphic
                        design. This was my first love and the foundation of my digital career. I spent countless hours
                        mastering design tools and techniques, creating visually appealing and impactful designs</p>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="w-full py-10 bg-[#11141b]">
        <div class=" container px-5  md:px-20 mx-auto  ">
          <div>
            <h1 class="text-3xl text-center  font-extrabold py-4 ">My Skills</h1>
            <div class=" w-full h-fit  flex justify-center items-cente">
              <div class="w-96 h-[1px] items-center  ctxx"></div>
            </div>

            <div class="   gap-7 mt-20  grid  md:grid-cols-2  grid-cols-1  ">
              <div class=" flex flex-col gap-5 w-full">
                <div>
                  <div class="flex  mb-2 font-semibold  mr-4   justify-between                                       ">
                    <h1>Photoshop</h1>
                    <h1></h1>
                    <p>90%</p>
                  </div>
                  <div class="w-full rounded-full    bg-white h-1 ">
                    <div class=" bg-tertiary w-[90%] h-full"></div>
                  </div>
                </div>

                <div>
                  <div class="flex  mb-2 font-semibold  mr-4   justify-between                                       ">
                    <h1>CorelDraw</h1>
                    <p>95%</p>
                  </div>
                  <div class="w-full rounded-full    bg-white h-1 ">
                    <div class=" bg-tertiary w-[95%] h-full"></div>
                  </div>
                </div>

                <div>
                  <div class="flex  mb-2 font-semibold  mr-4   justify-between                                       ">
                    <h1>Figma</h1>
                    <p>60%</p>
                  </div>
                  <div class="w-full rounded-full    bg-white h-1 ">
                    <div class=" bg-tertiary w-[60%] h-full"></div>
                  </div>
                </div>

                <div>
                  <div class="flex  mb-2 font-semibold  mr-4   justify-between                                       ">
                    <h1>Canvas</h1>
                    <p>70%</p>
                  </div>
                  <div class="w-full rounded-full    bg-white h-1 ">
                    <div class=" bg-tertiary w-[70%] h-full"></div>
                  </div>
                </div>
              </div>
              <div class=" flex flex-col gap-5 w-full">
                <div>
                  <div class="flex  mb-2 font-semibold  mr-4   justify-between                                       ">
                    <h1>HTML5 CSS3</h1>
                    <p>90%</p>
                  </div>
                  <div class="w-full rounded-full    bg-white h-1 ">
                    <div class=" bg-tertiary w-[90%] h-full"></div>
                  </div>
                </div>

                <div>
                  <div class="flex  mb-2 font-semibold  mr-4   justify-between                                       ">
                    <h1>Javascript</h1>
                    <p>75%</p>
                  </div>
                  <div class="w-full rounded-full    bg-white h-1 ">
                    <div class=" bg-tertiary w-[75%] h-full"></div>
                  </div>
                </div>

                <div>
                  <div class="flex  mb-2 font-semibold  mr-4   justify-between                                       ">
                    <h1>Vue3</h1>
                    <p>60%</p>
                  </div>
                  <div class="w-full rounded-full    bg-white h-1 ">
                    <div class=" bg-tertiary w-[60%] h-full"></div>
                  </div>
                </div>

                <div>
                  <div class="flex  mb-2 font-semibold  mr-4   justify-between                                       ">
                    <h1>Jquery</h1>
                    <p>80%</p>
                  </div>
                  <div class="w-full rounded-full    bg-white h-1 ">
                    <div class=" bg-tertiary w-[70%] h-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section class=" w-full font-['Poppins']  bg-[#0c0f16] ">
        <div class="w-[100%]  py-20  md:px-0 mx-auto">
          <div class="flex flex-col mx-10 gap-2 justify-center items-center">

            <div class="w-96 h-[1px] items-center  ctxx"></div>
            <h1 class="md:text-3xl text-2xl text-center   font-semibold">Let's See My Work</h1>
            <div class="flex jus">
              <h1 class="  tracking-wider">Selected work I've taken on in the past.</h1>

            </div>
            <div class=" mt-20 gap-8 flex flex-wrap justify-center md:w-[90%] sm:w-[90%] items-center  ">
              <div class="grid sm:grid-cols-2 grid-cols-1 gap-5 text-left  ">

                <div v-for="slide in tools" class="group">
                  <div :key="slide"
                    class="py-1 px-1 rounded-2xl overflow-hidden duration-700 bg-gray-600 group-hover:shadow-lg group-hover:scale-105  ease-in-out h-fit  ">
                    <div class=" md:h-[500px]  rounded-2xl bg-[url('../assets/image/hero.jpg')] ">
                      <div
                        class=" grid grid-rows-2 h-full justify-items-stretch group overflow-hidden transform  duration-75">
                        <div class=" w-full h-full ">

                        </div>
                        <div
                          class=" plas h-full w-full flex  items-end bg-gradient-to-t from-black to-transparent   gro duration-300">
                          <div class="  px-2 mb-2  flex-col gap-4   group-hover:bottom-2 ">
                            <h1 class="text-white text-xl text-left md:text-2xl font-bold">{{ slide.header }}</h1>
                            <p class="text-xs  py-2 transition-all duration-300 text-white text-left text-opacity-80">{{
                              slide.description }}</p>

                            <ul class=" transition-all flex duration-300 flex-wrap gap-2">
                              <li v-for="subItem in slide.items" :key="subItem.id"
                                class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">{{
                                  subItem.text }}
                              </li>


                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div v-for="item in hero" :key="item.id" class="group">
                <div
                  class="  w-64 group group-hover:scale-105 group-hover:bg-gray-800 duration-700  rounded-lg bg-secondary py-9 px-9  ">
                  <div class="py-5 gap-5 flex flex-col justify-center items-center">
                    <div
                      class="  flex justify-center items-center w-[5rem] h-[5rem] rounded-3xl rotate-45 duration-500  group-hover:bg-gray-500 bg-gray-800  ">
                      <img class=" w-[3rem]   -rotate-45 " src="@/assets/image/Tools.svg" alt="">
                    </div>

                    <h1 class=" text-[18px]   font-normal">{{ item.heroSection }}</h1>
                    <p class="text-center leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque et
                      unde
                      impedit illo, eveniet hic inventore </p>
                  </div>
                </div>
              </div> -->
             

            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="  font-['Poppins'] bg-[url('../assets/image/hero.jpg')] bg-no-repeat justify-center bg-contain   ">
        <div class="w-full  bg-[#11141b]  flex justify-center bg-opacity-95 h-full ">
          <div class="container items-center    block  md:flex justify-center">
            <div class="  flex justify-center md:justify-end">
              <div class="py-4 px-4 shadows bg-[#0a0f1a]  md:full h-full flex justify-center overflow-hidden ">
                <div class=" overflow-hiddenl  bg-red-500">
                  <img class=" w-full  bg-white " src="@/assets/image/hero.png" alt="" />
                </div>

              </div>
            </div>
            <div class=" w-full px-2 page-content md:text-left text-center md:w-1/2 py-5">
              <h2 class="text-[14px] font-normal text-gray-300 capitalize font-['Poppins'] tracking-[.1rem] page-content__block">CONTACT ME
              </h2>
              <h1 class="md:text-3xl font-semibold text-xl pb-1 capitalize page-content__block ">Get in touch with me today.</h1>
              <div class="h-1 w-10 mb-3 bg-primary"></div>
              <p class="page-content__block">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>

              <div class="flex md:justify-start justify-center gap-5 mt-10 ">
                <form action="" class="  gap-3 w-full">
                  <div class="flex gap-2 ">
                    <div class="input-containers page-content__block w-full">
                      <input type="text" placeholder=" " id="name"
                        class="  input-field  h-10 w-full border-2 border-gray-600  outline-none py-1 px1 bg-transparent">
                      <span for="name" class="input-label text-slate-600 font-normal">Your Name </span>
                    </div>

                    <div class="input-containers page-content__block w-full">
                      <input type="text" placeholder=" " id="name"
                        class="  input-field  h-10 w-full border-2 border-gray-600 outline-none py-1 px1 bg-transparent">
                      <span for="name" class="input-label text-slate-600 font-normal">Your Email </span>
                    </div>

                  </div>
                  <div class="input-containers1 page-content__block w-full">

                    <textarea id="message" cols="30" rows="10"
                      class="input-field1 w-full border-gray-600  input-field1 bg-transparent mt-5 border-2 py-2 px-2 outline-none"></textarea>
                    <label for=" message" class="input-label1 text-slate-600">Your Message</label>



                  </div>
                </form>




              </div>
            </div>
          </div>
        </div>
      </section>
		
		
	
     <NavigationFooter></NavigationFooter>
	
	
 	</div>

</template>
<style lang='scss' scoped>
.title-default {
	height: 100vh;
	height: 100dvh;
	display: flex;
	align-items: center;
	justify-content: center;
}



.title-default__wrap {
	will-change: transform;
}
.title-default__wrap {
	will-change: transform;
}
.tex {

background: -webkit-linear-gradient(-45deg, #c266e8, #03fcec, #c266e8);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent
}

.shadows {
-webkit-box-shadow: 4px -6px 61px 24px rgba(0, 0, 0, 0.47);
-moz-box-shadow: 4px -6px 61px 24px rgba(0, 0, 0, 0.47);
box-shadow: 4px -6px 61px 24px rgba(0, 0, 0, 0.47);
}

.ctx {
font-family: 'Adobe Fan Heiti Std B';
}

.ctxx {
background-image: linear-gradient(to right, transparent, rgb(255, 255, 255) 100px, transparent 400px);
}

.blurssss {
background-color: black;
}

.images {
background-image: url(../assets/image/hero.png);
background-color: rgb(248 250 252);
}

.input-containers {
position: relative;
margin-top: 2rem;
}

.input-field {
width: 100%;
background: transparent;
outline: none;

color: white;
padding: 0 0 0.5rem 0.5rem;
}

.input-field:focus+.input-label,
.input-field:not(:placeholder-shown)+.input-label {
transform: translateY(-1.6rem);
font-size: 0.8rem;
color: white;

}

.input-label {
position: absolute;
bottom: -15px;
left: 0;
height: 3rem;
pointer-events: none;
padding-left: 0.5rem;
transform-origin: left;
transition: all 0.3s ease;
}

.input-containers1 {
position: relative;
margin-top: 2rem;
}

.input-field1 {
width: 100%;
background: transparent;
outline: none;

color: white;
padding: 0 0 0.5rem 0.5rem;
}

.input-field1:focus+.input-label1,
.input-field:not(:placeholder-shown)+.input-label {
transform: translateY(-3.9rem);
font-size: 0.8rem;
color: white;

}

.input-label1 {
position: absolute;
bottom: 200px;
left: 0;
height: 3rem;
pointer-events: none;
padding-left: 0.5rem;
transform-origin: left;
transition: all 0.3s ease;
}

.animation {
z-index: 2;
overflow: hidden;
}

.animation::before {
content: '';
z-index: -10;
position: absolute;
top: -19%;
width: 50%;
height: 400px;

background: repeating-conic-gradient(#ffc209 0%, #ffc209 5%, transparent 5%, transparent 40%, #ffc209 50%);
/* background: linear-gradient(#ffc209,#03fc18); */
animation: rotate 4s linear infinite;
}

@keyframes rotate {
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
}

.animation::after {
content: '';
z-index: -10;
position: absolute;
inset: 3px;
background-color: #0a0f1a;
border-radius: 100%;
}

.circles::before {
content: '';
position: absolute;
z-index: -10;
left: px;
width: 20px;
height: 20px;
border-radius: 50%;
background: #ffc209;
box-shadow: 0 0 5px #fbff00, 0 0 20px #fbff00;
opacity:12;
}

#cursor {
width: 10px;
height: 10px;
background: white;
pointer-events: none;
}

</style>