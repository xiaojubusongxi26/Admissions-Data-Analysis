<template>
  <div class="change-pw">
    <el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
      <el-step title="验证身份" ></el-step>
      <el-step title="设置密码" ></el-step>
      <el-step title="修改成功" ></el-step>
    </el-steps>
    <!-- 验证身份 -->
    <div class="verify-identidy" v-if="active === 0">
      <div class="input-show">
        <div class="input-show-title">
          <span>
            手机号/邮箱：
          </span>
        </div>
        <div class="input-show-input">
          <el-input v-model="inputTellOrEmail" placeholder="请输入手机号或邮箱"></el-input>
        </div>
      </div>
      <div class="input-show">
        <div class="input-show-title">
          <span>
            验证码：
          </span>
        </div>
        <div class="input-show-input verify-input">
          <el-input v-model="verifyCode" placeholder="请输入验证码"></el-input>
          <el-button type="primary" @click="sendVerifyCode()">发送验证码</el-button>
        </div>
      </div>
      <div class="input-show">
        <el-button type="primary" @click="Deal()">下一步</el-button>
      </div>
    </div>
    <!-- 设置密码 -->
    <div class="set-pw" v-else-if="active === 1">
      <div class="input-show">
        <div class="input-show-title">
          <span>
            新密码：
          </span>
        </div>
        <div class="input-show-input">
          <el-input v-model="newPw" placeholder="请输入新密码" show-password></el-input>
        </div>
      </div>
      <div class="input-show">
        <div class="input-show-title">
          <span>
            确认新密码：
          </span>
        </div>
        <div class="input-show-input">
          <el-input v-model="newSecondPw" placeholder="请确认新密码" show-password></el-input>
        </div>
      </div>
      <span class="password-rules">注：密码必须包含数字，大小写字母，以及特殊符号。且长度在8-12个字符之间</span>
      <div class="input-show">
        <el-button type="primary" @click="Deal()">下一步</el-button>
      </div>
    </div>
    <!-- 修改成功 -->
    <div class="change-success" v-else>
      密码修改成功，即将跳转至登录界面....
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      active: 0,
      // 手机号或邮箱
      inputTellOrEmail: '',
      // 验证码
      verifyCode: '',
      newPw: '',
      newSecondPw: ''
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 发送验证码
    sendVerifyCode () {
      // 校验手机号邮箱是否正确，0 错误，1 是手机号， 2 是邮箱
      if (this.resetTellEmail() === 1) {
        // 向手机发送短信验证码
      } else if (this.resetTellEmail() === 2) {
        // 向手机号发送邮箱验证码
      } else {
        // 手机号/邮箱没有找到，返回错误信息
        this.$message.error('手机号/邮箱输入错误')
      }
    },
    // 处理函数
    Deal () {
      /* active:
      0  验证身份,判断输入的是邮箱还是手机号，发送验证码，校验验证码
      1  设置密码,校验密码格式,修改密码成功，跳转至登录界面，清空token
      */
      if (this.active === 0) {
        this.active++
      } else if (this.active === 1) {
        if (this.resetPw()) {
          this.active++
          this.goLogin()
        }
      } else if (this.active === 2) {}
    },
    goLogin () {
      setTimeout(() => {
        this.$router.push('/login')
      }, 2000)
    },
    // 手机号邮箱校验
    resetTellEmail () {
      const tellTest = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
      const emailTest = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      if (tellTest.test(this.inputTellOrEmail)) {
        // 手机号验证通过
        return 1
      } else if (emailTest.test(this.inputTellOrEmail)) {
        // 邮箱验证通过
        return 2
      } else {
        // 验证失败
        return 0
      }
    },
    // 验证码校验
    resetVerifyCode () {},
    // 密码校验
    resetPw () {
      // 校验规则：密码必须包含数字，大小写字母，以及特殊符号。且长度在8-12个字符之间
      const d = /^.*(?=.{8,12})(?=.*\d)(?=.*[A-Za-z]{1,})(?=.*[!@#$%^&*?]).*$/
      if (this.newPw === '' || this.newSecondPw === '') {
        this.$message.error('请输入密码')
        return false
      } else if (this.newPw !== this.newSecondPw) {
        this.$message.error('两次输入密码不一致')
        return false
      } else if (!d.test(this.newPw) && !d.test(this.newSecondPw)) {
        this.$message.error('密码格式不正确')
        return false
      }
      return true
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.change-pw {
  padding: 36px 66px;
  .el-steps {
    // width: 100%;
    cursor: default;
  }
  >div:not(:nth-child(1)) {
    padding: 36px 26px;
    .input-show {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80px;
      .input-show-title {
        flex: 2;
        span {
          float: right;
        }
      }
      .input-show-input {
        flex: 5;
        padding-left: 36px;
        .el-input {
          width: 300px;
          float: left;
        }
      }
      .verify-input {
        .el-input {
          width: 200px;
          float: left;
          margin-right: 14px;
        }
        .el-button {
          float: left;
          width: 86px;
          padding: 12px 2px;
        }
      }
    }
    .password-rules {
      font-size: 14px;
      color: #afafaf;
    }
  }
}
</style>
