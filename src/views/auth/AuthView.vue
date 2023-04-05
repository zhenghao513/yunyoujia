<template>
  <div class="container">
    <div>
      <div class="logo">
        <img src="/logo.jpg" />
        <span>云幼家</span>
      </div>

      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px">
          <van-button
            round
            block
            type="primary"
            native-type="submit"
          >
            登录
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const username = ref('')
const password = ref('')
const onSubmit = values => {
  console.log(values);
  if (values.username === 'admin' && values.password === 'admin') {
    router.replace('/index')
  }
}
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container > div {
  width: 100%;
}
.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
}
.logo > img {
  border-radius: 88px;
  height: 88px;
  width: 88px;
}

.logo > span {
  margin-top: 12px;
}
</style>
