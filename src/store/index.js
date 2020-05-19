import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isMdUp: false,
    isSmUp: false,
    isLgUp: false
  },
  mutations: {
    updateBreakpoint(state, payload) {
      payload.forEach(item => {
        state[item.name] = item.result;
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
