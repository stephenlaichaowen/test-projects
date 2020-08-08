<template>
  <main id="home">
    <div v-for="item in home" :key="item.id">
      <div v-if="!isLangChinese">
        <h1 class="lg-heading">
          {{ item.englishFirstName }}
          <span class="text-secondary">{{ item.englishLastName }}</span>
        </h1>
        <h2 class="sm-heading">{{ item.englishSubTitle }}</h2>
      </div>
      <div v-else>
        <h1 class="lg-heading">
          {{ item.chineseFirstName }}
          <span class="text-secondary">{{ item.chineseLastName }}</span>
        </h1>
        <h2 class="sm-heading">{{ item.chineseSubTitle }}</h2>
      </div>
    </div>
    <div class="icons">
      <a href="#">
        <i class="fab fa-medium fa-2x"></i>
      </a>
      <a href="#">
        <i class="fab fa-facebook fa-2x"></i>
      </a>
      <a href="#">
        <i class="fab fa-github fa-2x"></i>
      </a>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  head() {
    return {
      title: 'Home'
    }
  },

  computed: {
    ...mapGetters(['isLangChinese', 'home'])
  }
}
</script>

<style scoped>
</style>