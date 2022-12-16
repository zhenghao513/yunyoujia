<template>
  <div>
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      input-align="center"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<style scoped></style>
