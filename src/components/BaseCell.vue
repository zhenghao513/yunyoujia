<template>
  <van-cell-group :inset="inset">
    <van-cell
      :is-link="isLink"
      v-for="(item, index) in cell"
      :key="index"
      :title="item.title"
      :to="item.to"
      :value="item.value"
      :url="item.url"
    />
  </van-cell-group>
</template>

<script setup>
const props = defineProps({
  cell: Array,
  inset: {
    type: Boolean,
    default: false,
  },
  isLink: {
    type: Boolean,
    default: false,
  },
})
</script>
