<template>
  <div
    class=" w-full h-s bg-scroll http://preview.themeforest.net/item/reactjs-creative-personal-portfolio-template-miro/full_screen_preview/27150547?_ga=2.201180011.470406293.1702995992-1898506281.1702995992 font-['Quicksand'] overflow-x-hidden backdrop:blur-3xl bg-blac text-white bg-black  fast ">
    <div class=" blurssss ">
      <NavigationNavBar></NavigationNavBar>



      <section
        class=" font-['Poppins'] bg-[url('../assets/image/hero.jpg')] bg-no-repeat justify-center bg-contain  h-screen ">
        <div class="w-full  bg-[#11141b]  bg-opacity-95 h-full ">
          <div class="container lg:pt-62 md:pt-48 pt-28 gap-6     block  md:flex justify-center">
            <div class="  flex justify-center md:justify-end">
              <div class="circles">

              </div>
              <div
                class="py-4 px-4 shadows animation relative bg-[#0a0f1a]  sm:w-80 h-64  w-64 sm:h-80 rounded-full flex justify-center ">
                <div class="  rounded-full overflow-hidden    justify-center items-center  relative z-50 bg-red-500">
                  <img class=" w-[1300px] h-[300px]  bg-white " src="../assets/image/image.jpg" alt="" />
                </div>

              </div>
            </div>
            <div class=" w-full px-2 md:text-left text-center md:w-1/2 py-5">
              <h2 class="text-[14px] font-normal text-gray-300 capitalize font-['Poppins'] tracking-[.1rem]">Full-stack
                developer</h2>
              <h1 class="md:text-5xl font-semibold text-3xl pb-3 capitalize ">Waliu idowu</h1>
              <p>“Hi, I’m Waliu, a full-stack developer. I’ve mastered web development from frontend to backend, enhancing
                my skills and problem-solving</p>

              <div class="flex md:justify-start justify-center gap-5 mt-10 ">
                <button
                  class=" shadows  w-fit text-[14px] bg-gray-700  hover:bg-gray-400 hover:text-white duration-700 border-2  border-gray-400 text-white font-normal py-2 px-2 tracking-[.2rem] rounded-full"><a
                    href="" class="">View Work</a></button>

                <button
                  class=" shadows w-fit text-[14px] hover:bg-primary duration-700 border-2  border-primary text-white font-normal py-2 px-2 tracking-[.2rem] bg-gray-700  rounded-full"><a
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
      </section>


      <section
        class=" bg-[#11141b] py-20 npx tailwindcss font-['Poppins'] ./assets/inpute.css -o ./assets/output.css --watchpx-4 w-full md:px-0 mx-auto ">
        <div class="container py-20 px-4  md:px-0 mx-auto">
          <h1 class="  text-4xl text-center py-8  font-normal">About Me</h1>
          <div class="md:flex block justify-center items-center gap-5">
            <div class="  md:w-1/3 w-full overflow-hidden px-2 h-96 py-2 shadows   border-4 bg-yellow-400 rounded-lg">
              <div class="bg-[url('../assets/image/image.jpg')] bg-cover  w-full h-full">
                <img src="../assets/image/image.jpg" class=" opacity-0 w-96" alt="">
              </div>

            </div>
            <div class="md:w-1/2 w-full">
              <h1 class="font-semibold py-4 text-3xl"> I am <span class="text-yellow-400"> waliu</span></h1>
              <h1 class=" text-gray-500 text-[15px] tracking-[.3rem]">WEB DEVELOPER & GRAPHIC DESIGN</h1>
              <P class="indent-8 text-justify py-5">
                Hello, I’m Waliu, a full-stack developer. I craft frontend experiences and manage backend systems. I’ve
                gained comprehensive web development understanding, turning ideas into applications. This journey
                broadened my skills and opened creative problem-solving avenues. Stay tuned for project updates!
              </P>
              <p class="indent-8 text-justify ">
                Also, i am graphic designer with a knack for bringing brands to life. I create unique logos and business
                cards, and with my expertise in Photoshop and Corel Draw, I can cater to all your design needs
              </p>
              <div class=" w-full h-7 group py-5 overflow-idden">
                <div class="w-10 h-10    group-hover:w-[12.5rem] duration-500 bg-[#22252b]"></div>
                <button class="  relative bottom-8 pl-3 font-semibold text-white tracking-[.2rem]">Download my CV</button>
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
                    <!--<p class="text-center leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque et
                      unde
                      impedit illo, eveniet hic inventore </p> -->
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
      <section class="w-full py-10 bg-[#11141b] ">
        <div class="flex justify-center w-[100%]  px-20  mx-auto  ">
          <div>
            <h1 class="text-3xl text-center py-4 font">WORK & EXPERIENCE</h1>
            <div class=" w-full h-fit  flex justify-center items-cente">
              <div class="w-96 h-[1px]   ctxx"></div>
            </div>
            <div class="grid  items-end mt-20 sm:grid-cols-2 grid-cols-1 gap-10">
              <div class="  duration-500 group-hover:scale-105 w-full  h-fit py-6 px-6 bg-[#0c0f16]">
                <div class="flex justify-start gap-6">
                  <div class="flex  flex-col mt-2  justify-c gap-[1rem] items-center">
                    <div class="w-2 h-2   bg-tertiary rounded-full"></div>
                    <div class="w-[2px]  h-full bg-tertiary"></div>
                  </div>
                  <div class="   gap-[3rem]  ">
                    <h1 class="font-semibold mb-[1rem] ">Full stack Web Developer</h1>
                    <div class=" flex flex-col ">
                      <h1 class="bg-tertiary text-white text-[12px] py-1 px-4 font-semibold w-fit mb-5 h-fit">2018 <span
                          class="font-bold">-</span> 2020</h1>
                      <p class=" leading-6 text-[14px] pb-10 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.</p>
                    </div>
                  </div>


                </div>

                <div class="flex  justify-start gap-6">
                  <div class="flex  flex-col mt-2  justify-c gap-[1rem] items-center">
                    <div class="w-2 h-2   bg-tertiary rounded-full"></div>
                    <div class="w-[2px]  h-full bg-tertiary"></div>
                  </div>
                  <div class="   gap-[3rem]  ">
                    <h1 class="font-semibold mb-[1rem] ">Back-End Developer</h1>
                    <div class=" flex flex-col ">
                      <h1 class="bg-tertiary text-white text-[12px] py-1 px-4 font-semibold w-fit mb-5 h-fit">2018 <span
                          class="font-bold">-</span> 2020</h1>
                      <p class=" leading-6 text-[14px] pb-10 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.</p>
                    </div>
                  </div>


                </div>
              </div>

              <div class="  duration-500 group-hover:scale-105  w-full mt-5 h-fit py-6 px-6 bg-[#0c0f16]">
                <div class="flex justify-start gap-6">
                  <div class="flex  flex-col mt-2  justify-c gap-[1rem] items-center">
                    <div class="w-2 h-2   bg-tertiary rounded-full"></div>
                    <div class="w-[2px]  h-full bg-tertiary"></div>
                  </div>
                  <div class="   gap-[3rem]  ">
                    <h1 class="font-semibold mb-[1rem] ">UI/UX Designer</h1>
                    <div class=" flex flex-col ">
                      <h1 class="bg-tertiary text-white text-[12px] py-1 px-4 font-semibold w-fit mb-5 h-fit">2018 <span
                          class="font-bold">-</span> 2020</h1>
                      <p class=" leading-6 text-[14px] pb-10 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.</p>
                    </div>
                  </div>


                </div>

                <div class="flex justify-start gap-6">
                  <div class="flex  flex-col mt-2  justify-c gap-[1rem] items-center">
                    <div class="w-2 h-2   bg-tertiary rounded-full"></div>
                    <div class="w-[2px]  h-full bg-tertiary"></div>
                  </div>
                  <div class="   gap-[3rem]  ">
                    <h1 class="font-semibold mb-[1rem] ">Graphic Design </h1>
                    <div class=" flex flex-col ">
                      <h1 class="bg-tertiary text-white text-[12px] py-1 px-4 font-semibold w-fit mb-5 h-fit">2018 <span
                          class="font-bold">-</span> 2020</h1>
                      <p class=" leading-6 text-[14px] pb-10 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation.</p>
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


      <section class=" font-['Poppins'] bg-[url('../assets/image/hero.jpg')] bg-no-repeat justify-center bg-contain   ">
        <div class="w-full  bg-[#11141b]  flex justify-center bg-opacity-95 h-full ">
          <div class="container items-center    block  md:flex justify-center">
            <div class="  flex justify-center md:justify-end">
              <div class="py-4 px-4 shadows bg-[#0a0f1a]  md:full h-full flex justify-center overflow-hidden ">
                <div class=" overflow-hiddenl  bg-red-500">
                  <img class=" w-full  bg-white " src="@/assets/image/hero.png" alt="" />
                </div>

              </div>
            </div>
            <div class=" w-full px-2 md:text-left text-center md:w-1/2 py-5">
              <h2 class="text-[14px] font-normal text-gray-300 capitalize font-['Poppins'] tracking-[.1rem]">CONTACT ME
              </h2>
              <h1 class="md:text-3xl font-semibold text-3xl pb-1 capitalize ">Get in touch with me today.</h1>
              <div class="h-1 w-10 mb-3 bg-primary"></div>
              <p>Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida,
                odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat
                sapien pretium eu.</p>

              <div class="flex md:justify-start justify-center gap-5 mt-10 ">
                <form action="" class="  gap-3 w-full">
                  <div class="flex gap-2 ">
                    <div class="input-containers w-full">
                      <input type="text" placeholder=" " id="name"
                        class="  input-field  h-10 w-full border-2 border-gray-600  outline-none py-1 px1 bg-transparent">
                      <span for="name" class="input-label text-slate-600 font-normal">Your Name </span>
                    </div>

                    <div class="input-containers w-full">
                      <input type="text" placeholder=" " id="name"
                        class="  input-field  h-10 w-full border-2 border-gray-600 outline-none py-1 px1 bg-transparent">
                      <span for="name" class="input-label text-slate-600 font-normal">Your Email </span>
                    </div>

                  </div>
                  <div class="input-containers1 w-full">

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

      <div @mouseover="mouseOver" @mouseleave="mouseLeave">
        Hover over me!
      </div>
    </div>



  </div>
</template>


<script setup>

import { ref } from 'vue';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
gsap.registerPlugin(ScrollTrigger);
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


//PROPS
defineProps({
  // define your props here
});

</script>

<style scoped>
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
  transform: translateY(-1.9rem);
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
  transform: translateY(-1.9rem);
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
  position: absolute;
  inset: 3px;
  background-color: #0a0f1a;
  border-radius: 100%;
}

.circles::before {
  content: '';
  position: absolute;
  left: px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fbff00;
  box-shadow: 0 0 5px #fbff00, 0 0 20px #fbff00;

}

#cursor {
  width: 10px;
  height: 10px;
  background: white;
  pointer-events: none;
}





</style>