<template>
  <NavBar
    :left-arrow="isSubpage"
    :title="title"
    v-if="!isWeChat"
  />
  <RouterView :class="{ content: true, wechat: isWeChat }" />
  <transition name="van-slide-up">
    <TabBar
      :tab="tab"
      v-show="!isSubpage"
    />
  </transition>
</template>

<script setup>
const tab = ref([
  {
    title: '首页',
    icon: 'home-o',
    to: '/home'
  },
  // {
  //   title: '发现',
  //   icon: 'guide-o',
  //   to: '/find'
  // },
  // {
  //   title: '消息',
  //   icon: 'envelop-o',
  //   to: '/message'
  // },
  {
    title: '我',
    icon: 'user-o',
    to: '/user'
  }
])

const route = useRoute()
const title = computed(() => {
  return route.path === '/cookbook-detail'
    ? route.query.title
    : route.meta.title
})

const isWeChat = computed(() => {
  const ua = navigator.userAgent
  return /MicroMessenger/i.test(ua)
})

const isSubpage = computed(() => {
  return !['/home', '/message', '/find', '/user'].includes(route.path)
})
</script>
