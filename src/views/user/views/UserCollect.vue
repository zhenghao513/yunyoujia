<template>
  <div>
    <BaseBanner class="collect" />
    <div class="main">
      <VanSpace
        fill
        direction="vertical"
        :size="32"
      >
        <div class="container">
          <div class="circle">
            <div>{{ tweened.filling.toFixed(0) }}</div>
            <span>健康填报</span>
          </div>
          <div class="circle">
            <div>{{ tweened.leave.toFixed(0) }}</div>
            <span>请假次数</span>
          </div>
          <div class="circle">
            <div>{{ tweened.mailbox.toFixed(0) }}</div>
            <span>园长信箱</span>
          </div>
        </div>

        <div>
          <van-cell-group inset>
            <van-cell
              title="请假记录"
              is-link
              :to="{ name: 'leaveRecord' }"
            />
            <van-cell
              title="已发送"
              is-link
            />
          </van-cell-group>
        </div>
      </VanSpace>
    </div>
  </div>
</template>

<script setup>
import BaseBanner from '../../../components/BaseBanner.vue'
import { ref, reactive, watch } from 'vue'
import gsap from 'gsap'
import { useCounterStore } from '../../../store/index'
import { useLeaveStore } from '../../../store/useLeaveStore'
const store = useCounterStore()
const leaveStore = useLeaveStore()

const filling = ref(0)
const leave = ref(0)
const mailbox = ref(0)

const tweened = reactive({
  filling: 0,
  leave: 0,
  mailbox: 0
})

setTimeout(() => {
  filling.value = store.getHealthReportCount + new Date().getDate() - 1
  leave.value = leaveStore.getLeaveRecord.length
  mailbox.value = store.getmailboxCount + 3
}, 300)
watch(filling, n => {
  gsap.to(tweened, { duration: 0.5, filling: Number(n) || 0 })
})
watch(leave, n => {
  gsap.to(tweened, { duration: 0.5, leave: Number(n) || 0 })
})
watch(mailbox, n => {
  gsap.to(tweened, { duration: 0.5, mailbox: Number(n) || 0 })
})
</script>

<style scoped>
.collect {
  background-color: #bbb2c8;
}
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.circle {
  height: 100px;
  width: 100px;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  font-size: 20px;
  background-color: white;
}

.circle *:last-child {
  font-size: 14px;
}
</style>
