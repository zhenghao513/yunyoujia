<template>
  <div>
    <BaseBanner class="activities-cookbook-detail" />
    <div class="main">
      <VanSpace
        fill
        direction="vertical"
        :size="32"
      >
        <div>
          <div class="title">原料</div>
          <van-cell-group inset>
            <van-cell
              v-for="item in raw"
              :title="item"
            />
          </van-cell-group>
        </div>
        <div>
          <!-- <div class="title">效果</div> -->
          <div class="image">
            <van-image
              width="50%"
              height="50%"
              :src="query.imageUrl"
            />
          </div>
        </div>
      </VanSpace>
    </div>
  </div>
</template>

<script setup>
import BaseBanner from '../../../components/BaseBanner.vue'

import { useRoute } from 'vue-router'

const route = useRoute()

const query = route.query
const raw = query.desc.substring(3, query.desc.length - 1).split(/[、]/)

onMounted(() => {
  scroll(0, 0)
})
</script>

<style scoped>
.activities-cookbook-detail {
  background-color: #ed955f;
}

.title {
  margin-bottom: 16px;
}

.image {
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
