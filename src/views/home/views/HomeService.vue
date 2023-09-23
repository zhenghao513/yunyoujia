<template>
  <div>
    <BaseBanner class="service" />
    <HomeMenu :items="items" />
  </div>
</template>

<script setup>
import BaseBanner from '../../../components/BaseBanner.vue'
import HomeMenu from '../components/HomeMenu.vue'

const items = ref([
  // {
  //   text: '父母课堂',
  //   to: '/parents',
  //   color: '#bddb69'
  // },
  {
    text: '请假',
    to: '/leave',
    color: '#bddb69',
  },
  {
    text: '园长信箱',
    to: '/mailbox',
    color: '#bddb69',
  },
])
</script>

<style scoped>
.service {
  background-color: #bddb69;
}
</style>
