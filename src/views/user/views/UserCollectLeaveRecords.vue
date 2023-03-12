<template>
  <div>
    <BaseBanner class="leave-record" />
    <div class="main">
      <van-cell-group inset>
        <van-cell
          is-link
          :title="item.leaveReason"
          :value="item.submitTime"
          v-for="(item, index) in store.getLeaveRecord"
          @click="
            $router.push({
              name: 'leaveRecordDetail',
              query: {
                currentInfo: JSON.stringify(item),
                index
              }
            })
          "
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
