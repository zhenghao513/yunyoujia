<template>
  <div>
    <van-notice-bar left-icon="volume-o" scrollable :text="noticeText" />
    <van-space direction="vertical" fill>
      <HomeSwipe />
      <HomeGrid />
    </van-space>
  </div>
</template>

<script setup>
import HomeSwipe from './home/components/HomeSwipe.vue'
import HomeGrid from './home/components/HomeGrid.vue'

const noticeText = ref('欢迎来到 xxx 幼儿园，2023年9月学位开放报名中~')
</script>
