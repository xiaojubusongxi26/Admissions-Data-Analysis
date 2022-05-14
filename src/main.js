import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import * as echarts from 'echarts'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 修改element主题样式
import './style/element-variables.scss'

Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts

Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.filter('formValidateFun', (value, type) => {
  value = (value + '').replace(/(^\s*)|(\s*$)/g, '') // 先去除前后空格，排除都是空格的情况
  switch (type) {
    case 'number':
      value = value || value === 0 ? Number(value) : ''
      break
  }
  return value
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
