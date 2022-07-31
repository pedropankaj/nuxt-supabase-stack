<script setup>
import { watch, toRef, onMounted } from 'vue'
import { store } from '~/utils/store.js'
import { initApp } from '~/utils/utils.js'

// Componente
import HeroSection from '~/components/sections/HeroSection.vue'
import AboutMeSection from '~/components/sections/AboutMeSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import PortfolioSection from '~/components/sections/PortfolioSection.vue'
import ReviewsSection from '~/components/sections/ReviewsSection.vue'
import ExperienceSection from '~/components/sections/ExperienceSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'

// Mobile nav
const isMobileMenuOpen = toRef(store, 'isMobileMenuOpen')
// toggle mobile menu
watch(isMobileMenuOpen, () => {
  document.body.classList.toggle('has-mobile-nav')
})

// activate links on scroll
onMounted(() => {
  initApp()
})

</script>

<template>
  <div class="page page--index">
    <HeroSection />
    <AboutMeSection />
    <ServicesSection />
    <PortfolioSection />
    <ReviewsSection />
    <ExperienceSection />
    <ContactSection />
  </div>
</template>
