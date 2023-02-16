<template>
  <van-grid
    :border="border"
    :square="square"
    :column-num="columnNum"
    :gutter="gutter"
  >
    <van-grid-item
      v-for="(item, index) in gridItems"
      :key="index"
      :text="item.text"
      :icon="item.icon"
      :to="item.to"
    />
  </van-grid>
</template>

<script setup>
const props = defineProps({
  columnNum: Number,
  square: Boolean,
  gutter: Number,
  gridItems: Array,
  border: Boolean
})
</script>

<style lang="scss" scoped></style>
