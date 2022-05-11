import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/',
    name: 'Index',
    redirect: '/login',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: '/adminHome',
        name: 'adminHome',
        component: () => import('@/views/admin/adminHome.vue'),
        children: [
          {
            path: '/systemMaintenance',
            name: 'systemMaintenance',
            component: () => import('@/views/admin/systemMaintenance.vue')
          },
          {
            path: '/userManagement',
            name: 'userManagement',
            component: () => import('@/views/admin/userManagement.vue')
          }
        ]
      },
      {
        path: '/userHome',
        name: 'userHome',
        component: () => import('@/views/user/userHome.vue'),
        children: [
          {
            path: '/analysisQuery',
            name: 'analysisQuery',
            component: () => import('@/views/user/analysisQuery.vue')
          },
          {
            path: '/dataDisplay',
            name: 'dataDisplay',
            component: () => import('@/views/user/dataDisplay.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
