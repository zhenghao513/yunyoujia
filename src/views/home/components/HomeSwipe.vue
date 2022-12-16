<template>
  <BaseSwipe :items="items" />
</template>

<script setup>
import BaseSwipe from '../../../components/BaseSwipe.vue'
const items = ref([
  '花径不曾缘客扫，蓬门今始为君开。',
  '坚决打赢疫情防控阻击战'
])
</script>
