import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userToken: null
  },
  mutations: {
    getUserToken(state, token) {
      this.state.userToken = token
    }
  },
  actions: {
    actionGetUserToken({commit}, token) {
      commit('getUserToken', token)
    }
  },
  modules: {
  }
})
