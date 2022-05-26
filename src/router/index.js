import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from '@/store/index.js'

const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
// push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}
// replace
VueRouter.prototype.replace = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalReplace.call(this, location, onResolve, onReject)
  return originalReplace.call(this, location).catch(err => err)
}

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
    // redirect: '/login',
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

// 导航守卫
router.beforeEach((to, from, next) => {
  // 从 Cookie 获取 Token
  const hasToken = localStorage.getItem('token')
  // 用户角色类型
  const userRoleID = Number(localStorage.getItem('userRoleID'))
  if (hasToken !== null && hasToken !== '') {
    // 判断目标路径是否为login，是则回到该页面
    if (to.path === '/login') {
      if (userRoleID === 1) {
        console.log(userRoleID)
        next({ path: '/userIndex' })
      } else if (userRoleID === 2) {
        next({ path: '/adminIndex' })
      }
    } else {
      next()
    }
  } else {
    if (to.path !== '/login') {
      next({ path: '/login' })
    } else {
      next()
    }
  }
  return false
})

export default router
