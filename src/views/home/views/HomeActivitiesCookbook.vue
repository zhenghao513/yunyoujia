<template>
  <div>
    <BaseBanner class="activities-cookbook" />
    <div class="main">
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
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import BaseBanner from '../../../components/BaseBanner.vue'
import { useFetch } from '../../../utils/fetch'
const cookbooks = ref([])

onMounted(async () => {
  const { data } = await useFetch(
    'https://mock.presstime.cn/mock/6386cc6ee7aea00081e027fd/yunyoujia/cookbook'
  )
  cookbooks.value = data.value.cookbookList
})
</script>

<style scoped>
.activities-cookbook {
  background-color: #e87361;
}
</style>
