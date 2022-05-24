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
      if (this.$validate.checkTellEmail(this.inputTellOrEmail) === 1) {
        // 向手机发送短信验证码
      } else if (this.$validate.checkTellEmail(this.inputTellOrEmail) === 2) {
        // 向邮箱发送验证码
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
        // 校验密码
        const msg = this.$validate.checkPw(this.newPw, this.newSecondPw)
        if (msg === true) {
          // 密码校验通过
          this.active++
          this.goLogin()
        } else {
          // 密码校验不通过
          this.$message.warning(msg)
          return 0
        }
      }
    },
    goLogin () {
      setTimeout(() => {
        this.$router.push('/login')
      }, 2000)
    },
    // 验证码校验
    resetVerifyCode () {}
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
