<template>
  <div :class="{ 'box-load': isLoading, box: !isLoading }">
    <BaseBanner class="activities-cookbook" />

    <div
      class="container-loading"
      v-if="isLoading"
    >
      <van-loading color="#1989fa" />
    </div>

    <div
      class="main"
      v-else
    >
      <van-card
        v-for="item in cookbooks"
        :key="item.id"
        :desc="item.desc"
        :title="item.title"
        :thumb="item.imageUrl"
        @click="
          $router.push({
            name: 'cookbookDetail',
            query: {
              title: item.title,
              desc: item.desc,
              imageUrl: item.imageUrl
            }
          })
        "
      />
      <div
        class="activities-cookbook-backtop"
        v-if="cookbooks.length != 0"
      >
        <BaseBackTop />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import BaseBackTop from '../../../components/BaseBackTop.vue'
import BaseBanner from '../../../components/BaseBanner.vue'
import { useFetch } from '../../../utils/fetch'
const cookbooks = ref([])
const isLoading = ref(true)
onMounted(async () => {
  const { data } = await useFetch(
    'https://mock.presstime.cn/mock/6386cc6ee7aea00081e027fd/yunyoujia/cookbook'
  )
  setTimeout(() => {
    isLoading.value = false
  }, 300)
  cookbooks.value = data.value.cookbookList
})
</script>

<style scoped>
.activities-cookbook {
  background-color: #e87361;
}

.activities-cookbook-backtop {
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
