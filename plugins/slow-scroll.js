import { defineNuxtPlugin } from '#app'
import LocomotiveScroll from 'locomotive-scroll'

export default defineNuxtPlugin((nuxtApp) => {
  let delay = 0;
  let oldTop = 0;
  const speed = 0.02; // Change this value to adjust the scroll speed

  function slowScroll() {
    delay += (window.pageYOffset - delay) * speed;

    if (Math.abs(delay - oldTop) <= 0.1) {
      delay = window.pageYOffset;
    }

    window.scrollTo(0, delay);

    if (oldTop !== window.pageYOffset) {
      oldTop = window.pageYOffset;
      window.requestAnimationFrame(slowScroll);
    }
  }

  nuxtApp.vueApp.config.globalProperties.$scrollTo = slowScroll;
})
