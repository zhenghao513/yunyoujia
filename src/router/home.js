const homeRoutes = [
  {
    path: '/visit',
    name: 'visit',
    meta: { title: '园区参观' },
    component: () => import('../views/home/views/HomeVisit.vue')
  },
  {
    path: '/apply',
    name: 'apply',
    meta: { title: '报名申请' },
    component: () => import('../views/home/views/HomeApply.vue')
  },
  {
    path: '/activities',
    name: 'activities',
    meta: { title: '保育活动' },
    component: () => import('../views/home/views/HomeActivities.vue')
  },
  {
    path: '/health-filling',
    name: 'health-filling',
    meta: { title: '健康填报' },
    component: () => import('../views/home/views/HomeFilling.vue')
  },
  {
    path: '/service',
    name: 'service',
    meta: { title: '家长服务' },
    component: () => import('../views/home/views/HomeService.vue')
  },
  {
    path: '/course',
    name: 'course',
    meta: { title: '特色课程' },
    component: () => import('../views/home/views/HomeCourse.vue')
  },
  {
    path: '/introduce',
    name: 'introduce',
    meta: { title: '园区介绍' },
    component: () => import('../views/home/views/HomeVisitIntroduce.vue')
  },
  {
    path: '/indoor',
    name: 'indoor',
    meta: { title: '室内环境' },
    component: () => import('../views/home/views/HomeVisitIndoor.vue')
  },
  {
    path: '/outdoor',
    name: 'outdoor',
    meta: { title: '室外环境' },
    component: () => import('../views/home/views/HomeVisitOutdoor.vue')
  },
  {
    path: '/safe-education',
    name: 'safe-education',
    meta: { title: '安全教育' },
    component: () =>
      import('../views/home/views/HomeActivitiesSafeEducation.vue')
  },
  {
    path: '/health-care',
    name: 'health-care',
    meta: { title: '卫生保健' },
    component: () => import('../views/home/views/HomeActivitiesHealthCare.vue')
  },
  {
    path: '/cookbook',
    name: 'cookbook',
    meta: { title: '每周食谱' },
    component: () => import('../views/home/views/HomeActivitiesCookbook.vue')
  },
  {
    path: '/cookbook-detail',
    name: 'cookbookDetail',
    meta: { title: '每周食谱详情' },
    component: () =>
      import('../views/home/views/HomeActivitiesCookbookDetail.vue')
  },
  {
    path: '/new-children',
    name: 'new-children',
    meta: { title: '新幼儿报名' },
    component: () => import('../views/home/views/HomeApplyNewChildren.vue')
  },
  {
    path: '/online-pay',
    name: 'online-pay',
    meta: { title: '线上缴费' },
    component: () => import('../views/home/views/HomeApplyOnlinePay.vue')
  },
  {
    path: '/parents',
    name: 'parents',
    meta: { title: '父母课堂' },
    component: () => import('../views/home/views/HomeServiceParents.vue')
  },
  {
    path: '/leave',
    name: 'leave',
    meta: { title: '请假' },
    component: () => import('../views/home/views/HomeServiceLeave.vue')
  },
  {
    path: '/mailbox',
    name: 'mailbox',
    meta: { title: '园长信箱' },
    component: () => import('../views/home/views/HomeServiceMailbox.vue')
  }
]

export default homeRoutes
