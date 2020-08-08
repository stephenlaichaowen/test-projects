<template>
  <header>
    <div class="menu-btn" :class="{ close: isMenuOpened }" @click="isMenuOpened = !isMenuOpened">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>

    <nav class="menu" :class="{ show: isMenuOpened }">
      <div class="menu-branding" :class="{ show: isMenuOpened }">
        <div class="portrait"></div>
      </div>

      <ul class="menu-nav" :class="{ show: isMenuOpened }">
        <!-- <li class="nav-item" :class="{ show: isMenuOpened }" v-for="item in menu" :key="item.id" @click="isMenuOpened = false">
          <nuxt-link class="nav-link" :to="item.link" v-if="!isLangChinese">{{ item.englishTitle }}</nuxt-link>
          <nuxt-link class="nav-link" :to="item.link" v-else>{{ item.chineseTitle }}</nuxt-link>
        </li> -->
        
        <div v-if="!isLangChinese">
          <li class="nav-item" :class="{ show: isMenuOpened }" @click="isMenuOpened = false">
            <nuxt-link class="nav-link" to="/about">About Me</nuxt-link>                                   
          </li>
          <li class="nav-item" :class="{ show: isMenuOpened }" @click="isMenuOpened = false">
            <nuxt-link class="nav-link" to="/work">My Work</nuxt-link>                        
          </li>
          <li class="nav-item" :class="{ show: isMenuOpened }" @click="isMenuOpened = false">
            <nuxt-link class="nav-link" to="/contact">Reach Me</nuxt-link>                        
          </li>
          <li class="nav-item" :class="{ show: isMenuOpened }" @click="isMenuOpened = false">
            <nuxt-link class="nav-link" to="/admin">Admin</nuxt-link>                        
          </li>
        </div>
        <div v-else>
          <li class="nav-item" :class="{ show: isMenuOpened }" @click="isMenuOpened = false">
            <nuxt-link class="nav-link" to="/about">關於我</nuxt-link>                        
          </li>
          <li class="nav-item" :class="{ show: isMenuOpened }" @click="isMenuOpened = false">
            <nuxt-link class="nav-link" to="/work">我的作品</nuxt-link>                        
          </li>
          <li class="nav-item" :class="{ show: isMenuOpened }" @click="isMenuOpened = false">
            <nuxt-link class="nav-link" to="/contact">聯繫我</nuxt-link>                        
          </li>
          <li class="nav-item" :class="{ show: isMenuOpened }" @click="isMenuOpened = false">
            <nuxt-link class="nav-link" to="/admin">管理員</nuxt-link>                        
          </li>
        </div>

        <div class="flex-box">
          <i class="fas fa-home fa-2x" @click="toHomePage"></i>
          <i class="fas fa-language fa-2x" @click="changeLang"></i>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Navbar',
  // created() {
  //   this.$axios.$get('/menu.json').then(data => (this.menu = data))
  // },
  computed: {
    ...mapGetters(['isLangChinese'])
  },
  data() {
    return {
      // menu: [],
      isMenuOpened: false
    }
  },
  methods: {
    ...mapActions(['switchLang']),
    toHomePage() {
      this.isMenuOpened = false
      this.$router.push('/')
    },
    changeLang() {
      this.switchLang()
      this.isMenuOpened = false
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: $secondary-color;
}

i {
  // border: 1px solid white;
  padding: 1rem 1.5rem;
  cursor: pointer;

  &:hover {
    color: $secondary-color;
  }
}

.flex-box {
  justify-content: space-around;
}
</style>
