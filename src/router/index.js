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
    redirect: '/userInfo/1001',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: '/adminHome',
        name: '管理员首页',
        component: () => import('@/views/admin/adminHome.vue'),
        children: [
          {
            path: '/dataShow',
            name: '数据展示',
            component: () => import('@/views/admin/dataShow.vue')
          },
          {
            path: '/systemMaintenance',
            name: '系统维护',
            component: () => import('@/views/admin/systemMaintenance.vue')
          },
          {
            path: '/userManagement',
            name: '用户管理',
            component: () => import('@/views/admin/userManagement/userManagement.vue'),
            children: [
              {
                path: '/userList',
                name: '用户列表',
                component: () => import('@/views/admin/userManagement/userList.vue')
              },
              {
                path: '/addUser',
                name: '添加用户',
                component: () => import('@/views/admin/userManagement/addUser.vue')
              },
              {
                path: '/userInfo/:id',
                name: '用户详情',
                component: () => import('@/views/admin/userManagement/userInfo.vue')
              },
              {
                path: '/reviseUser/:id',
                name: '修改用户信息',
                component: () => import('@/views/admin/userManagement/reviseUser.vue')
              },
              {
                path: '/resetUserPassword/:id',
                name: '重置用户密码',
                component: () => import('@/views/admin/userManagement/resetUserPassword.vue')
              }
            ]
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
