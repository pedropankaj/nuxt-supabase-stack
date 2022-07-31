<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: String, // s | m | lg
  state: String, // default | primary | success | error | warning
})

const btnCls = computed(() => {
  const cls = ['btn'] 
  if (props.size) {
    cls.push(`btn--${props.size}`)
  }
  if (props.state) {
    cls.push(`btn--${props.state}`)
  }
  return cls.join(' ')
})
</script>

<template>
  <button type="submit" :class="btnCls">
    <slot />
  </button>
</template>