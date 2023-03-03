<template>
  <div :class="{ 'box-load': isLoading, box: !isLoading }">
    <BaseBanner class="activities-safe-education" />

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
      <VanSpace
        fill
        direction="vertical"
        :size="32"
      >
        <template v-for="article in articles">
          <div>
            <div class="title">{{ article.title }}</div>
            <van-cell-group inset>
              <van-cell
                v-for="item in article.paragraph"
                :title="item"
              />
            </van-cell-group>
          </div>
        </template>
      </VanSpace>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseBanner from '../../../components/BaseBanner.vue'
import { useFetch } from '../../../utils/fetch'

const articles = ref([])
const isLoading = ref(true)

onMounted(async () => {
  const { data } = await useFetch(
    'https://mock.presstime.cn/mock/6386cc6ee7aea00081e027fd/yunyoujia/activities-safe-education'
  )
  setTimeout(() => {
    isLoading.value = false
  }, 300)
  articles.value = data.value.articles
})
</script>

<style scoped>
.activities-safe-education {
  background-color: #e87361;
}
</style>
