<script setup>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<template>
  <div class="layout layout--default">
    <AppHeader />
    
    <main>
      <slot />
    </main>

    <AppFooter />
  </div>
</template>
