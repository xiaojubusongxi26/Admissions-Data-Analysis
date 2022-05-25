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
        name: '管理员首页',
        component: () => import('@/views/admin/adminHome.vue'),
        children: [
          {
            path: '/adminIndex',
            name: '数据展示',
            component: () => import('@/views/admin/dataShow.vue')
          },
          {
            path: '/systemMaintenance',
            name: '系统维护',
            component: () => import('@/views/admin/systemMaintenance.vue')
          },
          {
            path: '/messageCenter',
            name: '消息中心',
            component: () => import('@/views/admin/messageCenter.vue')
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
          },
          {
            path: '/personalCenter',
            name: '个人中心',
            component: () => import('@/views/admin/personalCenter.vue')
          }
        ]
      },
      {
        path: '/userHome',
        name: '用户',
        component: () => import('@/views/user/userHome.vue'),
        children: [
          {
            path: '/userIndex',
            name: '用户主页',
            component: () => import('@/views/user/userIndex.vue')
          },
          {
            path: '/analysisQuery',
            name: '分析查询',
            component: () => import('@/views/user/analysisQuery.vue')
          },
          {
            path: '/dataDisplay',
            name: '展示大厅',
            component: () => import('@/views/user/dataDisplay.vue')
          },
          {
            path: '/userCenter/:id',
            name: '用户中心',
            component: () => import('@/views/user/userCenter.vue')
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
