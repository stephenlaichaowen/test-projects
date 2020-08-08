<template>
  <div id="bg-image">
    <Navbar />
    <nuxt class="page" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  }
}
</script>

// <style lang="scss" scoped>
// #bg-image {
//   max-width: 1920px;
//   margin: auto;
// }
</style>
