<script setup>
import gra10 from "@/assets/image/graphic12.jpg"
import gra9 from "@/assets/image/graphic11.jpg"
import gra8 from "@/assets/image/graphic10.jpg"
import gra7 from "@/assets/image/graphic9.jpg"
import gra6 from "@/assets/image/graphic7.jpg"
import gra5 from "@/assets/image/graphic6.jpg"
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import gra4 from "@/assets/image/graphic5.jpg"
import gra3 from "@/assets/image/graphic4.jpg"
import gra2 from "@/assets/image/graphic3.jpg"
import gra1 from "@/assets/image/graphic2.jpg"
const state = reactive({

    hero: [

        {
            id: 1,
            image: gra2,
        },
        {
            id: 2,
            image: gra3,
        },
        {
            id: 3,
            image: gra6,
        },
        {
            id: 4,
            image: gra7,
        },
        {
            id: 5,
            image: gra1,
        },
        {
            id: 6,
            image: gra5,
        },
        {
            id: 7,
            image: gra4,
        },
        {
            id: 8,
            image: gra8,
        },
        {
            id: 9,
            image: gra9,
        },
        {
            id: 10,
            image: gra10,
        },
        
    ]
});


// const main = ref();
//     let ctx;
//     let smoother;

//     const scrollTo = () => {
//       smoother.scrollTo(general.pageBg, true, 'top top');
//     };

//     onMounted(() => {
//       ctx = gsap.context(() => {
//         // create the smooth scroller FIRST!
//         smoother = ScrollSmoother.create({
//           smooth: 6, // seconds it takes to "catch up" to native scroll position
//           effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
//         });
//         ScrollTrigger.create({
//           trigger:general.pageBg,
//           pin: true,
//           start: 'center center',
          
//           markers: true,
//         });
//       }, main.value);
//     });
   
definePageMeta(transition)
const settings = ref({
    itemsToShow: 1,
    snapAlign: 'center',
});

const breakpoints = ref({
    700: {
        itemsToShow: 2,
        snapAlign: 'center',
    },
    100: {
        itemsToShow: 1.5,
        snapAlign: 'center',
    },
    1024: {
        itemsToShow: 3,
        snapAlign: 'start',
    },
});
watch(() =>
    [general.isTransitionFinish, general.isPreloaderVisible],
    ([transitionFinish, preloaderVisibility]) => {

        if (transitionFinish && !preloaderVisibility) {
            contentAnimation({ type: 'text', element: '.page-content__block' })
            contentAnimation({ type: 'image', element: '.page-content__block-photo' })
        }
    })



</script>
<template>
    <div :class="general.pageBg" ref="{main}">
        <NuxtLayout name="custom" page-name="about" title="About">
        </NuxtLayout>
        <div class=" container mx-auto px-4">

