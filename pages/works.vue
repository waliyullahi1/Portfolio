<script setup>

definePageMeta(transition)

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
    <div :class="general.pageBg">
        <NuxtLayout name="custom" page-name="about" title="About">

            <div class=" container mx-auto px-4">

                <div class=" mt-40">
                    <div class=" w-full py-10  ">
                        <div class=" page-content grid grid-cols-1 md:grid-cols-2 mb-10 justify-center items-center gap-10">
                            <div class="  rounded-xl skrew page-content__block-photo bg-[url('../assets/image/project1.jpg')] bg-cover bg-no-repeat justify-center   h-96 overflow-hidden">
                                <!-- <img src="../assets/image/project1.jpg" alt=" h-full hidden page-content__block-photo " class="" srcset="">-->
                            </div> 

                            <div>
                                <h2 class=" page-content__block text-4xl font-semibold text-primary text-center">ABANISE
                                    COMPANY</h2>
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
                                        class="text-white page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Nuxt3
                                    </li>
                                    <li class="text-white  page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Mangoodb
                                    </li>
                                    <li class="text-white  page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Nodejs
                                    </li>
                                    <li class="text-white text-xs px-3 py-1  page-content__block rounded-full border w-fit  border-white">
                                        express.js
                                    </li>
                                    <li class="text-white text-xs px-3 py-1  page-content__block rounded-full border w-fit  border-white">
                                        paystack.js
                                    </li>
                                    <li class="text-white text-xs  page-content__block px-3 py-1 rounded-full border w-fit  border-white">
                                        JWT
                                    </li>
                                </ul>

                                <div class="w-full justify-center flex">
                                    <a href="https://www.abaniseedu.com/" class=" font-norms  bg-primary rounded-xl overflow-visible py-1 px-6 mt-5 button "> visit </a>
                                </div>
                            </div>
                        </div>

                        <div class=" page-content mt-48 grid grid-cols-1 md:grid-cols-2 mb-10 justify-center items-center gap-10">
                            <div>
                                <h2 class=" page-content__block text-4xl font-semibold text-primary text-center">smoothsmell music app</h2>
                                <p class=" page-content__block mt-4 text-center">fgudshgsdnfjbgdshnfuvbdn rjgeisurjbnsdf rgjsibdrrrrghfgjfsgud</p>
                                <ul class=" my-10  transition-all justify-center flex duration-300 flex-wrap gap-2">
                                    <li
                                        class="text-white page-content__block  text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        vue3
                                    </li>

                                    <li
                                        class="text-white page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Nuxt3
                                    </li>
                                    <li class="text-white  page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Mangoodb
                                    </li>
                                    <li class="text-white  page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Nodejs
                                    </li>
                                    <li class="text-white text-xs px-3 py-1  page-content__block rounded-full border w-fit  border-white">
                                        express.js
                                    </li>
                                    <li class="text-white text-xs px-3 py-1  page-content__block rounded-full border w-fit  border-white">
                                        paystack.js
                                    </li>
                                    <li class="text-white text-xs  page-content__block px-3 py-1 rounded-full border w-fit  border-white">
                                        JWT
                                    </li>
                                </ul>

                                <div class="w-full justify-center flex">
                                    <a href="https://www.abaniseedu.com/" class=" font-norms  bg-primary rounded-xl overflow-visible py-1 px-6 mt-5 button "> visit </a>
                                </div>
                            </div>
                            
                            <div class="  rounded-xl skrew1 page-content__block-photo bg-[url('../assets/image/project2.jpg')] bg-cover bg-no-repeat justify-center   h-96 overflow-hidden">
                                <!-- <img src="../assets/image/project1.jpg" alt=" h-full hidden page-content__block-photo " class="" srcset="">-->
                            </div> 

                          
                        </div>

                        <div class=" page-content mt-48 grid grid-cols-1 md:grid-cols-2 mb-10 justify-center items-center gap-10">
                            <div class="  rounded-xl skrew page-content__block-photo bg-[url('../assets/image/project3.jpg')] bg-cover bg-no-repeat justify-center   h-96 overflow-hidden">
                                <!-- <img src="../assets/image/project1.jpg" alt=" h-full hidden page-content__block-photo " class="" srcset="">-->
                            </div> 

                            <div>
                                <h2 class=" page-content__block text-4xl font-semibold text-primary text-center">ABANISE
                                    COMPANY</h2>
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
                                        class="text-white page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Nuxt3
                                    </li>
                                    <li class="text-white  page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Mangoodb
                                    </li>
                                    <li class="text-white  page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Nodejs
                                    </li>
                                    <li class="text-white text-xs px-3 py-1  page-content__block rounded-full border w-fit  border-white">
                                        express.js
                                    </li>
                                    <li class="text-white text-xs px-3 py-1  page-content__block rounded-full border w-fit  border-white">
                                        paystack.js
                                    </li>
                                    <li class="text-white text-xs  page-content__block px-3 py-1 rounded-full border w-fit  border-white">
                                        JWT
                                    </li>
                                </ul>

                                <div class="w-full justify-center flex">
                                    <a href="https://www.abaniseedu.com/" class=" font-norms  bg-primary rounded-xl overflow-visible py-1 px-6 mt-5 button "> visit </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <!-- <div
					v-for="_ in 10"
					class="page-content__block p1"
				>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat at, rerum, atque odio molestias fugit vel facere iure nulla maiores pariatur cum libero beatae impedit iusto enim officiis, minima animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat at, rerum, atque odio molestias fugit vel facere iure nulla maiores pariatur cum libero beatae impedit iusto enim officiis, minima animi.
				</div> -->
            </div>

        </NuxtLayout>
    </div>
</template>
<style lang='scss' scoped>
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

.skrew1{
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
// }</style>