<script>
import Typed from 'typed.js'

export default {
  mounted() {
    const typed = this.$refs.typed
    if (typed) {
      new Typed(typed, {
        strings: ['Webmaster', 'Designer', 'Developer', 'Freelancer'],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
      })
    }
  },
}
</script>

<template>
  <section id="hero" class="hero text-center">
    <div class="container">
      <h1 class="hero-title">Eu sunt Liviu</h1>
      <h2 class="hero-subtitle">
        <span ref="typed" class="typed"></span>
      </h2>
    </div>
    <svg class="-index-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="currentColor" fill-opacity="1"
        d="M0,192L40,186.7C80,181,160,171,240,170.7C320,171,400,181,480,186.7C560,192,640,192,720,197.3C800,203,880,213,960,208C1040,203,1120,181,1200,186.7C1280,192,1360,224,1400,240L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
      </path>
    </svg>
  </section>
</template>
