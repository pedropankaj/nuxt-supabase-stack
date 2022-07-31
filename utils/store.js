import { reactive } from 'vue'

export const store = reactive({
  isMobileMenuOpen: false,

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen 
  },
})
