import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { // ȫ�ֹ�������ݴ洢
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
    $_setToken (state, value) { // ���ô洢token
      state.token = value
      localStorage.setItem('token', value)
    },
    $_removeStorage (state, value) { // ɾ��token
      localStorage.removeItem('token')
    }
  },
  actions: {
  },
  modules: {
  }
})
