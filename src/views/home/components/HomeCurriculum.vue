<template>
  <div>
    <div class="title">今日课程</div>
    <van-cell-group inset>
      <van-cell
        v-for="item in curriculum"
        :title="item.title"
        :value="item.value"
      />
    </van-cell-group>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useFetch } from '../../../utils/fetch'

const curriculum = ref([])

onMounted(async () => {
  const { data } = await useFetch(
    'https://mock.presstime.cn/mock/6386cc6ee7aea00081e027fd/yunyoujia/curriculum',
  )

  curriculum.value = data.value.curriculum
})
</script>

<style lang="css" scoped></style>
