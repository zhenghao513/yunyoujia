<template>
  <van-config-provider :theme-vars="themeVars">
    <van-card
      :desc="userInfo.desc"
      :title="userInfo.title"
      :thumb="userInfo.thumb"
    />
  </van-config-provider>
</template>

<script setup>
const userInfo = ref({
  desc: '全面 不止一面',
  title: '李小花',
  thumb: '/avatar.jpg'
})

const themeVars = ref({
  cardBackgroundColor: 'white',
  cardThumbSize: '96px'
})
</script>

<style scoped>
.van-card {
  height: 150px;
}
</style>
