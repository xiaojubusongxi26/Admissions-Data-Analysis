<template>
  <div class="login">
    <div class="title">
      <h1></h1>
    </div>
    <div class="login_main">
      <div class="login_info">
        <div class="info_header">
          <span :class="{ log: isLog === 0 }" @click="isLog = 0">密码登录</span>
          <span class="get-back" :class="{ log: isLog === 1 }" @click="isLog = 1">验证码登录</span>
          <span class="get-back" :class="{ log: isLog === 2 }" @click="isLog = 2">忘记密码</span>
        </div>
        <!-- 密码登录 -->
        <div class="info" v-if="isLog === 0">
          <div class="input" :class="{ focus: isUserFocus || inputUser != '' }" placeholder="手机号/邮箱">
            <input type="text" @focus="isUserFocus = true" @blur="isUserFocus = false"
            v-model="inputUser">
          </div>
          <div class="input" :class="{ focus: isPassFocus || inputPwd != '' }" placeholder="密码">
            <input class="password_input" type="password" @focus="isPassFocus = true" @blur="isPassFocus = false"
            v-model="inputPwd" @keydown.enter="login()">
            <el-checkbox v-model="isRememberPwd" text-color="#1595d4" fill="#1595d4">记住密码</el-checkbox>
          </div>
          <button @click="login()" >登录</button>
        </div>
        <!-- 验证码登录 -->
        <div class="info"  v-if="isLog === 1">
          <div class="input" :class="{ focus: isEmailFocus || inputUser != '' }" placeholder="手机号/邮箱">
            <input type="text" @focus="isEmailFocus = true" @blur="isEmailFocus = false"
            v-model="inputUser">
          </div>
          <div class="input" :class="{ focus: isVerificationFocus || verification != '' }" placeholder="验证码">
            <input type="text" class="verification" @focus="isVerificationFocus = true" @blur="isVerificationFocus = false"
            v-model="verification">
            <button class="send" @click="sendVerification()" :disabled='isProhibit'>发送验证码{{ (countTime === 60 || countTime === 0) ? null : countTime }}</button>
          </div>
          <button @click="login()">登录</button>
        </div>
        <!-- 忘记密码 -->
        <div class="info"  v-if="isLog === 2">
          <div class="input" :class="{ focus: isEmailFocus || inputUser != '' }" placeholder="手机号/邮箱">
            <input type="text" @focus="isEmailFocus = true" @blur="isEmailFocus = false"
            v-model="inputUser">
          </div>
          <div class="input" :class="{ focus: isVerificationFocus || verification != '' }" placeholder="验证码">
            <input type="text" class="verification" @focus="isVerificationFocus = true" @blur="isVerificationFocus = false"
            v-model="verification">
            <button class="send" @click="sendVerification()" :disabled="isProhibit">发送验证码{{ (countTime === 60 || countTime === 0) ? null : countTime }}</button>
          </div>
          <button @click="forgetPwd()">重置密码</button>
        </div>
        <!-- 重置密码 -->
        <div class="info" v-if="isLog === 3">
          <div class="input" :class="{ focus: isNewPwdFocus || newPwd != '' }" placeholder="新密码">
            <input type="password" @focus="isNewPwdFocus = true" @blur="isNewPwdFocus = false"
            v-model="newPwd">
          </div>
          <div class="input" :class="{ focus: isNewPwdSecondFocus || newPwdSecond != '' }" placeholder="确认新密码">
            <input type="password" @focus="isNewPwdSecondFocus = true" @blur="isNewPwdSecondFocus = false"
            v-model="newPwdSecond">
          </div>
          <button @click="resetPwd(newPwd, newPwdSecond, Id)" >修改密码</button>
        </div>
      </div>
    </div>
    <div class="login_foot"></div>
    <el-dialog title="第一次登录请修改初始密码" :visible.sync="dialogVisible" width="30%">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="新密码：">
          <el-input v-model="form.setPw"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码：">
          <el-input v-model="form.setPwTwo"></el-input>
        </el-form-item>
        <span>注：密码必须包含数字，大小写字母，以及特殊符号。且长度在8-12个字符之间</span>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="resetPwd(form.setPw, form.setPwTwo, Id)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      // 当前选项：0：密码登录，1：验证码，2：忘记密码，3：重置密码
      isLog: 0,
      // 输入框是否获得焦点
      isUserFocus: false,
      isPassFocus: false,
      isEmailFocus: false,
      isVerificationFocus: false,
      // 是否禁止发送验证码按钮
      isProhibit: false,
      // 验证码倒计时
      countTime: 60,

      // id
      Id: '',

      // 用户输入的邮箱/手机号和密码
      inputUser: '',
      inputPwd: '',
      username: '',
      password: '',
      email: '',
      // 验证码
      verification: '',
      // 是否记住密码
      isRememberPwd: false,

      // 判断验证码是否正确，进行重置密码
      isVerificationTrue: false,
      // 找回密码
      newPwd: '',
      newPwdSecond: '',
      isNewPwdFocus: false,
      isNewPwdSecondFocus: false,

      // 判断用户密码是否为纯数字，是则比如按要求修改初始密码
      dialogVisible: false,
      form: {
        setPw: '',
        setPwTwo: ''
      }
    }
  },
  methods: {
    login () {
      // 先判断是否是管理员登录，其次普通用户
      // this.$router.push('/userIndex')
      /*
        普通用户密码正确后，判断是否为纯数字的初始密码
        是则将dialogVisible设置为true
        让用户重置密码成功后再跳转主页
        */
      if (this.isLog === 0) {
        // 密码登录
        this.PwdLogin()
      } else if (this.isLog === 1) {
        // 验证码登录
        this.CodeLogin()
      }
    },
    // 密码登录
    PwdLogin () {
      console.log(this.$validate.checkTellEmail(this.inputUser))
      if (this.inputUser === '') {
        this.$message.warning('请输入手机号/邮箱')
        return 0
      } else if (this.inputPwd === '') {
        this.$message.warning('请输入密码')
        return 0
      } else if (this.$validate.checkTellEmail(this.inputUser) === 0) {
        this.$message.warning('手机号/邮箱格式有误')
        return 0
      } else {
        // 校验用户输入的手机号/邮箱，并判断是哪种方式
        const manner = this.$validate.checkTellEmail(this.inputUser) === 2 ? 'validPasswordWithEmail' : 'validPasswordWithPhone'
        this.EmailOrTellLogin(manner)
      }
    },
    // 验证码登录
    CodeLogin () {
      if (this.verification === '') {
        this.$message.warning('请输入验证码')
        return
      }
      if (this.$validate.checkTellEmail(this.inputUser) === 2) {
        this.EmailCodeLogin()
      } else if (this.$validate.checkTellEmail(this.inputUser) === 1) {
        this.PhoneCodeLogin()
      } else {
        this.$message.warning('手机号/邮箱有误')
        return 0
      }
    },
    // 邮箱，密码
    EmailOrTellLogin (manner) {
      this.$axios({
        method: 'post',
        url: '/login/' + manner,
        data: {
          account: this.inputUser,
          password: this.inputPwd
        }
      }).then(res => {
        console.log(res.data)
        if (res.data.code === 0) {
          // 账号密码正确
          this.Id = res.data.user.userId
          // 保存用户信息
          this.saveUserInfo(res.data)
          if (res.data.user.roleId === 2) {
            // 管理员登录
            this.$message.success('登录成功')
            this.$router.push({
              path: '/adminIndex',
              params: {
                from: 'login'
              }
            })
          } else if (res.data.user.roleId === 1) {
            // 用户登录
            // 检验是否为初始密码
            if (this.VerifyInitialPwd(this.inputPwd)) {
              // 是初始密码
              this.dialogVisible = true // 展示重置密码弹窗
            } else {
              // 不是初始密码，直接登录
              this.$message.success('登录成功')
              this.$router.push({
                path: '/userIndex',
                params: {
                  from: 'login'
                }
              })
            }
          }
        } else {
          // 展示错误信息
          this.$message.error(res.data.msg)
        }
      })
    },
    // 校验初始密码
    VerifyInitialPwd (pwd) {
      const d = /^[0-9]*$/
      return d.test(pwd)
    },
    // 忘记密码
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
            this.isLog = 3
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
            this.isLog = 3
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
      } else if (!this.$validate.checkPw(pwd) || !this.$validate.checkPw(pwdSecond)) {
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
            this.isLog = 0
            this.inputUser = ''
            this.inputPwd = ''
            return 0
          }
        })
      }
      //
    },
    // 发送验证码
    sendVerification () {
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
    // 邮箱验证码登录
    EmailCodeLogin () {
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
          // 保存用户信息
          this.saveUserInfo(res.data)
          if (res.data.user.roleId === 2) {
            // 管理员登录
            this.$router.push({
              path: '/adminIndex',
              params: {
                from: 'login'
              }
            })
          } else if (res.data.user.roleId === 1) {
            // 用户登录
            this.$router.push({
              path: '/userIndex',
              params: {
                from: 'login'
              }
            })
          }
          this.$message.success('登录成功')
        } else {
          // 展示错误信息
          this.$message.error(res.data.msg)
        }
      })
    },
    // 手机号验证码登录
    PhoneCodeLogin () {
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
          // 保存用户信息
          this.saveUserInfo(res.data)
          if (res.data.user.roleId === 2) {
            // 管理员登录
            this.$router.push({
              path: '/adminIndex',
              params: {
                from: 'login'
              }
            })
          } else if (res.data.user.roleId === 1) {
            // 用户登录
            this.$router.push({
              path: '/userIndex',
              params: {
                from: 'login'
              }
            })
          }
          this.$message.success('登录成功')
        } else {
          // 展示错误信息
          this.$message.error(res.data.msg)
        }
      })
    },
    // 保存用户信息
    saveUserInfo (data) {
      // 保存token
      this.$store.commit('$_setToken', data.satoken)
      // 保存用户角色类型
      this.$store.dispatch('update_userRoleID', data.user.roleId)
    }
  }
}
</script>

