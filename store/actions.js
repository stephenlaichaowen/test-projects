export const actions = {
  switchLang({ commit }) {
    commit('switchLang')
  },

  // nuxtServerInit({ commit }, context) {
  //   return context.app.$axios
  //     .$get('/home.json')
  //     .then(res => {
  //       commit('setHome', res.data)
  //     })
  //     .catch(err => context.error(err))   
  // },

  // async nuxtServerInit({ commit }, context) {
  //   try {
  //     const res =  await context.app.$axios.$get('/home.json')
  //     commit('setHome', res.data)
  //   } catch (err) {
  //     // console.log(err);
  //     context.error(err)
  //   }
  // },

  async nuxtServerInit({ dispatch }) {  
    await dispatch('setHome')
    await dispatch('setAbout')
    await dispatch('setJobs')
    await dispatch('setWork')
    await dispatch('setProjects')   
    return await dispatch('setContact')
  },
  
  setHome({ commit }) {
    return this.$axios.$get(process.env.baseURL + '/home.json')
    .then(data => {
      commit('setHome', data)
    })
  },

  setAbout({ commit }) {
    return this.$axios.$get('/about.json')
    .then(data => {
      commit('setAbout', data)
    })
  },

  setJobs({ commit }) {
    return this.$axios.$get('/jobs.json')
    .then(data => {
      commit('setJobs', data)
    })
  },

  setWork({ commit }) {
    return this.$axios.$get('/work.json')
    .then(data => {
      commit('setWork', data)
    })
  },

  setProjects({ commit }) {
    return this.$axios.$get('/projects.json')
    .then(data => {
      commit('setProjects', data)
    })
  },

  setContact({ commit }) {
    return this.$axios.$get('/contact.json')
    .then(data => {
      commit('setContact', data)
    })
  },
}
