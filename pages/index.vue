<script setup>

definePageMeta(transition)

watch(() =>
  [general.isTransitionFinish, general.isPreloaderVisible],
  ([transitionFinish, preloaderVisibility]) => {

    if (transitionFinish && !preloaderVisibility) {
      contentAnimation({ type: 'text', element: '.page-content__block' })
    }
  })


</script>
<template>

  <div :class="general.pageBg">
    <NuxtLayout name="custom" page-name="about" title="home">

      <div class="page-content  hero section">

        <div class="title-efault h1 ">
          <div class="">
            <section id="mySection"
              class=" font-['Poppins'] bg-[url('../assets/image/saaa.jpg')] bg-no-repeat justify-center bg-contain h-screen ">
              <div class="w-full page-content bg-[#11141b]  bg-opacity-70 h-full ">
                <div>



                  <div
                    class="container _container lg:pt-62 justify-end md:pt-48 pt-28 static md:relative  gap mx-auto md:flex    block mb-10  gap-4 ">


                    <div
                      class=" md:w-[70%] w-[100%]  static lg:relative left-20 page-content l px-2 md:text-left textcenter m py-5">
                      <h2
                        class="text-[14px] h1 font-normal title-default__wrap text-gray-300 capitalize font-['Poppins'] tracking-[.1rem]">
                        SOFTWARE DEVELOPER</h2>
                      <h1 class="md:text-5xl h1  font-semibold text-3xl pb-3 capitalize title-default__wrap ">
                        Waliyullahi idowu
                      </h1>

                      <p class="title-default__wrap mr-6 ">“I'm Waliu, a software developer with a
                        passion for turning ideas into real-world applications. I build
                        everything from clean, responsive frontends to powerful backend systems
                        — always with a focus on performance, security, and usability.</p>

                      <div class="flex title-default__wrap md:justify-start justify-center gap-5 mt-10 ">
                        <button
                          class=" shadows  h1 w-fit text-[14px] bg-gray-700  hover:bg-gray-400 hover:text-white duration-700 border-2  border-gray-400 text-white font-normal py-2 px-2 tracking-[.2rem] rounded-full">
                          <NuxtLink to="/works">View Works </NuxtLink>
                        </button>

                        <button
                          class=" shadows  h1 w-fit text-[14px] hover:bg-primary duration-700 border-2  border-primary text-white font-normal py-2 px-2 tracking-[.2rem] bg-gray-700  rounded-full"><a
                            href="/resume.pdf" target="_blank">Download CV</a></button>
                      </div>

                      <div class="w-full mt-5  f">
                        <div class="   w-full flex justify-center gap-4">
                          <a href="https://twitter.com/wizzywise67">

                            <div>

                            </div>
                            <div class="w-9   hover:scale-110 duration-300 text-white hover:text-gray-500   ">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 208 208" version="1.1">
                                <g id="surface1">
                                  <path style=" stroke:none;fill-rule:nonzero;fill: currentColor;fill-opacity:1;"
                                    d="M 203.710938 43.917969 C 196.292969 47.210938 188.320313 49.425781 179.949219 50.441406 C 188.476563 45.304688 195.0625 37.207031 198.140625 27.546875 C 190.136719 32.285156 181.273438 35.730469 171.855469 37.578125 C 164.316406 29.546875 153.574219 24.527344 141.664063 24.527344 C 118.828125 24.527344 100.300781 43.054688 100.300781 65.890625 C 100.300781 69.125 100.671875 72.292969 101.378906 75.308594 C 67 73.585938 36.53125 57.089844 16.125 32.070313 C 12.558594 38.195313 10.527344 45.304688 10.527344 52.90625 C 10.527344 67.246094 17.820313 79.894531 28.929688 87.3125 C 22.128906 87.097656 15.757813 85.25 10.1875 82.140625 C 10.1875 82.328125 10.1875 82.480469 10.1875 82.664063 C 10.1875 102.703125 24.4375 119.414063 43.363281 123.230469 C 39.886719 124.183594 36.253906 124.675781 32.46875 124.675781 C 29.792969 124.675781 27.207031 124.429688 24.683594 123.9375 C 29.945313 140.339844 45.210938 152.34375 63.308594 152.652344 C 49.179688 163.761719 31.332031 170.347656 11.941406 170.347656 C 8.585938 170.347656 5.324219 170.164063 2.09375 169.792969 C 20.375 181.519531 42.132813 188.351563 65.492188 188.351563 C 141.570313 188.351563 183.183594 125.320313 183.183594 70.695313 C 183.183594 68.878906 183.152344 67.09375 183.058594 65.308594 C 191.152344 59.523438 198.171875 52.226563 203.710938 43.917969 " />
                                </g>
                              </svg>
                            </div>
                          </a>

                          <a href="https://github.com/waliyullahi1">
                            <div class="w-9  hover:scale-110 duration-300 text-white hover:text-gray-500  top-10 ">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 512 512" version="1.1">
                                <g id="surface1">
                                  <path style=" stroke:none;fill-rule:evenodd;fill: currentColor;fill-opacity:1;"
                                    d="M 256 64 C 149.9375 64 64 149.9375 64 256 C 64 340.8125 119 412.8125 195.3125 438.1875 C 204.9375 439.9375 208.4375 434.0625 208.4375 428.9375 C 208.4375 424.375 208.25 412.3125 208.1875 396.3125 C 154.75 407.875 143.5 370.5625 143.5 370.5625 C 134.75 348.375 122.1875 342.4375 122.1875 342.4375 C 104.75 330.5625 123.5 330.8125 123.5 330.8125 C 142.75 332.1875 152.875 350.5625 152.875 350.5625 C 170 379.9375 197.8125 371.4375 208.75 366.5625 C 210.5 354.125 215.5 345.6875 220.9375 340.875 C 178.3125 336.0625 133.5 319.5625 133.5 246 C 133.5 225 141 207.875 153.25 194.4375 C 151.3125 189.625 144.6875 170.0625 155.125 143.625 C 155.125 143.625 171.25 138.5 207.9375 163.3125 C 223.25 159.0625 239.6875 156.9375 256 156.875 C 272.3125 156.9375 288.75 159.0625 304.0625 163.3125 C 340.75 138.5 356.8125 143.625 356.8125 143.625 C 367.3125 170.0625 360.75 189.625 358.75 194.4375 C 371.0625 207.875 378.4375 225 378.4375 246 C 378.4375 319.75 333.5625 335.9375 290.8125 340.75 C 297.6875 346.625 303.8125 358.375 303.8125 376.25 C 303.8125 401.9375 303.625 422.625 303.625 428.9375 C 303.625 434.0625 307.0625 440.0625 316.8125 438.1875 C 393.0625 412.75 448 340.8125 448 256 C 448 149.9375 362.0625 64 256 64 Z " />
                                </g>
                              </svg>
                            </div>
                          </a>


                          <a href="https://www.linkedin.com/in/waliu-idowu-50a594243/">
                            <div class="w-7  hover:scale-110 duration-300 text-white hover:text-gray-500  top-10 ">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 208 208" version="1.1">
                                <g id="surface1">
                                  <path style=" stroke:none;fill-rule:nonzero;fill: currentColor;fill-opacity:1;"
                                    d="M 166.4375 0 L 38.410156 0 C 17.203125 0 0 17.203125 0 38.410156 L 0 166.4375 C 0 187.644531 17.203125 204.847656 38.410156 204.847656 L 166.4375 204.847656 C 187.644531 204.847656 204.847656 187.644531 204.847656 166.4375 L 204.847656 38.410156 C 204.847656 17.203125 187.644531 0 166.4375 0 Z M 63.339844 173.886719 L 31.515625 173.886719 L 31.332031 78.601563 L 63.152344 78.601563 Z M 46.625 66.140625 L 46.441406 66.140625 C 36.039063 66.140625 29.328125 58.96875 29.328125 50.042969 C 29.328125 40.902344 36.253906 33.976563 46.84375 33.976563 C 57.429688 33.976563 63.921875 40.902344 64.136719 50.042969 C 64.136719 58.96875 57.398438 66.140625 46.625 66.140625 Z M 173.671875 173.886719 L 141.570313 173.886719 L 141.570313 122.121094 C 141.570313 109.59375 138.25 101.070313 127.046875 101.070313 C 118.488281 101.070313 113.875 106.824219 111.65625 112.394531 C 110.828125 114.394531 110.609375 117.136719 110.609375 119.9375 L 110.609375 173.886719 L 78.355469 173.886719 L 78.171875 78.601563 L 110.425781 78.601563 L 110.609375 92.050781 C 114.734375 85.683594 121.597656 76.664063 138.03125 76.664063 C 158.40625 76.664063 173.640625 89.960938 173.640625 118.550781 L 173.640625 173.886719 Z " />
                                </g>
                              </svg>
                            </div>
                          </a>

                          <a href="">
                            <div class="w-7  hover:scale-110 duration-300 text-white hover:text-gray-500 top-10 ">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                                <path
                                  d="M7.546875 0C3.390625 0 0 3.390625 0 7.546875L0 18.453125C0 22.609375 3.390625 26 7.546875 26L18.453125 26C22.609375 26 26 22.609375 26 18.453125L26 7.546875C26 3.390625 22.609375 0 18.453125 0 Z M 7.546875 2L18.453125 2C21.527344 2 24 4.46875 24 7.546875L24 18.453125C24 21.527344 21.53125 24 18.453125 24L7.546875 24C4.472656 24 2 21.53125 2 18.453125L2 7.546875C2 4.472656 4.46875 2 7.546875 2 Z M 20.5 4C19.671875 4 19 4.671875 19 5.5C19 6.328125 19.671875 7 20.5 7C21.328125 7 22 6.328125 22 5.5C22 4.671875 21.328125 4 20.5 4 Z M 13 6C9.144531 6 6 9.144531 6 13C6 16.855469 9.144531 20 13 20C16.855469 20 20 16.855469 20 13C20 9.144531 16.855469 6 13 6 Z M 13 8C15.773438 8 18 10.226563 18 13C18 15.773438 15.773438 18 13 18C10.226563 18 8 15.773438 8 13C8 10.226563 10.226563 8 13 8Z"
                                  fill="currentColor" />
                              </svg>
                            </div>
                          </a>

                         
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


   


    </NuxtLayout>
  </div>

</template>
<style lang='scss' scoped>
.page-content__block {
  padding-bottom: 32px;
}
</style>