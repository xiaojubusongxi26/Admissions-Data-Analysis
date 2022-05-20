<template>
  <div class="contact-us">
    <h1>联系我们</h1>
    <div class="contact-panel">
      <div class="contact">
        <span>描述：</span>
        <el-input
          type="textarea"
          :rows="5"
          resize="none"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
        <span>验证码：</span>
        <el-input v-model="keyIdentifyCode" placeholder="请输入内容"></el-input>
        <div class="record" @click="changeCode()">
          <Identify :identifyCode="identifyCode"></Identify>
        </div>
        <el-button type="primary" @click="Contact()">提交</el-button>
      </div>
      <div class="other-info">
        <span>邮编: 10000</span>
        <span>邮箱: contact@xiekanhua.com</span>
        <span>电话: +86 100000 1000</span>
        <span>传真: +86 100000 1001</span>
        <span>地址: xxxxxxxxxxxxxxxx</span>
      </div>
    </div>
  </div>
</template>

<script>
import Identify from '@/components/common/Identify.vue'
export default {
  components: { Identify },
  props: {},
  data () {
    return {
      textarea: '',
      // 验证码初始值
      identifyCode: '1234',
      // 验证码的随机取值范围
      identifyCodes: '1234567890',

      keyIdentifyCode: ''
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 联系我们——提交
    Contact () {
      if (this.textarea === '') {
        this.$message.warning('请输入内容')
        return 0
      }
      if (this.keyIdentifyCode !== this.identifyCode) {
        this.$message.warning('验证码有误')
        return 0
      }
      // 将用户id，以及描述的问题上传到管理员
      // 成功
      this.$notify({
        title: '提交成功',
        message: '您的问题已发送至管理员，我们会尽快处理',
        type: 'success'
      })
    },
    // 点击验证码刷新验证码
    changeCode () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    // 生成一个随机整数  randomNum(0, 10) 0 到 10 的随机整数， 包含 0 和 10
    randomNum (min, max) {
      max = max + 1
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 随机生成验证码字符串
    makeCode (data, len) {
      for (let i = 0; i < len; i++) {
        this.identifyCode += data[this.randomNum(0, data.length - 1)]
      }
    }
  },
  created () {},
  mounted () {
    // 刷新页面就生成随机验证码
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  }
}
</script>
<style lang="scss" scoped>
.contact-us {
  background: url('~@/assets/images/userIndex/texture.png');
  display: flex;
  flex-direction: column;
  position: relative;
  h1 {
    position: absolute;
    left: 66px;
    top: 50px;
    font-size: 30px;
  }
  .contact-panel {
    display: flex;
    height: 360px;
    margin-top: 116px;
    .contact {
      flex: 1;
      box-sizing: border-box;
      padding: 0 66px;
      position: relative;
      span {
        margin: 8px 0 16px;
        float: left;
      }
      .el-textarea {
        margin-bottom: 16px;
      }
      .el-button {
        margin-top: 36px;
        position: absolute;
        bottom: 72px;
        left: 66px;
      }
      .record {
        float: left;
      }
      .el-input {
        float: left;
        width: 180px;
        margin-right: 16px;
      }
    }
    .other-info {
      flex: 1;
      box-sizing: border-box;
      padding: 16px 0;
      span {
        font-size: 14px;
        text-align: left;
        width: 100%;
        float: left;
        display: block;
        height: 26px;
        line-height: 26px;
      }
    }
  }
}
</style>
