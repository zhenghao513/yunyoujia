<template>
  <div>
    <BaseBanner class="leave-records-details" />
    <div class="main">
      <VanSpace
        fill
        direction="vertical"
        :size="32"
      >
        <div>
          <van-cell-group inset>
            <van-cell
              :title="title[i]"
              :value="v.toString()"
              v-for="(v, k, i) in currentInfo"
            />
          </van-cell-group>
        </div>
        <div class="handle-button">
          <van-button
            type="danger"
            @click="deleteRecord($route.query.index)"
            >撤销申请</van-button
          >
        </div>
      </VanSpace>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseBanner from '../../../components/BaseBanner.vue'
import { useLeaveStore } from '../../../store/useLeaveStore'
const route = useRoute()
const router = useRouter()
const info = JSON.parse(route.query.currentInfo)
info.isHalf = info.isHalf === false ? '否' : '是'
info.submitTime = new Date(Number.parseInt(info.submitTime)).toLocaleDateString()
const currentInfo = ref(info)
const title = [
  '姓名',
  '班级',
  '班主任',
  '是否半天假',
  '请假时间',
  '请假类型',
  '请假事由',
  '提交时间'
]
const store = useLeaveStore()
function deleteRecord(index) {
  store.deleteLeaveRecord(index)
  router.back()
}
</script>

<style scoped>
.leave-records-details {
  background-color: #bbb2c8;
}

.handle-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
