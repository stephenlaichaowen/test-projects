export const mutations = {
  switchLang: (state) => {
    state.isLangChinese = !state.isLangChinese
  },

  setHome: (state, home) => {
    state.home = home
  },

  setAbout: (state, about) => {
    state.about = about
  },

  setJobs: (state, jobs) => {
    state.jobs = jobs
  },

  setWork: (state, work) => {
    state.work = work
  },

  setProjects: (state, projects) => {
    state.projects = projects
  },

  setContact: (state, contact) => {
    state.contact = contact
  },
}