<div class=" mt-40">
    <div class=" w-full py-10  ">
        <div
            class=" static md:sticky top-32 bg-black 1 page-content grid grid-cols-1 md:grid-cols-2 mb-10 justify-center items-center gap-10">
            <div
                class="  rounded-xl skrew page-content__block-photo bg-[url('@/assets/image/project1.jpg')] bg-cover bg-no-repeat justify-center   sm:h-96 h-fit overflow-hidden">
                <img src="@/assets/image/project1.jpg" alt="  " class="h-full sm:hidden " srcset="">
            </div>

            <div>
                <h2
                    class=" page-content__block text-3xl font-semibold tracking-widest text-primary text-center">
                    Abanise
                </h2>
                <p class=" page-content__block mt-4 text-center">Built a platform that will enable these
                    companies to be
                    selling Scratch for (WAEC, NECO, NABTEB) , to check OLEVEL, Also PIN token for
                    (GCEWAEC, GCENECO, JAMB, GCENABTEB) for Registration, And then they sell MTN
                    data bundle and card, and soon on </p>
                <ul class=" my-10  transition-all justify-center flex duration-300 flex-wrap gap-2">
                    <li
                        class="text-white page-content__block  text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        vue3
                    </li>

                    <li
                        class="text-white page-content__block  text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        Nuxt3
                    </li>
                    <li
                        class="text-white  page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        Mangoodb
                    </li>
                    <li
                        class="text-white  page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        Nodejs
                    </li>
                    <li
                        class="text-white text-xs px-3 py-1  page-content__block rounded-full border w-fit  border-white">
                        express.js
                    </li>
                    <li
                        class="text-white text-xs px-3 py-1  page-content__block rounded-full border w-fit  border-white">
                        paystack.js
                    </li>
                    <li
                        class="text-white text-xs  page-content__block px-3 py-1 rounded-full border w-fit  border-white">
                        JWT
                    </li>
                </ul>

                <div class="w-full justify-center flex">
                   <a target="_blank" href="https://www.abaniseedu.com/"
                        class=" font-norms  bg-primary rounded-xl overflow-visible py-1 px-6 mt-5 button ">
                        visit </a>
                </div>
            </div>
        </div>

        <div
            class=" static md:sticky top-32 bg-black page-content mt-48 grid grid-cols-1 md:grid-cols-2 mb-10 justify-center items-center gap-10">
            <div class="hidden md:block">
                <h2
                    class=" page-content__block text-3xl tracking-widest font-semibold text-primary text-center ">
                    SmtStream app</h2>
                <p class=" page-content__block mt-4 text-center">
                    i developed this music app using vue3 but JavaScript it was control it, which allows
                    users to control
                    the audio playback by playing, pausing, skipping to the next or previous track. The
                    project
                    has helped me improve my technical skills, and it took me one month to implement the
                    basic functionalities.
                    I have also implemented measures to prevent users from downloading the music expect i
                    allow it. </p>
                <ul class=" my-10  transition-all justify-center flex duration-300 flex-wrap gap-2">
                    <li
                        class="text-white page-content__block  text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        vue3
                    </li>

                    <li
                        class="text-white page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        Nuxt3
                    </li>

                    <li
                        class="text-white  page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        Music API
                    </li>

                </ul>

                <div class="w-full justify-center flex">
                   <a target="_blank" href="https://smooth-stream-vncx.vercel.app/"
                        class=" font-norms  bg-primary rounded-xl overflow-visible py-1 px-6 mt-5 button ">
                        visit </a>
                </div>
            </div>


            <div
                class="  rounded-xl skrew1 page-content__block-photo bg-[url('@/assets/image/project2.jpg')] bg-cover bg-no-repeat justify-center   sm:h-96 h-fit  overflow-hidden">
                <img src="@/assets/image/project2.jpg" alt="  "
                    class=" smothsmeth picture sm:hidden block" srcset="">
            </div>

            <div class="block  md:hidden">
                <h2
                    class=" page-content__block text-3xl tracking-widest font-semibold text-primary text-center ">
                    SmtStream app</h2>
                <p class=" page-content__block mt-4 text-center">
                    i developed this music app using vue3 but JavaScript it was control it, which allows
                    users to control
                    the audio playback by playing, pausing, skipping to the next or previous track. The
                    project
                    has helped me improve my technical skills, and it took me one month to implement the
                    basic functionalities.
                    I have also implemented measures to prevent users from downloading the music expect i
                    allow it. </p>
                <ul class=" my-10  transition-all justify-center flex duration-300 flex-wrap gap-2">
                    <li
                        class="text-white page-content__block  text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        vue3
                    </li>

                    <li
                        class="text-white page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        Nuxt3
                    </li>

                    <li
                        class="text-white  page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        Music API
                    </li>

                </ul>

                <div class="w-full justify-center flex">
                   <a target="_blank" href="https://smooth-stream-vncx.vercel.app/"
                        class=" font-norms  bg-primary rounded-xl overflow-visible py-1 px-6 mt-5 button ">
                        visit </a>
                </div>
            </div>



        </div>



        <div
            class=" static md:sticky top-32 bg-black 3 page-content mt-48 grid grid-cols-1 md:grid-cols-2 mb-10 justify-center items-center gap-10">
            <div
                class="  rounded-xl skrew page-content__block-photo bg-[url('@/assets/image/project3.jpg')] bg-cover bg-no-repeat justify-center   sm:h-96 h-fit overflow-hidden">
                <img src="@/assets/image/project3.jpg" alt="  " class="h-full sm:hidden " srcset="">
            </div>

            <div>
                <h2
                    class=" page-content__block text-3xl font-semibold tracking-widest text-primary text-center">
                    Bitlocus</h2>
                <p class=" page-content__block mt-4 text-center">Built this platform for pratices to know
                    how to using a gsap with nuxt3 and how it is work, and GSAP is a popular animation
                    library that allows developers to create complex animations and interactions for the
                    web, AlsoNuxt3 is a modern web development framework that provides a powerful set of
                    tools for building fast and scalable web applications </p>
                <ul class=" my-10  transition-all justify-center flex duration-300 flex-wrap gap-2">
                    <li
                        class="text-white page-content__block  text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        vue3
                    </li>

                    <li
                        class="text-white page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        Nuxt3
                    </li>



                </ul>

                <div class="w-full justify-center flex">
                   <a target="_blank" href="https://crypto-web-5og7.vercel.app/"
                        class=" font-norms  bg-primary rounded-xl overflow-visible py-1 px-6 mt-5 button ">
                        visit </a>
                </div>
            </div>
        </div>

        <div
            class=" static md:sticky top-32 bg-black 4 page-content mt-48 grid grid-cols-1 md:grid-cols-2 mb-10 justify-center items-center gap-10">

            <div class=" hidden md:block ">
                <h2
                    class=" page-content__block text-xl tracking-widest  sm:text-3xl font-semibold text-primary text-center">
                    Exam Quiz Game</h2>
                <p class=" page-content__block mt-4 text-center"> i built a quiz game for Abanise that they
                    use to gift years bonus to customers who pass the exam. The quiz consists of three
                    questions about the business, and the customer must score at least 2 out of 3 to pass.
                    If the customer passes the exam, they will receive a 1 GB data bundle for any network.
                    Also i implemented a feature that prevents customers from playing the game twice on the
                    same phone number or device.</p>
                <ul class=" my-10  transition-all justify-center flex duration-300 flex-wrap gap-2">
                    <li
                        class="text-white page-content__block  text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        vue3
                    </li>

                    <li
                        class="text-white page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        Nuxt3
                    </li>
                    <li
                        class="text-white  page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        Mangoodb
                    </li>
                    <li
                        class="text-white  page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        Nodejs
                    </li>
                    <li
                        class="text-white text-xs px-3 py-1  page-content__block rounded-full border w-fit  border-white">
                        express.js
                    </li>
                    <li
                        class="text-white text-xs px-3 py-1  page-content__block rounded-full border w-fit  border-white">
                        Network API
                    </li>
                    <li
                        class="text-white text-xs  page-content__block px-3 py-1 rounded-full border w-fit  border-white">
                        JWT
                    </li>
                </ul>

                <div class="w-full justify-center flex">
                   <a target="_blank" href="https://www.abaniseedu.com/qiuz"
                        class=" font-norms  bg-primary rounded-xl overflow-visible py-1 px-6 mt-5 button ">
                        visit </a>
                </div>
            </div>

            <div
                class="  rounded-xl skrew1 page-content__block-photo bg-[url('@/assets/image/project4.jpg')] bg-cover bg-no-repeat justify-center   sm:h-96 h-fit  overflow-hidden">
                <img src="@/assets/image/project4.jpg" alt="  "
                    class=" smothsmeth picture sm:hidden block " srcset="">
            </div>

            <div class="block  md:hidden  ">
                <h2
                    class=" page-content__block   tracking-widest  text-3xl font-semibold text-primary text-center">
                    Exam Quiz Game</h2>
                <p class=" page-content__block t mt-4 text-center"> i built a quiz game for Abanise that
                    they use to gift years bonus to customers who pass the exam. The quiz consists of three
                    questions about the business, and the customer must score at least 2 out of 3 to pass.
                    If the customer passes the exam, they will receive a 1 GB data bundle for any network.
                    Also i implemented a feature that prevents customers from playing the game twice on the
                    same phone number or device.</p>
                <ul class=" my-10  transition-all justify-center flex duration-300 flex-wrap gap-2">
                    <li
                        class="text-white page-content__block  text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        vue3
                    </li>

                    <li
                        class="text-white page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        Nuxt3
                    </li>
                    <li
                        class="text-white  page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        Mangoodb
                    </li>
                    <li
                        class="text-white  page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        Nodejs
                    </li>
                    <li
                        class="text-white text-xs px-3 py-1  page-content__block rounded-full border w-fit  border-white">
                        express.js
                    </li>
                    <li
                        class="text-white text-xs px-3 py-1  page-content__block rounded-full border w-fit  border-white">
                        Network API
                    </li>
                    <li
                        class="text-white text-xs  page-content__block px-3 py-1 rounded-full border w-fit  border-white">
                        JWT
                    </li>
                </ul>

                <div class="w-full justify-center flex">
                   <a target="_blank" href="https://www.abaniseedu.com/qiuz"
                        class=" font-norms  bg-primary rounded-xl overflow-visible py-1 px-6 mt-5 button ">
                        visit </a>
                </div>
            </div>



        </div>

        <div
            class="static md:sticky top-32 bg-black page-content mt-48 grid grid-cols-1 md:grid-cols-2 mb-10 justify-center items-center gap-10">
            <div
                class="  rounded-xl skrew page-content__block-photo bg-[url('@/assets/image/project5.jpg')] bg-cover bg-no-repeat justify-center   sm:h-96 h-fit overflow-hidden">
                <img src="@/assets/image/project5.jpg" alt="  " class="h-full sm:hidden " srcset="">
            </div>

            <div>
                <h2
                    class=" page-content__block text-3xl tracking-widest font-semibold text-primary text-center">
                    Midjourning
                </h2>
                <p class=" page-content__block mt-4 text-center">this not my first project but the project i
                    save to github before my system corrupt, built this platform for practicing your coding
                    skills and learning how to use GitHub. The platform allows owners to sell shoes, the
                    latest fashion shows, and some of the latest clothes. It’s great that you are using your
                    skills to create something useful and practical </p>
                <ul class=" my-10  transition-all justify-center flex duration-300 flex-wrap gap-2">
                    <li
                        class="text-white page-content__block  text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        vue3
                    </li>

                    <li
                        class="text-white page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        Nuxt3
                    </li>
                    <li
                        class="text-white page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        tailwindcss
                    </li>

                </ul>

                <div class="w-full justify-center flex">
                   <a target="_blank" href="https://midjourney-black.vercel.app/"
                        class=" font-norms  bg-primary rounded-xl overflow-visible py-1 px-6 mt-5 button ">
                        visit </a>
                </div>
            </div>
        </div>

        <div
            class=" 6 static md:sticky top-32 bg-black page-content mt-48 grid grid-cols-1 md:grid-cols-2 mb-10 justify-center items-center gap-10">

            <div class=" hidden md:block ">
                <h2
                    class=" page-content__block text-3xl tracking-widest font-semibold text-primary text-center">
                    Micakin</h2>
                <p class=" page-content__block mt-4 text-center">This Website are already been exist but i
                    just use to practices and check my skill </p>
                <ul class=" my-10  transition-all justify-center flex duration-300 flex-wrap gap-2">
                    <li
                        class="text-white page-content__block  text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        vue3
                    </li>

                    <li
                        class="text-white page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        Nuxt3
                    </li>
                    <li
                        class="text-white page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        tailwindcss
                    </li>

                </ul>

                <div class="w-full justify-center flex">
                   <a target="_blank" href="https://micahil.vercel.app/"
                        class=" font-norms  bg-primary rounded-xl overflow-visible py-1 px-6 mt-5 button ">
                        visit </a>
                </div>
            </div>

            <div
                class="  rounded-xl skrew1 page-content__block-photo bg-[url('@/assets/image/project6.jpg')] bg-cover bg-no-repeat justify-center   sm:h-96 h-fit  overflow-hidden">
                <img src="@/assets/image/project6.jpg" alt="  "
                    class=" smothsmeth picture sm:hidden block " srcset="">
            </div>


            <div class=" block  md:hidden ">
                <h2
                    class=" page-content__block text-3xl tracking-widest font-semibold text-primary text-center">
                    Micakin</h2>
                <p class=" page-content__block mt-4 text-center">This Website are already been exist but i
                    just use to practices and check my skill </p>
                <ul class=" my-10  transition-all justify-center flex duration-300 flex-wrap gap-2">
                    <li
                        class="text-white page-content__block  text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        vue3
                    </li>

                    <li
                        class="text-white page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        Nuxt3
                    </li>
                    <li
                        class="text-white page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                        tailwindcss
                    </li>

                </ul>

                <div class="w-full justify-center flex">
                   <a target="_blank" href="https://micahil.vercel.app/"
                        class=" font-norms  bg-primary rounded-xl overflow-visible py-1 px-6 mt-5 button ">
                        visit </a>
                </div>
            </div>


        </div>

        <div class=" 6  static md:sticky  top-32 bg-black page-content py-5 gap-10">
            <h1 class="md:text-2xl text-xl text-center py-3 tracking-widest  font-medium">My past works on graphic design</h1>
           <div class="w-full justify-center flex items-center"> <div class="w-96 h-[1px] items-center  ctxx"></div></div>

            <Carousel :transition="1000" :wrap-around="true" :breakpoints="breakpoints"
                class=" mt-20 gap-8 flex flex-wrap w-full justify-center items-center  ">
                <Slide v-for="item in state.hero" :key="item.id" class="group">
                    <div
                        class=" md:mx-3 mx-1  group group-hover:scale-105 group-hover:bg-gray-800 duration-700  rounded-lg bg-secondary py-2 px-2 md:py-6 md:px-6  ">
                        <div class="md:py-5 py-2  gap-5 flex flex-col justify-center items-center">
                            <img class=" w-full    " v-bind:src="item.image" alt="">
                           

                          

                        </div>
                    </div>
                </Slide>

                <template #addons>
                    <Navigation />
                </template>
            </Carousel>


        </div>

    </div>
    <div class="w-full flex justify-center">
      <h1 class=" text-normal text-center font-normal text-primary tracking-widest">Thanks you for view my website, click the below social button icon to contact me</h1>

    </div>
                        <NavigationFooter></NavigationFooter>
