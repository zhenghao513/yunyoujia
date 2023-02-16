<template>
  <div>
    <BaseBanner class="user-contact" />
    <div class="contact-cell">
      <BaseCell
        inset
        :cell="contactInfo"
      />
    </div>
    <div class="user-main">
      <VanSpace
        fill
        direction="vertical"
        :size="32"
      >
        <div>
          <div class="title">办学宗旨和教学理念</div>
          <van-cell-group inset>
            <van-cell :title="introduce.first" />
            <van-cell :title="introduce.second" />
          </van-cell-group>
        </div>

        <div>
          <div class="title">学校荣誉</div>
          <div class="image">
            <img
              src="/certificate.svg"
              alt=""
              srcset=""
            />
          </div>
        </div>

        <div>
          <div class="title">教学优势</div>
          <div class="container">
            <div class="circle heart">爱心</div>
            <div class="circle patient">耐心</div>
            <div class="circle duty">责任心</div>
          </div>
        </div>
      </VanSpace>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseBanner from '../../../components/BaseBanner.vue'
import BaseCell from '../../../components/BaseCell.vue'

const contactInfo = ref([
  { title: '公众号', value: 'xxx 幼儿园' },
  {
    title: '电话号码',
    value: '18767738520',
    url: 'tel:18767738520'
  },
  {
    title: '联系邮箱',
    value: '252983205@qq.com',
    url: 'mailto:252983205@qq.com'
  },
  { title: '联系地址', value: '瓯海区xx路' }
])

const introduce = {
  first:
    'xxx 幼儿园以“让普通家庭享受高品质的幼儿教育”为办园宗旨；以“身体健康、心灵愉悦、精神富有、灵魂高贵”为办园目标；以“用妈妈的心爱孩子，用专家的标准做好教育”为办园理念；',
  second:
    '幼儿园由云幼家培训、指导的蒙特梭利教育外，还开设快乐情商、丹辉口才、早期识字阅读、“小小达芬奇”创意美术、童年高歌奥尔夫原创新音乐、国防教育军警课程等课程，以游戏化、情景化、操作化、体验化为主要教学模式，培养孩子专注力、记忆力、观察力、想象力、创造力、表现力等24大能力！'
}
</script>

<style scoped>
.user-contact {
  background-color: #bbb2c8;
}

.contact-cell {
  padding: 32px 0;
}

.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.circle {
  height: 100px;
  width: 100px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 20px;
}

.heart {
  background-color: #e67c92;
}

.patient {
  background-color: #e87361;
}

.duty {
  background-color: #86c5e3;
}

.title {
  margin-bottom: 16px;
}

.image {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
