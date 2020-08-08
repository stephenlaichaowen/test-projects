<template>
  <div>
    <main id="about">
      <div v-for="item in about" :key="item.id">
        <div v-if="!isLangChinese">
          <h1 class="lg-heading">
            {{ item.englishFirstName }}
            <span class="text-secondary">{{ item.englishLastName }}</span>
          </h1>
          <h2 class="sm-heading">{{ item.englishSubTitle }}</h2>
          <div class="about-info">
            <img src="/img/portrait.jpg" alt="Stephen Lai" class="bio-image" />

            <div class="bio">
              <h3 class="text-secondary">BIO</h3>
              <p class="bio-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure aliquam omnis ab ipsa temporibus dolor minus numquam minima autem iusto provident aperiam veniam, voluptatem ad voluptate delectus animi quaerat.</p>
            </div>
            <div class="job" v-for="item in jobs" :key="item.id" :class="`job-${item.id}`">
              <h3>{{ item.engJob }}</h3>
              <h6>{{ item.engTitle }}</h6>
              <p>{{ item.engDescription }}</p>
            </div>
          </div>
        </div>

        <div v-else>
          <h1 class="lg-heading">
            {{ item.chineseFirstName }}<span class="text-secondary">{{ item.chineseLastName }}</span>
          </h1>
          <h2 class="sm-heading">{{ item.chineseSubTitle }}</h2>
          <div class="about-info">
            <img src="/img/portrait.jpg" alt="Stephen Lai" class="bio-image" />

            <div class="bio">
              <h3 class="text-secondary">BIO</h3>
              <p class="bio-description">心人岸且爾，的東叫言隨者國好廣時，先集上小德藝值石大備在，一得品演育能有石其，自作時人，上到列級來超形話你清你，等生立標候是傷斯長的紀力明媽要。</p>
            </div>
            <div class="job" v-for="item in jobs" :key="item.id" :class="`job-${item.id}`">
              <h3>{{ item.chineseJob }}</h3>
              <h6>{{ item.chineseTitle }}</h6>
              <p>{{ item.chineseDescription }}</p>
            </div>
          </div>
        </div>
      </div>      
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HomePage',
  head() {
    return {
      title: this.title
    }
  },
  mounted() {
    if (this.isLangChinese) this.title = '我的作品'
    if (!this.isLangChinese) this.title = 'View My Work'
  },
  data() {
    return {
      title: ''
    }
  },
  computed: {
    ...mapGetters(['isLangChinese', 'about', 'jobs'])
  }
}
</script>

<style lang="scss" scoped>
#main-footer {
  // transform: translate(-65px, 200px);  
}
</style>