<style lang="scss" socped>

.login {
  .title {
    width: 1024px;
    margin: 0 auto;
    height: 150px;
    position: relative;
    background: #ffffff;
    // 网站标题
    h1 {
      position: absolute;
      left: 0;
      margin: 0;
      width: 100%;
      height: 150px;
      line-height: 150px;
      font-size: 80px;
      font-family:'JetLinkNewBoldB2cabfeda4f24067';
      font-weight: bolder;
      background: url('~@/assets/高校查logo.png') no-repeat;
      background-size: contain;
      color: transparent;
    }
  }
  .login_main{
    width: 100%;
    height: 70vh;
    min-height: 600px;
    background: url('~@/assets/images/login/DSC02497.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .login_info {
      width: 500px;
      height: 500px;
      border-radius: 5px;
      background: rgba($color: #fff, $alpha: 0.95);
      text-align: center;
      .info_header {
        height: 100px;
        line-height: 100px;
        color: #5a5a5a;
        text-align: center;
        font-size: 30px;
        font-weight: bolder;
        border-bottom: 1px solid #e9e9e9;
        position: relative;
        span{
          cursor: pointer;
          user-select: none;
          padding: 0 8px;
          font-size: 20px;
        }
        .log {
          color: #1595d4;
        }
        .get-back {
          // font-size: 18px;
          border-left: 2px solid #5a5a5a;
        }
        .slice {
          margin: 0 15px;
          position: absolute;
          left: 231px;
          top: -3px;
        }
      }
      // 登录卡片
      .info {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        padding: 50px 0;
        .input {
          height: 30px;
          width: 80%;
          position: relative;
          user-select: none;
          margin: 2rem 0;
          opacity: 1;
          transition: .6s;
          // 输入框的默认文字
          &::after{
            content: attr(placeholder);
            position: absolute;
            left: 0;
            top: -10%;
            font-size: 1.2rem;
            color: #1595d4;
            transition: .3s;
          }
          input {
            width: 100%;
            margin: 3px 0;
            padding-bottom: 6px;
            border: none;
            // 消除input框聚焦后的边框
            outline: none;
            color: #5a5a5a;
            background: rgba($color: #000000, $alpha: 0);
            border-bottom: 2px solid #1595d4;
          }
          .verification, .password_input {
            width: 65%;
            position: absolute;
            left: 0;
          }
          .password_input {
            width: 75%;
          }
          .el-checkbox {
            position: absolute;
            line-height: 30px;
            right: 0;
            height: 30px;
            .is-checked {
              .el-checkbox__inner {
                border-color: #1595d4;
                background: #1595d4;
              }
            }
            .el-checkbox__label {
              color: #1595d4;
            }
          }
          .send {
            position: absolute;
            right: 0;
            margin: 0;
            height: 30px;
            width: 100px;
            border-radius: 5px;
            box-shadow: none;
            // cursor: pointer;
            background-image: linear-gradient(60deg, #86ccf0 0%, #6ecaf8 100%);
          }
        }
        // 聚焦后，文字上移
        .focus::after {
          top: -70%;
          font-size: 1rem;
        }
        button {
          margin-top: 20px;
          width: 150px;
          height: 50px;
          border-radius: 50px;
          background-image: linear-gradient(60deg, #4ab7ee 0%, #1595d4 100%);
          box-shadow: 0px 0px 8px #1595d4;
          color: #fff;
          border: none;
          user-select: none;
        }
      }
    }
  }
  .login_foot {
    height: 200px;
    width: 100%;
    user-select: none;
  }
  .el-dialog {
    margin-top: 26vh !important;
    max-width: 450px;
    form {
      span {
        color: #9e9e9e;
      }
    }
  }
}
</style>
