<script setup>
import AppLogo from './AppLogo.vue'
import UiContainer from './ui/UiContainer.vue'
import UiMenuBtn from './ui/UiMenuBtn.vue'
import { store } from '~/utils/store.js'

// Nav links
const navLinks = [
  {
    id: 'despre-mine',
    title: 'Despre mine',
    hasUnderline: true,
  },
  {
    id: 'servicii',
    title: 'Servicii',
    hasUnderline: true,
  },
  {
    id: 'portofoliu',
    title: 'Portofoliu',
    hasUnderline: true,
  },
  {
    id: 'recomandari',
    title: 'Recomandari',
    hasUnderline: true,
  },
  {
    id: 'experienta',
    title: 'Experienta',
    hasUnderline: true,
  },
  {
    id: 'contact',
    title: 'Contact',
    hasUnderline: false,
    cls: 'btn btn--inversat btn--contact',
  },
]

const router = useRouter()

function onNavLinkClick(e) {
  if (store.isMobileMenuOpen) {
    store.toggleMobileMenu()
  }

  if (router.currentRoute.value.path !== '/') {
    setTimeout(() => {
      router.push('/')
      setTimeout(() => {
        let hash = e.target.attributes.href.value
        const hashSection = document.querySelector(hash)
        if (hashSection) {
          hashSection.scrollIntoView()
        }
      }, 60)
    }, 0)
  }
}
</script>

<template>
  <header id="header" class="header">
    <UiContainer class="flex wrap items-center space-between">
      <AppLogo />
      <nav class="nav nav--main">
        <ul>
          <li
            v-for="navLink in navLinks"
            :key="navLink.id"
          >
            <a
              :href="`#${navLink.id}`"
              :class="navLink.cls ? navLink.cls : 'nav-link'"
              :title="navLink.title"
              @click="onNavLinkClick"
            >
              {{ navLink.title }} 
              <span v-if="navLink.hasUnderline" class="underline"></span>
            </a>
          </li>
        </ul>
      </nav>

      <UiMenuBtn @click="store.toggleMobileMenu()" />
    </UiContainer>
  </header>
</template>
