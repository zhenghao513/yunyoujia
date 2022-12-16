<template>
  <div>
    <BaseBanner class="mailbox" />
    <div class="mailbox-input">
      <van-cell-group inset>
        <van-field
          v-model="message"
          rows="2"
          autosize
          label="留言"
          type="textarea"
          maxlength="200"
          placeholder="请输入留言"
          show-word-limit
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" @click="onSubmit">
          提交
        </van-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import BaseBanner from '../../../components/BaseBanner.vue'

const message = ref('')

const ci = getCurrentInstance()

const onSubmit = function () {
  console.log(message.value)
  ci.appContext.config.globalProperties.Toast.success('提交成功')
  message.value = ''
}
</script>

<style scoped>
.mailbox {
  background-color: #f9bc64;
}

.mailbox-input {
  padding: 32px 0;
}
</style>
