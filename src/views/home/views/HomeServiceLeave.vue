<template>
  <div>
    <BaseBanner class="leave" />
    <div class="leave-form">
      <template v-if="!store.isLeaveApply">
        <van-form @submit="onSubmit">
          <van-cell-group inset>
            <van-field
              :model-value="name"
              name="name"
              label="姓名"
              disabled
            />
            <van-field
              :model-value="grade"
              name="grade"
              label="班级"
              disabled
            />
            <van-field
              :model-value="teacher"
              name="teacher"
              label="班主任"
              disabled
            />
            <!-- 开关 -->
            <van-field
              name="isHalf"
              label="半天假"
            >
              <template #input>
                <van-switch
                  v-model="isHalf"
                  size="20"
                />
              </template>
            </van-field>
            <!-- 请假时间 -->
            <van-field
              required
              v-model="leaveDates"
              is-link
              readonly
              name="leaveDates"
              label="请假时间"
              placeholder="点击选择时间"
              :rules="[
                { required: true, message: '必填项' },
                {
                  validator: validatorMessage,
                  message: '结束时间必须大于开始时间'
                }
              ]"
              @click="showleaveDatesPicker = true"
            />
            <!-- 日期区间 -->
            <van-calendar
              v-if="!isHalf"
              v-model:show="showleaveDatesPicker"
              type="range"
              @confirm="onLeaveDatesConfirm"
            />

            <template v-else>
              <!-- 开始时间 -->
              <van-popup
                v-model:show="showleaveDatesPicker"
                position="bottom"
              >
                <van-datetime-picker
                  v-if="isShow"
                  type="time"
                  title="选择开始时间"
                  @confirm="onLeaveDatesConfirm"
                  @cancel="showleaveDatesPicker = false"
                />

                <van-datetime-picker
                  v-else
                  type="time"
                  title="选择结束时间"
                  @confirm="onLeaveDatesConfirm"
                  @cancel="showleaveDatesPicker = false"
                />
              </van-popup>
            </template>

            <!-- 请假类型 -->
            <van-field
              required
              v-model="leaveType"
              is-link
              readonly
              name="leaveType"
              label="请假类型"
              placeholder="点击选择类型"
              @click="showLeaveTypePicker = true"
              :rules="[{ required: true, message: '必填项' }]"
            />
            <van-popup
              v-model:show="showLeaveTypePicker"
              position="bottom"
            >
              <van-picker
                :columns="typeColumns"
                @confirm="onLeaveTypeConfirm"
                @cancel="showLeaveTypePicker = false"
              />
            </van-popup>

            <!-- 请假事由 -->
            <van-field
              required
              v-model="leaveReason"
              name="leaveReason"
              label="请假事由"
              placeholder="请输入请假事由"
              :rules="[{ required: true, message: '必填项' }]"
            />
          </van-cell-group>
          <div style="margin: 16px">
            <van-button
              round
              block
              type="primary"
              native-type="submit"
            >
              提交
            </van-button>
          </div>
        </van-form>
      </template>
      <template v-else>
        <van-empty
          image="/smile.svg"
          image-size="80"
          description="当前已存在请假申请，请销假后再来"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import BaseBanner from '../../../components/BaseBanner.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCounterStore } from '../../../store/index'
import { useLeaveStore } from '../../../store/useLeaveStore'

const name = ref('李小花')
const grade = ref('2201')
const teacher = ref('林婷婷')
const isHalf = ref(false)
// 请假时间
const leaveDates = ref('')
const showleaveDatesPicker = ref(false)
const isShow = ref(true)
const formatDate = date => `${date.getMonth() + 1}/${date.getDate()}`

const startTime = ref('')

const validatorMessage = val => {
  if (isHalf.value) {
    const [h1, m1, opt, h2, m2] = val.split(/[ . || - ||\/||:]/)
    const left = h1 * 60 + m1
    const right = h2 * 60 + m2
    return left < right
  }
}
const onLeaveDatesConfirm = values => {
  if (isHalf.value) {
    if (isShow.value) {
      startTime.value = values
      isShow.value = false
    } else {
      leaveDates.value = startTime.value + ' - ' + values
      showleaveDatesPicker.value = false
      isShow.value = true
    }
  } else {
    const [start, end] = values
    leaveDates.value = `${formatDate(start)} - ${formatDate(end)}`
    showleaveDatesPicker.value = false
  }
}

// 请假类型
const leaveType = ref('')
const showLeaveTypePicker = ref(false)
const typeColumns = ['病假', '事假', '其他', '公假']
const onLeaveTypeConfirm = value => {
  leaveType.value = value
  showLeaveTypePicker.value = false
}
// 请假事由
const leaveReason = ref('')
// 提交
const ci = getCurrentInstance()
const router = useRouter()
const store = useCounterStore()
const onSubmit = values => {
  ci.appContext.config.globalProperties.Toast.success('提交成功')
  store.isLeaveApply = true
  store.leaveCountIncrement()
  router.back()
  Object.assign(values, {
    submitTime: Date.now()
  })
  console.log(values)
  const leaveStore = useLeaveStore()
  leaveStore.addLeaveRecord(values)
}
</script>

<style scoped>
.leave {
  background-color: #f9bc64;
}

.leave-form {
  padding: 32px 0;
}
</style>
