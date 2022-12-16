<template>
  <div>
    <BaseBanner class="activities-cookbook-detail" />
    <div class="main">
      <VanSpace fill direction="vertical" :size="32">
        <div>
          <div class="title">原料</div>
          <van-cell-group inset>
            <van-cell v-for="item in raw" :title="item" />
          </van-cell-group>
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
</script>

<style scoped>
.activities-cookbook-detail {
  background-color: #ed955f;
}

.title {
  margin-bottom: 16px;
}
</style>
