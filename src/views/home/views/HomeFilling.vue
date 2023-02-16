<template>
  <div>
    <BaseBanner
      class="movearea"
      :style="{
        backgroundColor:
          healthCode == '绿码'
            ? '#92c48d'
            : healthCode == '黄码'
            ? '#f7ce00'
            : '#e84026'
      }"
    />
    <div
      class="filling-form"
      v-if="!store.isFill"
    >
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

          <van-field
            name="bodyTemperature"
            label="体温"
          >
            <template #input>
              <van-radio-group
                v-model="bodyTemperature"
                direction="horizontal"
              >
                <van-radio name="1">正常</van-radio>
                <van-radio name="0">超出37.3℃</van-radio>
              </van-radio-group>
            </template>
          </van-field>

          <van-field
            name="cough"
            label="有无咳嗽"
          >
            <template #input>
              <van-radio-group
                v-model="cough"
                direction="horizontal"
              >
                <van-radio name="1">无</van-radio>
                <van-radio name="0">有</van-radio>
              </van-radio-group>
            </template>
          </van-field>

          <van-field
            name="otherDiscomfort"
            label="有无其他不适"
          >
            <template #input>
              <van-radio-group
                v-model="otherDiscomfort"
                direction="horizontal"
              >
                <van-radio name="1">无</van-radio>
                <van-radio name="0">有</van-radio>
              </van-radio-group>
            </template>
          </van-field>

          <van-field
            v-model="healthCode"
            is-link
            readonly
            name="healthCode"
            label="健康码状态"
            placeholder="点击选择健康码"
            @click="showPicker = true"
          />
          <van-popup
            v-model:show="showPicker"
            position="bottom"
          >
            <van-picker
              :columns="columns"
              @confirm="onConfirm"
              @cancel="showPicker = false"
            />
          </van-popup>
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
    </div>
    <div
      class="filling-form"
      v-else
    >
      <van-empty
        image="/smile.svg"
        image-size="80"
        description="已完成"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseBanner from '../../../components/BaseBanner.vue'
import { useCounterStore } from '../../../store/index'
const name = ref('李小花')
const grade = ref('2201')
const teacher = ref('林婷婷')
const bodyTemperature = ref('1')
const cough = ref('1')
const otherDiscomfort = ref('1')

const healthCode = ref('绿码')
const showPicker = ref(false)
const columns = ['绿码', '黄码', '红码']

const onConfirm = value => {
  healthCode.value = value
  showPicker.value = false
}
const ci = getCurrentInstance()
const router = useRouter()
const store = useCounterStore()
const onSubmit = values => {
  store.healthReportCountIncrement()
  store.isFill = true
  ci.appContext.config.globalProperties.Toast.success('填报成功')
  router.back()
  console.log(values)
}
</script>

<style scoped>
.movearea {
  transition: 0.5s background-color ease;
}

.filling-form {
  padding: 32px 0;
}
</style>
