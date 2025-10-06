<script setup>

const experiences = [
  {
    id: 1,
    date: "2020 - present",
    title: "Frontend Developer · Virex",
    description:
      "Designed, developed, and maintained critical frontend components powering Virex’s platform. Collaborated with cross-functional teams of designers, product managers, and engineers to deliver performant, accessible, and scalable solutions. Championed best practices in modern frontend development and web accessibility while ensuring pixel-perfect, responsive UI implementation.",
    tools: [
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Tailwind CSS",

      "React Native",
      "Sass",
      "CSS",
      "HTML",
      "JavaScript"
    ]
  },
  {
    id: 2,
    date: "2023 - 2025",
    title: "Backend Developer",
    description:
      "Led the development of high-quality web and mobile applications for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Vanderbilt University, and The 19th News. Built design systems and scalable solutions that improved performance and user experience. Mentored engineers, conducted knowledge-sharing sessions, and developed internal tools to streamline workflows and accelerate product delivery.",
    tools: [
      "MongoDB",
      "Node.js",
      "SQL",
      "PostgreSQL",
      "Firebase",
      "Django",
      "AWS",
    
    ]
  },
  {
    id: 3,
    date: "2024 - 2025",
    title: "Junior Machine Learning Engineer · Freelance",
    description:
      "Delivered machine learning models and data-driven solutions for freelance projects across healthcare, finance, and e-commerce. Implemented algorithms for predictive analytics, natural language processing, and computer vision. Built and optimized pipelines for training, evaluation, and deployment, ensuring accuracy and efficiency in real-world use cases.",
    tools: [
      "Python",
      "TensorFlow",
      "Keras",
      "Pandas",
      "NumPy",
      "Scikit-Learn"
    ]
  },
  {
    id: 4,
    date: "2019 - 2022",
    title: "Production Designer · Freelance",
    description:
      "Created impactful digital and print designs for branding, marketing, and product experiences. Specialized in crafting user-friendly interfaces, logos, and design systems while maintaining brand consistency. Collaborated with clients to bring creative concepts to life, delivering polished assets for web, mobile, and print campaigns.",
    tools: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "Sketch",
      "InVision",
      "Adobe XD",
      "CorelDRAW"
    ]
  }
];

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

	<div class=" px-0" :class="general.pageBg">
		<NuxtLayout name="custom" page-name="about" title="About">

			<div class="page-content   hero section">

				<div class="title-efault h1 ">
					<div class="">
						<section id="mySection"
							class="   font-['Poppins'] bg-[url('../assets/image/waliu2.jpg')] bg-no-repeat justify-center bg-contain  ">
							<div class="w-full page-content bg-[#11141b] bg-opacity-70 h-full ">
								<div>
									<div
										class="container _container lg:pt-62 pt- justify-end md:pt-28   pt-36  static md:relative  gap mx-auto md:flex    block mb-10  gap-4 ">


										<div
											class=" md:w-[70%] w-[100%]  static lg:relative left-20 page-content l px-2 md:text-left text-center m py-5">

											<h1
												class="md:text-5xl h1  font-semibold text-3xl pb-3 capitalize title-default__wrap ">
											About  <span class=" text-primary">Me.</span>
											</h1>

											<p class="title-default__wrap text-lg text-justify md:mr-6 mr-0">
												<span class=" text-[16px]">I’m a developer passionate about crafting accessible, pixel-perfect user
												interfaces that blend thoughtful design with robust engineering for web
												and mobile applications.
												My favorite work lies at the intersection of design and development,
												solving real-world problems
												and creating experiences that not only look great but are also
												meticulously built
												for performance and usability.
												<br><br>
												Currently, I'm a Senior Front-End Engineer at Virex, specializing in
												accessibility. I contribute to the creation and maintenance of UI
												components that power the Virex frontend, while also helping to maintain
												scalable backend systems.
												My focus is on ensuring our platform meets web accessibility standards
												and best practices,
												delivering an inclusive user experience.
												<br><br>
												In the past, I’ve had the opportunity to develop software across a
												wide range of settings — from advertising agencies and large
												corporations
												to start-ups and small digital product studios. Additionally, I released
												a comprehensive video course a few years ago, guiding learners through
												building
												a web application using the Spotify API.
												<br><br>
												In my spare time, I enjoy climbing, playing tennis, spending time with
												my wife and two cats, or exploring Hyrule in search of Korok seeds.</span>
											</p>


											
										
										</div>

									</div>
								</div>
							</div>
						</section>
					</div>
				</div>




			</div>


			 <section class="w-full page-content py-10 bg-[#11141b] ">
      <div class="flex justify-center font-['Poppins']  w-[100%]  px-20  mx-auto  ">
        <div>
          <h1 class="sm:text-3xl text-center text-xl  tracking-wider py- page-content__block  font-normal">WORK & EXPERIENCE</h1>
          <div class=" w-full h-fit page-content__block flex justify-center items-cente">
            <div class="w-96 h-[1px]   ctxx"></div>
          </div>
          <div class="gap-10">
            <div class="  grid grid-cols-1 w-[80%] space-y-10 duration-500 group-hover:scale-105  h-full py-6 md:px-6 px-2  bg-[#0c0f16]">
             

              <div v-for="item in experiences" class="flex  justify-start gap-6">
                <div class="flex  flex-col mt-2  justify-c gap-[1rem] items-center">
                  <div class="w-2 h-2    bg-primary rounded-full"></div>
                  <div class="w-[2px]  h-full bg-primary"></div>
                </div>
                <div class="   space-y-3 gap-[3rem]  ">
                  <h1 class="font-semibold page-content__block ">{{item.title}}</h1>
                  <div class="  space-y-3 flex flex-col ">
                    <h1
                      class=" bg-yellow-500 page-content__bock text-white text-[12px] py-1 px-4 font-semibold w-fit mb- h-fit">
                      2020 <span class="font-bold">-</span> 2023</h1>
                    <p class=" page-content__block leading-6 text-[14px] pb-4 ">{{ item.description }}</p>
                  </div>

				  	
						<div class=" flex flex-wrap pb-12 gap-2">
							<p v-for="value in item.tools" class=" border border-white  rounded-md text-[12px]  w-fit h-fit py-1 px-2">{{value}}</p>
						</div>
					
                </div>


              </div>
            </div>

          
          </div>
        </div>
      </div>
    </section>


		</NuxtLayout>
	</div>

</template>
<style lang='scss' scoped>
.page-content__block {
	
}
</style>