<template>
  <div>
    <BaseBanner class="address_list" />

    <van-cell-group>
      <van-cell
        :title="item.name"
        :label="item.tel"
        v-for="item in list"
        :key="item.id"
      />
    </van-cell-group>
    <van-space align="center" direction="vertical" fill :size="20">
      <span class="length">
        {{ list.length + ' 个朋友' }}
      </span>
    </van-space>
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

onMounted(async () => {
  const { data } = await useFetch(
    'https://mock.presstime.cn/mock/6386cc6ee7aea00081e027fd/yunyoujia/address_list'
  )
  list.value = data.value.addressList

  console.log(data.value)
})
</script>

<style scoped>
.address_list {
  background-color: #bbb2c8;
}

.length {
  font-size: var(--van-cell-font-size);
}
</style>
