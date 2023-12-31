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
                            <div class=" bg-white rounded-xl skrew page-content__block-photo   h-96 overflow-hidden">
                                <img src="../assets/image/hero.png" alt=" page-content__block-photo " class="" srcset="">
                            </div>

                            <div>
                                <h2 class=" page-content__block text-4xl font-semibold text-primary text-center">ABANISE
                                    COMPANY</h2>
                                <p class=" page-content__block mt-4 text-center">Built a platform that will enable these
                                    companies to be
                                    selling Scratch for (WAEC, NECO, NABTEB) , to check OLEVEL, Also PIN token for
                                    (GCEWAEC, GCENECO, JAMB, GCENABTEB) for Registration, And then they sell MTN
                                    data bundle and card, and soon on </p>
                                <ul class=" my-10 transition-all justify-center flex duration-300 flex-wrap gap-2">
                                    <li
                                        class="text-white page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        vue3
                                    </li>

                                    <li
                                        class="text-white page-content__block text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Nuxt3
                                    </li>
                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Mangoodb
                                    </li>
                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Nodejs
                                    </li>
                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        express.js
                                    </li>
                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        paystack.js
                                    </li>
                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        JWT
                                    </li>
                                </ul>

                                <div class="w-full justify-center flex">
                                    <a href="" class=" font-norms  bg-primary rounded-xl py-1 px-6 mt-5 button "> visit </a>
                                </div>
                            </div>
                        </div>

                        <div class=" grid grid-cols-2 mt-64 justify-center items-center gap-10">


                            <div>
                                <h2 class="  text-4xl font-semibold text-primary text-center">ABANISE COMPANY</h2>
                                <p class="mt-4 text-center">Built a platform that will enable these companies to be
                                    selling Scratch for (WAEC, NECO, NABTEB) , to check OLEVEL, Also PIN token for
                                    (GCEWAEC, GCENECO, JAMB, GCENABTEB) for Registration, And then they sell MTN
                                    data bundle and card, and soon on </p>
                                <ul class=" my-10 transition-all flex duration-300 flex-wrap gap-2">
                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        vue3
                                    </li>

                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Nuxt3
                                    </li>
                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Mangoodb
                                    </li>
                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Nodejs
                                    </li>
                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        express.js
                                    </li>
                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        paystack.js
                                    </li>
                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        JWT
                                    </li>
                                </ul>

                                <a href="" class=" font-norms bg-primary rounded-xl py-1 px-6 mt-5  "> visit </a>
                            </div>

                            <div class=" bg-white rounded-xl   h-80 overflow-hidden">
                                <img src="../assets/image/hero.png" alt="" srcset="">
                            </div>
                        </div>

                        <div class=" grid grid-cols-2 mb-10 mt-64 justify-center items-center gap-10">
                            <div class=" bg-white rounded-xl  h-80 overflow-hidden">
                                <img src="../assets/image/hero.png" alt="" srcset="">
                            </div>

                            <div>
                                <h2 class="  text-4xl font-semibold text-primary text-center">ABANISE COMPANY</h2>
                                <p class="mt-4 text-center">Built a platform that will enable these companies to be
                                    selling Scratch for (WAEC, NECO, NABTEB) , to check OLEVEL, Also PIN token for
                                    (GCEWAEC, GCENECO, JAMB, GCENABTEB) for Registration, And then they sell MTN
                                    data bundle and card, and soon on </p>
                                <ul class=" my-10 transition-all flex duration-300 flex-wrap gap-2">
                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        vue3
                                    </li>

                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Nuxt3
                                    </li>
                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Mangoodb
                                    </li>
                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        Nodejs
                                    </li>
                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        express.js
                                    </li>
                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        paystack.js
                                    </li>
                                    <li class="text-white text-xs px-3 py-1 rounded-full border w-fit  border-white">
                                        JWT
                                    </li>
                                </ul>

                                <a href="" class=" font-norms bg-primary rounded-xl py-1 px-6 mt-5  "> visit </a>
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

.button {

    padding: .5rem .9rem;
    text-transform: lowercase;
    font-family: "Cyborg";
    font-weight: 900;
    font-size: 1.1rem;
    background: #14e956;
    background-color: #14e956;
    background-image: linear-gradient(315deg, #14e956 0%, #72f29a 100%);
    border: none;
    border-radius: 7px;
    box-shadow: 9px 7px 32px -11px rgba(20, 233, 86, 0.74);
    transition: all 0.3s ease-in-out 0s;
    cursor: pointer;
    outline: none;
    position: relative;
}

button::before {
    content: '';
    border-radius: 7px;
    min-width: calc(100px + 12px);
    min-height: calc(43px + 12px);
    border: 3px solid #72f29a;
    box-shadow: 0 0 60px rgba(20, 233, 86, 0.64);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all .3s ease-in-out 0s;
}

button:hover,
button:focus {
    transform: translateY(-6px);
}

button:hover::before,
button:focus::before {
    opacity: 1;
}

button::after {
    content: '';
    width: 30px;
    height: 30px;
    border-radius: 7px;
    border: 6px solid #14e956;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 1.5s infinite;

}

button:hover::after,
button:focus::after {
    animation: none;
    display: none;
}

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

// .page-content__block {
// 	padding-bottom: 32px;
// }</style>