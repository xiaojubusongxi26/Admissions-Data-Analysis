import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { // 全局管理的数据存储
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
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '' // token
}

export default new Vuex.Store({
  state: state,
  mutations: {
    $_setToken (state, value) { // 设置存储token
      state.token = value
      localStorage.setItem('token', value)
    },
    $_removeStorage (state, value) { // 删除token
      localStorage.removeItem('token')
    }
  },
  actions: {
  },
  modules: {
  }
})
