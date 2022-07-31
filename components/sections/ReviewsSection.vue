<script setup>
import avatar1 from '../../assets/img/avatars/avatar-1.jpg'
import avatar2 from '../../assets/img/avatars/avatar-2.jpg'
</script>

<template>
  <section id="recomandari" class="recomandari">
    <div class="container text-center margin-auto index-1">
      <h3>Recomandari</h3>
      <h2>Ce spun clientii?</h2>
      <div class="line"><span class="underline"></span></div>
      <div class="mt-3 grid cols-2 gap-3">
        <div class="testimonial flex">
          <div class="testimonial-avatar">
            <img :src="avatar1" alt="Avatar">
          </div>
          <div class="testimonial-content">
            <h3 class="testimonial-author">Ioana Pop</h3>
            <div class="testimonial-title">CEO, DeUnaSingura</div>
            <p>Lorem ipsum dolor sit amet, consetetuad ipscing elitr, sed diam nonumy eirmodem por invidunt ut labore et
              dolore magna aliquyam erat sed diam.</p>
            <ul class="testimonial-review">
              <li><i class="star filled"></i></li>
              <li><i class="star filled"></i></li>
              <li><i class="star filled"></i></li>
              <li><i class="star filled"></i></li>
              <li><i class="star filled"></i></li>
            </ul>
          </div>
        </div>
        <div class="testimonial flex">
          <div class="testimonial-avatar">
            <img :src="avatar2" alt="Avatar">
          </div>
          <div class="testimonial-content">
            <h3 class="testimonial-author">Alexandra Ion</h3>
            <div class="testimonial-title">Product Owner, LaOlalta</div>
            <p>Lorem ipsum dolor sit amet, consetetuad ipscing elitr, sed diam nonumy eirmodem por invidunt ut labore et
              dolore magna aliquyam erat sed diam.</p>
            <ul class="testimonial-review">
              <li><i class="star filled"></i></li>
              <li><i class="star filled"></i></li>
              <li><i class="star filled"></i></li>
              <li><i class="star filled"></i></li>
              <li><i class="star"></i></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="currentColor" fill-opacity="1"
        d="M0,320L40,304C80,288,160,256,240,229.3C320,203,400,181,480,186.7C560,192,640,224,720,245.3C800,267,880,277,960,282.7C1040,288,1120,288,1200,288C1280,288,1360,288,1400,288L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
      </path>
    </svg>
  </section>
</template>