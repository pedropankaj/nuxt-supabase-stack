<script setup>
import img from '../../assets/img/illustrations/feeling_proud.svg'
</script>

<template>
  <section id="despre-mine" class="despre-mine">
    <div class="container margin-auto grid cols-2 gap-3 index-1">
      <div class="shaped">
        <img :src="img" alt="Feeling proud">
      </div>
      <div>
        <h3>Despre mine</h3>
        <h2>Ce iti pot oferi?</h2>
        <div class="line"><span class="underline"></span></div>
        <div>
          <p>Ofer o gamă completă de soluții de design, programare si dezvoltare a aplicatiilor web sau mobile. Vă pot
            ajuta să deschideți portile afacerilor dvs in mediul online, să vă construiți o marca și să luați decizii
            inteligente cu ajutorul datelor și informațiilor.</p>
          <div class="skills">
            <div class="skill">
              <div class="skill-title flex space-between">
                <span>UX/UI Design</span>
                <span>70%</span>
              </div>
              <div class="skill-progress skill-progress--70"></div>
            </div>
            <div class="skill">
              <div class="skill-title flex space-between">
                <span>HTML/CSS</span>
                <span>90%</span>
              </div>
              <div class="skill-progress skill-progress--90"></div>
            </div>
            <div class="skill">
              <div class="skill-title flex space-between">
                <span>JavaScript</span>
                <span>85%</span>
              </div>
              <div class="skill-progress skill-progress--85"></div>
            </div>
            <div class="skill">
              <div class="skill-title flex space-between">
                <span>PHP</span>
                <span>75%</span>
              </div>
              <div class="skill-progress skill-progress--75"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="currentColor" fill-opacity="1"
        d="M0,128L40,138.7C80,149,160,171,240,186.7C320,203,400,213,480,192C560,171,640,117,720,80C800,43,880,21,960,48C1040,75,1120,149,1200,186.7C1280,224,1360,224,1400,224L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
      </path>
    </svg>
  </section>
</template>