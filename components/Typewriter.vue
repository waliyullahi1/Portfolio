 <script setup>
import { ref, onMounted } from 'vue'

const texts = [
"I design and develop stunning websites.",
"I build modern and scalable web apps.",
"I craft mobile experiences users love.",
"I solve real-world problems through code."
  ]
const displayText = ref('')
let i = 0, j = 0, forward = true

onMounted(() => {
  function type() {
    if (forward) {
      if (j < texts[i].length) {
        displayText.value += texts[i][j++]
      } else {
        forward = false
        setTimeout(type, 3400)
        return
      }
    } else {
      if (j > 0) {
        displayText.value = displayText.value.slice(0, --j)
      } else {
        forward = true
        i = (i + 1) % texts.length
      }
    }
    setTimeout(type, 100)
  }
  type()
})
</script>

<template>
  <div class="tex font-semibold mt-5 text-amber-300 ">
  <p>{{ displayText }}<span class="animate-pulse">|</span></p>  
  </div>
</template> 
<!-- <script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
gsap.registerPlugin(TextPlugin)

const textRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 })
  tl.to(textRef.value, { text: "I design and develop stunning websites.", duration: 6 })
    .to(textRef.value, { text: "I build modern and scalable web apps.", duration: 6 })
    .to(textRef.value, { text: "I craft mobile experiences users love.", duration: 6 })
    .to(textRef.value, { text: "I solve real-world problems through code.", duration: 6 })
})

</script>

<template>
  <div class=" mt-4  text-2xl text-amber-300 font-bold">
    <span ref="textRef"></span><span class="text-green-500">|</span>
  </div>
</template> -->
