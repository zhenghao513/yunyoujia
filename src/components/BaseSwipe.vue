<template>
  <van-swipe class="my-swipe" :autoplay="autoplay" indicator-color="white">
    <van-swipe-item v-for="(item, index) in items" :key="index">
      {{ item }}
    </van-swipe-item>
  </van-swipe>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: ['1', '2', '3', '4']
  },
  autoplay: {
    typeof: Number,
    default: 3000
  }
})
</script>

<style>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
