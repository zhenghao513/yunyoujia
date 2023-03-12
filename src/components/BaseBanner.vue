<template>
  <div class="banner">
    <span>{{ title }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = ref()
if (route.path === '/cookbook-detail') {
  title.value = route.query.title
} else if (route.path === '/leave-record-detail') {
  title.value = JSON.parse(route.query.currentInfo).leaveType
} else {
  title.value = route.meta.title
}
</script>
