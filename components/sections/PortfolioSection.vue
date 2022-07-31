<script setup>
import img1 from '../../assets/img/portofoliu/medium.jpg'
import img2 from '../../assets/img/portofoliu/trello.jpg'
import img3 from '../../assets/img/portofoliu/squarespace.jpg'

const projects = [
  // adaugati proiecte
]

</script>

<template>
  <section id="portofoliu" class="portofoliu">
    <div class="container margin-auto index-1">
      <h3>Portofoliu</h3>
      <h2>Ultimele proiecte</h2>
      <div class="line"><span class="underline"></span></div>
      <div class="projects grid cols-3 gap-3">
        <a class="project" href="//medium.com" target="_blank" title="Medium.com">
          <div class="project-image">
            <img :src="img1" alt="Medium">
          </div>
          <h3 class="project-title">medium.com</h3>
          <p class="project-description">
            Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.
          </p>
        </a>
        <div class="project">
          <div class="project-image">
            <img :src="img2" alt="trello">
          </div>
          <h3 class="project-title">trello.com</h3>
          <p class="project-description">
            Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.
          </p>
        </div>
        <div class="project">
          <div class="project-image">
            <img :src="img3" alt="squarespace">
          </div>
          <h3 class="project-title">squarespace.com</h3>
          <p class="project-description">
            Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="currentColor" fill-opacity="1"
        d="M0,192L40,202.7C80,213,160,235,240,250.7C320,267,400,277,480,245.3C560,213,640,139,720,90.7C800,43,880,21,960,58.7C1040,96,1120,192,1200,245.3C1280,299,1360,309,1400,314.7L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
      </path>
    </svg>
  </section>
</template>