<template>
  <div>
    <BaseBanner class="leave-records-details" />
    <div class="main">
      <van-cell-group inset>
        <van-cell
          :title="title[i]"
          :value="v.toString()"
          v-for="(v, k, i) in currentInfo"
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import BaseBanner from '../../../components/BaseBanner.vue'
const route = useRoute()
const currentInfo = ref(JSON.parse(route.query.currentInfo))
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
</script>

<style scoped>
.leave-records-details {
  background-color: #bbb2c8;
}
</style>
