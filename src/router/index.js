import { createRouter, createWebHashHistory } from 'vue-router'
import homeRoutes from './home'
import userRoutes from './user'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/auth'
    },
    {
      path: '/auth',
      component: () => import('../views/auth/AuthView.vue'),
      name: 'auth',
      meta: { title: '登录' }
    },
    {
      path: '/index',
      component: () => import('../layouts/BaseLayout.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          meta: { title: '首页' },
          component: () => import('../views/HomeView.vue')
        },
        ...homeRoutes,
        {
          path: '/find',
          name: 'find',
          meta: { title: '发现' },
          component: () => import('../views/FindView.vue')
        },
        {
          path: '/message',
          name: 'message',
          meta: { title: '消息' },
          component: () => import('../views/MessageView.vue')
        },
        {
          path: '/user',
          name: 'user',
          meta: { title: '我' },
          component: () => import('../views/UserView.vue')
        },
        ...userRoutes,
        { path: '/index', redirect: 'home' }
      ]
    }
  ]
})
router.beforeEach((to, from) => {
  if (to.path === '/cookbook-detail') {
    document.title = to.query.title
  } else if (to.path === '/leave-record-detail') {
    document.title = JSON.parse(to.query.currentInfo).leaveType
  } else {
    document.title = to.meta.title
  }
  return true
})

export default router
