import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  isLogin: '0',
  userInfo: sessionStorage.getItem('userinfo') ? sessionStorage.getItem('userinfo') : {
    id: 0,
    username: '',
    userTitle: '',
    userCity: '',
    userAvatar: '',
    userSign: '',
    userBg: null
  },
  today: '',
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '' // token
}

export default new Vuex.Store({
  state: state,
  mutations: {
    $_setToken (state, value) {
      state.token = value
      localStorage.setItem('token', value)
    },
    $_removeStorage (state, value) {
      localStorage.removeItem('token')
    },
    setDate (state, value) {
      state.today = value
    }
  },
  actions: {
    updated_Today: (context, payload) => {
      context.commit('setDate', payload)
    }
  },
  modules: {
  }
})
