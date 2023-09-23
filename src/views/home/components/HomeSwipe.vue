<template>
  <BaseSwipe :items="items" />
</template>

<script setup>
import BaseSwipe from '../../../components/BaseSwipe.vue'
const items = ref([
  '花径不曾缘客扫，蓬门今始为君开。',
  '坚决打赢疫情防控阻击战',
  '校园信息化，育人现代化。',
  '在爱中让孩子们学会爱。',
  '关爱幼苗，快乐起跑。',
])
</script>
