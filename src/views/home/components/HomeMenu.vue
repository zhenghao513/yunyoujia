<template>
  <div class="main">
    <van-space
      direction="vertical"
      fill
      :size="20"
    >
      <van-button
        type="primary"
        block
        v-for="(item, index) in items"
        :key="index"
        :to="item.to"
        :color="item.color"
      >
        {{ item.text }}
      </van-button>
    </van-space>
  </div>
</template>

<script setup>
const props = defineProps({
  items: Array
})
</script>

<style scoped>
.van-button--block {
  height: 75px;
}
</style>
