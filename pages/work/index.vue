<template>
  <div>
    <main id="work">
      <div v-for="item in work" :key="item.id">
        <div v-if="!isLangChinese">
          <h1 class="lg-heading">
            {{ item.englishFirstName }}
            <span class="text-secondary">{{ item.englishLastName }}</span>
          </h1>
          <h2 class="sm-heading">{{ item.englishSubTitle }}</h2>
          <div class="projects">
            <div class="item" v-for="item in projects" :key="item.id">
              <a href="#!" class="banner">
                <img :src="item.img" alt="Project" />
              </a>
              <div class="btn-group">
                <a :href="item.mediumLink" class="btn-light">
                  <i class="fab fa-medium"></i> Medium
                </a>
                <a :href="item.githubLink" class="btn-dark">
                  <i class="fab fa-github"></i> Github
                </a>
              </div>
            </div>
          </div>
        </div>

        <div v-else>
          <h1 class="lg-heading">
            {{ item.chineseFirstName }}<span class="text-secondary">{{ item.chineseLastName }}</span>
          </h1>
          <h2 class="sm-heading">{{ item.chineseSubTitle }}</h2>
          <div class="projects">
             <div class="item" v-for="item in projects" :key="item.id">
              <a href="#!" class="banner">
                <img :src="item.img" alt="Project" />
              </a>
              <div class="btn-group">
                <a :href="item.mediumLink" class="btn-light">
                  <i class="fab fa-medium"></i> Medium
                </a>
                <a :href="item.githubLink" class="btn-dark">
                  <i class="fab fa-github"></i> Github
                </a>
              </div>
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
      title: 'My Work'
    }
  },
  computed: {
    ...mapGetters(['isLangChinese', 'work', 'projects'])
  }
}
</script>


<style lang="scss" scoped>
#main-footer {
  // transform: translate(-65px, 250px);
}
</style>


                                                                  