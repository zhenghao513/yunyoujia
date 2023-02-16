<template>
  <van-button
    round
    type="success"
    @click="backTop"
    >返回顶部</van-button
  >
</template>

<script setup>
function backTop() {
  scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped></style>
