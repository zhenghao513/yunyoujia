<template>
  <div>
    <BaseBanner class="activities-health-care" />
    <div class="main">
      <VanSpace fill direction="vertical" :size="32">
        <template v-for="article in articles">
          <div>
            <div class="title">{{ article.title }}</div>
            <van-cell-group inset>
              <van-cell v-for="item in article.paragraph" :title="item" />
            </van-cell-group>
          </div>
        </template>
      </VanSpace>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BaseBanner from '../../../components/BaseBanner.vue'
import { useFetch } from '../../../utils/fetch'
const articles = ref([])

onMounted(async () => {
  const { data } = await useFetch(
    'https://mock.presstime.cn/mock/6386cc6ee7aea00081e027fd/yunyoujia/activities-health-care'
  )
  console.log(data);
  articles.value = data.value.articles
})
</script>

<style scoped>
.activities-health-care {
  background-color: #e87361;
}
</style>
