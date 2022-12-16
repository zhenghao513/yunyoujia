<template>
  <div>
    <BaseBanner class="apply" />
    <HomeMenu :items="items" />
  </div>
</template>

<script setup>
import BaseBanner from '../../../components/BaseBanner.vue'
import HomeMenu from '../components/HomeMenu.vue'

const items = ref([
  {
    text: '新幼儿报名',
    to: '/new-children',
    color: '#86c5e3'
  },
  {
    text: '线上缴费',
    to: '/online-pay',
    color: '#86c5e3'
  }
])
</script>
<style scoped>
.apply {
  background-color: #86c5e3;
}
</style>
