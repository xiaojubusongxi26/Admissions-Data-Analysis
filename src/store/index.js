import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userId: sessionStorage.getItem('userId'),
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
    status: '',
    score: 0,
    province: ''
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
      // console.log(value)
      state.userInfo = JSON.parse(JSON.stringify(value))
      state.userId = value.userId
      // 设置默认头像
      if (state.userInfo.avatar === null) {
        if (state.userInfo.sex === 0) {
          state.userInfo.avatar = state.defaultManImg
        } else if (state.userInfo.sex === 1) {
          state.userInfo.avatar = state.defaultWomanImg
        } else {
          state.userInfo.avatar = state.defaultSecrecyImg
        }
      }
      sessionStorage.setItem('userId', value.userId)
      // console.log(value)
      sessionStorage.setItem('userInfo', JSON.stringify(state.userInfo))
    },
    setUserAvatar (state, value) {
      // 修改头像
      state.userInfo.avatar = value
      sessionStorage.setItem('userInfo', JSON.stringify(state.userInfo))
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
    update_userAvatar: (context, payload) => {
      context.commit('setUserAvatar', payload)
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
    },
    getUserAvatar: state => {
      return state.userInfo.avatar
    }
  },
  modules: {
  },
})
