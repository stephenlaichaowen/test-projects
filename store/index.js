import Vuex from 'vuex'
import { state } from './state.js'
import { getters } from './getters.js'
import { actions } from './actions.js';
import { mutations } from './mutations.js';

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
  })
}

export default createStore