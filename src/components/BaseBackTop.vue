<template>
  <van-button round type="success" @click="backTop">返回顶部</van-button>
</template>

<script setup>
function backTop() {
  const html = document.querySelector('html')

  html.scrollIntoView({
    behavior: 'smooth'
  })
}
</script>

<style scoped></style>
