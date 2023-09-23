<template>
  <div>
    <BaseBanner class="activities" />
    <HomeMenu :items="items" />
  </div>
</template>

<script setup>
import BaseBanner from '../../../components/BaseBanner.vue'
import HomeMenu from '../components/HomeMenu.vue'

const items = ref([
  {
    text: '安全教育',
    to: '/safe-education',
    color: '#92d6cc',
  },
  {
    text: '卫生保健',
    to: '/health-care',
    color: '#92d6cc',
  },
  {
    text: '每周食谱',
    to: '/cookbook',
    color: '#92d6cc',
  },
])
</script>
<style scoped>
.activities {
  background-color: #92d6cc;
}
</style>
