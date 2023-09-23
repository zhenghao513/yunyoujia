const userRoutes = [
  {
    path: '/address_list',
    name: 'address_list',
    meta: { title: '通讯录' },
    component: () => import('../views/user/views/UserAddressList.vue'),
  },
  {
    path: '/collect',
    name: 'collect',
    meta: { title: '统计信息' },
    component: () => import('../views/user/views/UserCollect.vue'),
  },
  {
    path: '/leave-record',
    name: 'leaveRecord',
    meta: { title: '请假记录' },
    component: () => import('../views/user/views/UserCollectLeaveRecords.vue'),
  },
  {
    path: '/leave-record-detail',
    name: 'leaveRecordDetail',
    meta: { title: '请假记录细节' },
    component: () =>
      import('../views/user/views/UserCollectLeaveRecordsDetail.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    meta: { title: '联系我们' },
    component: () => import('../views/user/views/UserContact.vue'),
  },
]

export default userRoutes
