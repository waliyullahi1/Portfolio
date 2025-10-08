export default defineNuxtRouteMiddleware((to, from) => {
  // 🧩 Ensure meta objects exist
  from.meta.pageTransition = from.meta.pageTransition || {}
  to.meta.pageTransition = to.meta.pageTransition || {}

  // 🧠 Define the "leave" animation
  from.meta.pageTransition.onLeave = (el, done) => {
    general.isTransitionFinish = false
    general.isTransitionStart = true

    let tl = gsap.timeline({
      onComplete() {
        // only clear what you must, not "all"
        gsap.set([
          el,
          el.querySelector('.page-wrap'),
          el.querySelector('.page-mask'),
          el.querySelector('.header')
        ], { clearProps: 'transform,opacity,clipPath' })

        // cleanup scroll triggers safely
        ScrollTrigger.getAll().forEach(st => {
          if (from.name && st.trigger && st.trigger.closest(`.${from.name}`)) {
            st.kill()
          }
        })

        done()
      }
    })

    tl.set(el, {
      position: 'relative',
      zIndex: 2,
      pointerEvents: 'none'
    })

    tl.to(el.querySelector('.header'), {
      yPercent: -100,
      duration: 0.3,
    }, 0)

    tl.fromTo(el, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    }, {
      clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      duration: 1
    }, 0)

    tl.to(el.querySelector('.page-wrap'), {
      xPercent: -20,
      duration: 1
    }, 0)

    tl.to(el.querySelector('.page-mask'), {
      opacity: 1,
      duration: 1
    }, 0)
  }

  // 🧠 Define the "enter" animation
  to.meta.pageTransition.onEnter = (el, done) => {
    useChangePageBg()

    gsap.set(el.querySelector('.page-wrap'), { xPercent: 50 })
    gsap.set(el.querySelector('.page-mask'), { opacity: 0 })
    gsap.set(el.querySelector('.header'), { yPercent: 0 })

    gsap.set(el, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      pointerEvents: 'none'
    })

    let tl = gsap.timeline({
      onComplete() {
        gsap.set(el, { clearProps: 'position,top,left,width,pointerEvents' })
        general.isTransitionFinish = true
        general.isTransitionStart = false
        done()
      }
    })

    tl.to(el.querySelector('.page-wrap'), {
      xPercent: 0,
      duration: 1
    })
  }
})
