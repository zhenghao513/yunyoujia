<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item
      v-for="(item, index) in tab"
      :to="item.to"
      :key="index"
      :icon="item.icon"
      >{{ item.title }}</van-tabbar-item
    >
  </van-tabbar>
</template>

<script setup>
const props = defineProps({
  tab: Array
})

const active = ref('0')
</script>
