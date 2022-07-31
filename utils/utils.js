/* Selector util */
const select = (el = '', all = false) => {
  el = el.trim()
  if (all) { 
    return document.querySelectorAll(el)
  }
  return document.querySelector(el)
}

/* On scroll event listener */
const onScroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

/* Initializeaza vechile evenimente */
export function initApp() {
  /* Activeaza linkurile cand suntem intr-o sectiune */
  const navLinks = select('.nav--main .nav-link', true)
  const activateNavLinks = () => {
    let position = window.scrollY + 200
    navLinks.forEach(navLink => {
      if (!navLink.hash) return
      let section = select(navLink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navLink.classList.add('active')
      } else {
        navLink.classList.remove('active')
      }
    })
  }
  // listeners
  activateNavLinks()
  onScroll(document, activateNavLinks)

  if (window.location.hash) {
    const el = select(window.location.hash) 
    if (el) {
      el.scrollIntoView()
    }
  }

  /* Toggle .header--scrolled  class to #header when page is scrolled */
  const selectedHeader = select('#header')
  if (selectedHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectedHeader.classList.add('header--scrolled')
      } else {
        selectedHeader.classList.remove('header--scrolled')
      }
    }
    headerScrolled()
    onScroll(document, headerScrolled)
  }

  /* Back to top */
  const backToTop = select('.back-to-top')
  if (backToTop) {
    const toggleBackToTop = () => {
      if (window.scrollY > 100) {
        backToTop.classList.add('active')
      } else {
        backToTop.classList.remove('active')
      }
    }
    toggleBackToTop()
    onScroll(document, toggleBackToTop)
  }
}
