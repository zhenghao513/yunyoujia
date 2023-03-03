<template>
  <div>
    <BaseBanner class="leave-record" />
    <div class="main">
      <van-cell-group inset>
        <van-cell
          is-link
          :title="item.leaveType"
          :value="item.submitTime"
          v-for="item in store.getLeaveRecord"
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script setup>
import BaseBanner from '../../../components/BaseBanner.vue'
import { useLeaveStore } from '../../../store/useLeaveStore'
const store = useLeaveStore()
</script>

<style scoped>
.leave-record {
  background-color: #bbb2c8;
}
</style>