</div>
<!-- <div
    v-for="_ in 10"
    class="page-content__block p1"
>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat at, rerum, atque odio molestias fugit vel facere iure nulla maiores pariatur cum libero beatae impedit iusto enim officiis, minima animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat at, rerum, atque odio molestias fugit vel facere iure nulla maiores pariatur cum libero beatae impedit iusto enim officiis, minima animi.
</div> -->
</div>
    </div>
</template>
<style lang='scss' scoped>
.ctx {
font-family: 'Adobe Fan Heiti Std B';
}

.ctxx {
background-image: linear-gradient(to right, transparent, rgb(255, 255, 255) 100px, transparent 400px);
}
.skrew {
    border-radius: 15px;
    box-shadow: 0 60px 123px -25px hsla(225, 2%, 62%, .42), 0 35px 75px -35px hsla(225, 2%, 62%, .08);
    -webkit-filter: blur(0);
    filter: blur(0);

    opacity: 1;
    -webkit-transform: perspective(800px) rotateY(25deg) scale(.8) rotateX(10deg);
    transform: perspective(800px) rotateY(25deg) scale(.8) rotateX(10deg);
    transition: all .6s ease;

}

.skrew1 {
    border-radius: 15px;
    box-shadow: 0 60px 123px -25px hsla(225, 2%, 62%, .42), 0 35px 75px -35px hsla(225, 2%, 62%, .08);
    -webkit-filter: blur(0);
    filter: blur(0);

    opacity: 1;
    -webkit-transform: perspective(800px) rotateY(25deg) scale(.8) rotateX(10deg);
    transform: perspective(800px) rotateY(-25deg) scale(.8) rotateX(10deg);
    transition: all .6s ease;
}

