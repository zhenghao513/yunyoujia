<template>
  <div class="banner">
    <span>{{ title }}</span>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const title =
  route.path === '/cookbook-detail' ? route.query.title : ref(route.meta.title)
</script>
