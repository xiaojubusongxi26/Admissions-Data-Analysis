import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userId: '0',
  userRoleID: localStorage.getItem('userRoleID') ? localStorage.getItem('userRoleID') : 0,
  userInfo: JSON.parse(sessionStorage.getItem('userInfo')) ? JSON.parse(sessionStorage.getItem('userInfo')) : {
    userId: '0',
    roleId: '',
    username: '',
    avatar: require('@/assets/images/default/avatar/defaultManImg.png'),
    email: '',
    phone: '',
    name: '',
    sex: '',
    status: ''
  },
  defaultManImg: require('@/assets/images/default/avatar/defaultManImg.png'),
  defaultWomanImg: require('@/assets/images/default/avatar/defaultWomanImg.png'),
  defaultSecrecyImg: require('@/assets/images/default/avatar/defaultSecrecyImg.png'),
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
    setUserRoleID (state, value) {
      state.userRoleID = value
      localStorage.setItem('userRoleID', value)
    },
    setUserInfo (state, value) {
      // 设置用户信息
      state.userInfo = JSON.parse(JSON.stringify(value))
      console.log(value)
      // state.userId = value.userId
      console.log(state.userInfo)
      sessionStorage.setItem('userInfo', JSON.stringify(value))
    },
    logout(state, value) {
      localStorage.setItem('token', '')
      localStorage.setItem('userRoleID', '')
      sessionStorage.setItem('userInfo', JSON.stringify(''))
      state.userId = '0'
      state.userRoleID = 0
      state.userInfo = {}
      state.token = ''
    }
  },
  actions: {
    update_userRoleID: (context, payload) => {
      context.commit('setUserRoleID', payload)
    },
    update_userInfo: (context, payload) => {
      context.commit('setUserInfo', payload)
    },
  },
  getters: {
    getUserInfo: state => {
      return state.userInfo
    },
    getDefaultManImg: state => {
      return state.defaultManImg
    },
    getDefaultWomanImg: state => {
      return state.defaultWomanImg
    },
    getDefaultSecrecyImg: state => {
      return state.defaultSecrecyImg
    },
    getUserId: state => {
      return state.userId
    },
    getToken: state => {
      return state.token
    },
    getUserRoleId: state => {
      return state.userRoleID
    }
  },
  modules: {
  },
})
