<template>
  <div>
    <main id="contact">
      <div v-for="item in contact" :key="item.id">
        <div v-if="!isLangChinese">
          <h1 class="lg-heading">
            {{ item.englishFirstName }}
            <span class="text-secondary">{{ item.englishLastName }}</span>
          </h1>
          <h2 class="sm-heading">{{ item.englishSubTitle }}</h2>
          <div class="boxes">
            <div>
              <span class="text-secondary">Email:</span>
              {{ item.engEmail }}
            </div>
            <div>
              <span class="text-secondary">Phone:</span>
              {{ item.engPhone}}
            </div>
            <div>
              <span class="text-secondary">Address:</span>
              {{ item.engAddress }}
            </div>
          </div>
        </div>

        <div v-else>
          <h1 class="lg-heading">
            {{ item.chineseFirstName }}<span class="text-secondary">{{ item.chineseLastName }}</span>
          </h1>
          <h2 class="sm-heading">{{ item.chineseSubTitle }}</h2>
          <div class="boxes">
            <div>
              <span class="text-secondary">Email:</span>
              {{ item.chineseEmail }}
            </div>
            <div>
              <span class="text-secondary">Phone:</span>
              {{ item.chinesePhone}}
            </div>
            <div>
              <span class="text-secondary">Address:</span>
              {{ item.chineseAddress }}
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HomePage',
  head() {
    return {
      title: 'Reach Me'
    }
  },
  computed: {
    ...mapGetters(['isLangChinese', 'contact'])
  }
}
</script>

<style lang="scss" scoped>
#main-footer {
  // transform: translate(-65px, 250px);
}
</style>
