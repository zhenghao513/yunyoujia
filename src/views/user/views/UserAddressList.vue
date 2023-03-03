<template>
  <div :class="{ 'box-load': isLoading, box: !isLoading }">
    <BaseBanner class="address_list" />
    <!-- loading -->
    <div
      class="container-loading"
      v-if="isLoading"
    >
      <van-loading color="#1989fa" />
    </div>
    <!-- finish -->
    <div
      class="container-list"
      v-else
    >
      <div>
        <van-cell-group>
          <van-cell
            :title="item.name"
            :label="item.tel"
            v-for="item in list"
            :key="item.id"
            :url="`tel:${item.tel}`"
          />
        </van-cell-group>
        <div class="length">
          {{ list.length + ' 个朋友' }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseBanner from '../../../components/BaseBanner.vue'
import { onMounted, ref } from 'vue'
import { useFetch } from '../../../utils/fetch'
const list = ref([])

const chosenContactId = ref('1')

const onAdd = () => showToast('新增')
const onEdit = contact => showToast('编辑' + contact.id)
const onSelect = contact => showToast('选择' + contact.id)
const isLoading = ref(true)
onMounted(async () => {
  const { data } = await useFetch(
    'https://mock.presstime.cn/mock/6386cc6ee7aea00081e027fd/yunyoujia/address_list'
  )
  list.value = data.value.addressList
  setTimeout(() => {
    isLoading.value = false
  }, 300)
  console.log(data.value)
})
</script>

<style scoped>
.address_list {
  background-color: #bbb2c8;
}

.length {
  font-size: var(--van-cell-font-size);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
</style>
