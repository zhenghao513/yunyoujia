<template>
  <div>
    <BaseBanner class="leave-record" />
    <div class="main">
      <van-cell-group inset>
        <van-cell
          is-link
          :title="item.leaveReason"
          :value="
            new Date(Number.parseInt(item.submitTime)).toLocaleDateString()
          "
          v-for="(item, index) in list"
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
import { computed } from 'vue'
const store = useLeaveStore()
const list = computed(() => {
  return store.getLeaveRecord.sort((a, b) => b.submitTime - a.submitTime)
})
</script>

<style scoped>
.leave-record {
  background-color: #bbb2c8;
}
</style>
