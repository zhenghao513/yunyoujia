<template>
  <div>
    <van-space fill direction="vertical">
      <UserCard />
      <UserCell />
    </van-space>
  </div>
</template>

<script setup>
import UserCard from './user/components/UserCard.vue'
import UserCell from './user/components/UserCell.vue'
</script>
