<script setup>
import { reactive, ref } from 'vue'
import UiBtn from '../ui/UiBtn.vue'

const loading = ref(false)
const res = ref(null)

const formData = reactive({
  nume: '',
  email: '',
  mesaj: '',
})

async function trimiteFormular() {
  loading.value = true
  try {
    res.value = await $fetch('/api/contact', { method: 'post', body: formData })
  } catch (err) {
    res.value = { success: false, error: err.message }
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="contact" class="contact">
    <div class="container index-1 margin-auto">
      <h3>Contact</h3>
      <h2>Intrați în legătură cu mine</h2>
      <div class="line"><span class="underline"></span></div>
      <p>Aveți un proiect la care putem lucra împreună?</p>
      <p>Mi-ar plăcea să lucrez cu tine. Completează formularul de mai jos si spune-mi spune mai multe.</p>
      
      <div v-if="res">
        <h3 v-if="res.success">Super, mesajul a fost trimis cu succes.</h3>
        <h3 v-else-if="res.error" >{{ res.error }}</h3>
        <h3 v-else>Ne cerem scuze, dar nu am putut trimite mesajul dvs pt moment.</h3>
      </div>
      
      <form class="form form--contact flex col mt-3" @submit.prevent="trimiteFormular">
        <div class="grid cols-2 gap-2 mb-2">
          <input v-model="formData.nume" name="nume" type="text" placeholder="Nume">
          <input v-model="formData.email" name="email" type="email" placeholder="E-mail">
          <textarea v-model="formData.mesaj" name="mesaj" id="" cols="30" rows="3" placeholder="Mesaj"></textarea>
        </div>
        <UiBtn type="submit" class="ml-auto" size="lg" state="primary" :disabled="loading">
          {{ loading ? 'Loading...' : 'Trimite' }}
        </UiBtn>
      </form>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="currentColor" fill-opacity="1"
        d="M0,288L40,240C80,192,160,96,240,80C320,64,400,128,480,154.7C560,181,640,171,720,181.3C800,192,880,224,960,218.7C1040,213,1120,171,1200,170.7C1280,171,1360,213,1400,234.7L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
      </path>
    </svg>
  </section>
</template>
