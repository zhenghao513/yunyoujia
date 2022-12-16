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
const value = ref('')
</script>
