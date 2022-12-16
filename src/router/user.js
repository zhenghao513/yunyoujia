const userRoutes = [
  {
    path: '/address_list',
    name: 'address_list',
    meta: { title: '通讯录' },
    component: () => import('../views/user/views/UserAddressList.vue')
  },
  {
    path: '/collect',
    name: 'collect',
    meta: { title: '统计信息' },
    component: () => import('../views/user/views/UserCollect.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    meta: { title: '联系我们' },
    component: () => import('../views/user/views/UserContact.vue')
  }
]

export default userRoutes
