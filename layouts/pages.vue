<template>
  <div id="bg-image">
    <Navbar class="nav" />
    <nuxt class="pages" />
    <Footer class="footer" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss" scoped>
.nav {
  z-index: 3;
}
.pages {
  position: relative;
  z-index: 2;
}
</style>
