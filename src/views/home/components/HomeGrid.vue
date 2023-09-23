<template>
  <BaseGrid
    square
    :column-num="3"
    :gutter="10"
    :gridItems="gridItems"
  />
</template>

<script setup>
import BaseGrid from '../../../components/BaseGrid.vue'

const gridItems = ref([
  {
    text: '园区参观',
    icon: 'flag-o',
    to: '/visit',
  },
  {
    text: '报名申请',
    icon: 'font-o',
    to: '/apply',
  },
  {
    text: '保育活动',
    icon: 'smile-o',
    to: '/activities',
  },
  {
    text: '健康填报',
    icon: 'records',
    to: '/health-filling',
  },
  {
    text: '家长服务',
    icon: 'service-o',
    to: '/service',
  },
  {
    text: '特色课程',
    icon: 'medal-o',
    to: '/course',
  },
])
</script>
