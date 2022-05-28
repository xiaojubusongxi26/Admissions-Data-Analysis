<template>
  <div class="reset-user">
    <adminSidebar :userInfo="userInfo"></adminSidebar>
    <div class="reset">
      <h3>重置密码</h3>
      <el-steps
        :active="active"
        finish-status="success"
        simple
        style="margin-top: 20px"
      >
        <el-step title="修改密码"></el-step>
        <el-step title="修改成功"></el-step>
      </el-steps>
      <div class="reset-user-pw" v-if="active === 0">
        <div class="reset-user-info">
          <span>为用户</span>
          <span class="reset-user-name" @click="goUserInfo(userInfo.userId)">{{
            userInfo.username
          }}</span>
          <span>重置密码</span>
        </div>
        <div class="reset-user-newpw">
          <div class="reset-user-newpw-title">
            <span>新密码:</span>
          </div>
          <el-input
            v-model="newPw"
            placeholder="请输入内容"
            show-password
            validate-event
          ></el-input>
        </div>
        <div class="reset-user-newpw">
          <div class="reset-user-newpw-title">
            <span>确认新密码:</span>
          </div>
          <el-input
            v-model="newSecondPw"
            placeholder="请输入内容"
            show-password
          ></el-input>
        </div>
        <span class="password-rules"
          >注：密码必须包含数字，大小写字母，以及特殊符号。且长度在8-12个字符之间</span
        >
        <el-button type="primary" @click="resetPw()">下一步</el-button>
      </div>
      <div class="reset-user-success" v-if="active === 2">
        <div>
          <span>修改密码成功，以向用户</span>
          <span
            class="reset-user-success-light"
            @click="goUserInfo(userInfo.userId)"
            >{{ userInfo.username + '(' + userInfo.email + ')' }}</span
          >
          <span>邮箱中发送新密码</span>
        </div>
        <el-button type="primary" @click="goUserInfo()">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import adminSidebar from '@/components/admin/userManagement/adminSidebar.vue'
export default {
  components: { adminSidebar },
  props: {},
  data() {
    return {
      active: 0,
      userInfo: '',
      // 新密码
      newPw: '',
      newSecondPw: '',
    }
  },
  watch: {},
  computed: {},
  methods: {
    goUserInfo() {
      this.$router.push('/userInfo/' + this.userInfo.userId)
    },
    resetPw() {
      // 校验规则：密码必须包含数字，大小写字母，以及特殊符号。且长度在8-12个字符之间
      const d = /^.*(?=.{8,12})(?=.*\d)(?=.*[A-Za-z]{1,})(?=.*[!@#$%^&*?]).*$/
      if (this.newPw === '' || this.newSecondPw === '') {
        this.$message.error('请输入密码')
        return
      } else if (this.newPw !== this.newSecondPw) {
        this.$message.error('两次输入密码不一致')
        return
      } else if (!d.test(this.newPw) && !d.test(this.newSecondPw)) {
        this.$message.error('密码格式不正确')
        return
      }
      // 进入步骤2
      this.resetPassword()
        .then(() => {
          this.active = 2
        })
        .catch(() => {
          this.$message.error('重置密码失败!')
        })

      // console.log(this.newPw)
    },
    // 初始化用户信息
    initUserInfo() {
      this.userId = this.$route.params.id
      this.getUserInfo().then(({ data }) => {
        this.userInfo = data.user
        if (this.userInfo.avatar === null) {
          if (this.userInfo.sex === 0) {
            this.userInfo.avatar = this.defaultManImg
          } else if (this.userInfo.sex === 1) {
            this.userInfo.avatar = this.defaultWomanImg
          } else {
            this.userInfo.avatar = this.defaultSecrecyImg
          }
        }
      })
    },
    // 获取用户信息
    async getUserInfo() {
      const data = await this.$axios({
        url: 'gxc/usertb/info/' + this.userId,
        method: 'post',
      })

      return data
    },
    async resetPassword() {
      const data = this.$axios({
        url: 'gxc/usertb/resetPassById',
        method: 'post',
        data: {
          newPass: this.newPw,
          userId: this.userInfo.userId,
        },
      })

      return data
    },
  },
  created() {
    this.initUserInfo()
  },
  mounted() {},
}
</script>
<style lang="scss" scoped>
.reset-user {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
}
h3 {
  margin: 16px 0 36px;
  font-size: 36px;
  color: #1595d4;
}
.el-steps {
  width: 500px;
  box-sizing: border-box;
}
.reset-user-pw {
  width: 500px;
  box-sizing: border-box;
  padding: 30px 20px;
  .reset-user-info {
    height: 40px;
    line-height: 40px;
    .reset-user-name {
      color: #66c3f2;
      font-size: 20px;
      margin: 0 18px;
      font-weight: bold;
      cursor: pointer;
    }
  }
  .reset-user-newpw {
    margin: 16px 0;
    display: flex;
    align-items: center;
    .reset-user-newpw-title {
      flex: 2;
      box-sizing: border-box;
      padding-right: 26px;
      span {
        float: right;
      }
    }
    .el-input {
      flex: 7;
    }
  }
  .password-rules {
    font-size: 12px;
    color: #c7c7c7;
    float: right;
  }
  .el-button {
    margin: 20px 0;
  }
}
.reset-user-success {
  width: 500px;
  margin: 100px 0;
  cursor: default;
  .reset-user-success-light {
    color: #66c3f2;
    margin: 0 8px;
    cursor: pointer;
  }
  .el-button {
    margin: 46px auto 26px;
  }
}
</style>
