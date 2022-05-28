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
          <el-input v-model="inputUser" placeholder="请输入手机号或邮箱"></el-input>
        </div>
      </div>
      <div class="input-show">
        <div class="input-show-title">
          <span>
            验证码：
          </span>
        </div>
        <div class="input-show-input verify-input">
          <el-input v-model="verification" placeholder="请输入验证码"></el-input>
          <el-button type="primary" @click="sendVerifyCode()" :disabled="isProhibit">发送验证码{{ (countTime === 60 || countTime === 0) ? null : countTime }}</el-button>
        </div>
      </div>
      <div class="input-show">
        <el-button type="primary" @click="forgetPwd()">下一步</el-button>
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
        <el-button type="primary" @click="resetPwd(newPw, newSecondPw, $store.state.userId)">下一步</el-button>
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
      inputUser: '',
      // 是否禁止发送验证码按钮
      isProhibit: false,
      // 验证码倒计时
      countTime: 60,
      // 验证码
      verification: '',
      newPw: '',
      newSecondPw: ''
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 发送验证码
    sendVerifyCode () {
      if (this.inputUser === '') {
        this.$message.warning('请输入手机号/邮箱')
        return 0
      } else if (this.$validate.checkTellEmail(this.inputUser) === 0) {
        this.$message.warning('手机号/邮箱格式有误')
        return 0
      } else {
        // 校验用户输入的手机号/邮箱，并判断是哪种方式
        if (this.$validate.checkTellEmail(this.inputUser) === 2) {
          this.SendEmailCode()
        } else if (this.$validate.checkTellEmail(this.inputUser) === 1) {
          this.SendPhoneCode()
        } else {
          this.$message.warning('手机号/邮箱有误')
          return 0
        }
      }
    },
    // 邮箱验证码
    SendEmailCode () {
      this.$axios({
        method: 'post',
        url: '/login/sendEmail',
        data: {
          email: this.inputUser
        }
      }).then(res => {
        console.log(res.data)
        if (res.data.code === 0) {
          this.$message.success(res.data.msg)
          // 验证码倒计时
          this.isProhibit = true
          this.countTime = 60
          const inval = setInterval(
            () => {
              if (this.countTime === 0) {
                this.isProhibit = false
                clearInterval(inval)
              } else {
                this.isProhibit = true
                this.countTime--
              }
            },
            1000
          )
        } else {
          // 展示错误信息
          this.$message.error(res.data.msg)
          return 0
        }
      })
    },
    // 发送手机验证码
    SendPhoneCode () {
      this.$axios({
        method: 'post',
        url: '/login/sendPhone',
        data: {
          phoneNumber: this.inputUser
        }
      }).then(res => {
        console.log(res.data)
        if (res.data.code === 0) {
          this.$message.success(res.data.msg)
        } else {
          // 展示错误信息
          this.$message.error(res.data.msg)
          return 0
        }
      })
    },
    forgetPwd () {
      if (this.verification === '') {
        this.$message.warning('请输入验证码')
        return
      }
      if (this.$validate.checkTellEmail(this.inputUser) === 2) {
        this.$axios({
          method: 'post',
          url: '/login/validEmail',
          data: {
            email: this.inputUser,
            verifyCode: this.verification
          }
        }).then(res => {
          console.log(res.data)
          if (res.data.code === 0) {
            this.Id = res.data.user.userId
            // 验证码校验正确，展示重置密码页面
            this.active = 1
          } else {
            // 展示错误信息
            this.$message.error(res.data.msg)
          }
        })
      } else if (this.$validate.checkTellEmail(this.inputUser) === 1) {
        this.$axios({
          method: 'post',
          url: '/login/validPhone',
          data: {
            phoneNumber: this.inputUser,
            verifyCode: this.verification
          }
        }).then(res => {
          console.log(res.data)
          if (res.data.code === 0) {
            this.Id = res.data.user.userId
            // 验证码校验正确，展示重置密码页面
            this.active = 1
          } else {
            // 展示错误信息
            this.$message.error(res.data.msg)
          }
        })
      } else {
        this.$message.warning('手机号/邮箱有误')
        return 0
      }
    },
    // 重置密码
    resetPwd (pwd, pwdSecond, id) {
      // 校验规则如上
      if (pwd === '' || pwdSecond === '') {
        this.$message.warning('请输入密码')
        return 0
      } else if (this.$validate.checkPw(pwd, pwdSecond) !== true) {
        console.log(pwd, pwdSecond)
        this.$message.warning('密码格式有误')
        return 0
      } else if (pwd !== pwdSecond) {
        this.$message.warning('两次输入密码不一致')
        return 0
      } else {
        // 重置密码
        this.$axios({
          method: 'post',
          url: '/gxc/usertb/resetPassFirstTime',
          data: {
            newPass: pwd,
            userId: id
          }
        }).then(res => {
          if (res.data.code === 0) {
            // 重置密码后要求重新登录
            this.$message.success('密码重置成功，请重新登录')
            this.active = 3
            this.$store.commit('$_removeStorage')
            this.goLogin()
            return 0
          }
        })
      }
      //
    },
    goLogin () {
      setTimeout(() => {
        this.$router.push('/login')
      }, 2000)
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
          font-size: 12px;
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