.button {

    padding: .5rem .9rem;
    text-transform: lowercase;
    font-family: "Cyborg";
    font-weight: 900;
    font-size: 1.1rem;
    background: #ffc209;
    background-color: #ffc209;
    background-image: linear-gradient(315deg, #ffc209 0%, #ffd65b 100%);
    border: none;
    border-radius: 7px;
    box-shadow: 9px 7px 32px -11px rgba(20, 233, 86, 0.74);
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    outline: none;
    position: relative;
}

.button::before {
    content: '';
    border-radius: 7px;
    min-width: calc(100px + 12px);
    min-height: calc(43px + 12px);
    border: 3px solid #ffc209;
    box-shadow: 0 0 60px #ffc209;
    position: absolute;
    overflow: visible;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all .3s ease-in-out 0s;
}

.button:hover,
.button:focus {
    transform: translateY(-6px);
}

.button:hover::before,
.button:focus::before {
    opacity: 1;
}

// .button::after {
//     content: '1111';
//     width: 30px;
//     height: 30px;
//     border-radius: 7px;
//     border: 6px solid #ff0000;
//     position: absolute;
//     display: flex;
//     z-index: -1;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     animation: ring 1.5s infinite;

// }

// .button:hover::after,
// .button:focus::after {
//     animation: none;
//     display: none;
// }

@keyframes ring {
    0% {
        width: 30px;
        height: 30px;
        opacity: 1;
    }

    100% {
        width: 150px;
        height: 60px;
        opacity: 0;
    }
}

.skrew:hover {
    -webkit-transform: perspective(800px) rotateY(25deg) scale(.8) rotateX(20deg);
    transform: perspective(800px) rotateY(0deg) scale(.8) rotateX(0deg);
}

.skrew1:hover {
    -webkit-transform: perspective(800px) rotateY(25deg) scale(.8) rotateX(20deg);
    transform: perspective(800px) rotateY(0deg) scale(.8) rotateX(0deg);
   
}

// .page-content__block {
// 	padding-bottom: 32px;
// }

body {
    height: fit-content !important;

}
</style>