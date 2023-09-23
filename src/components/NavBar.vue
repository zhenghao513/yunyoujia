<template>
  <van-nav-bar
    :title="title"
    fixed
    :left-arrow="leftArrow"
    @click-left="onClickLeft"
  />
</template>

<script setup>
const props = defineProps({
  title: String,
  leftArrow: Boolean,
})

const onClickLeft = () => history.back()
</script>
