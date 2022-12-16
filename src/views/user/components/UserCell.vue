<template>
  <BaseCell is-link :cell="userCell" />
</template>

<script setup>
import BaseCell from '../../../components/BaseCell.vue'

const userCell = ref([
  { title: '通讯录', to: '/address_list' },
  { title: '统计信息', to: '/collect' },
  { title: '联系我们', to: '/contact' }
])
</script>
