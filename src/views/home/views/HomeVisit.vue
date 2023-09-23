<template>
  <div>
    <BaseBanner class="visit-campus" />
    <HomeMenu :items="items" />
  </div>
</template>

<script setup>
import BaseBanner from '../../../components/BaseBanner.vue'
import HomeMenu from '../components/HomeMenu.vue'

const items = ref([
  {
    text: '园区介绍',
    to: '/introduce',
    color: '#8981f7',
  },
  {
    text: '室内环境',
    to: '/indoor',
    color: '#8981f7',
  },
  {
    text: '室外环境',
    to: '/outdoor',
    color: '#8981f7',
  },
])
</script>
<style scoped>
.visit-campus {
  background-color: #8981f7;
}
</style>
