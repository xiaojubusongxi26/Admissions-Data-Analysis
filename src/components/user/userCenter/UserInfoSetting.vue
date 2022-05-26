<template>
  <div>
    <div class="userinfo-panel-show">
      <div class="userinfo-panel-show-title">
        <span>用户名：</span>
        </div>
      <div class="userinfo-panel-show-info">
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="changeUserInfo.username"
        ></el-input>
      </div>
    </div>
    <div class="userinfo-panel-show">
      <div class="userinfo-panel-show-title">
        <span>姓名：</span>
      </div>
      <div class="userinfo-panel-show-info">
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="changeUserInfo.name"
        ></el-input>
      </div>
    </div>
    <div class="userinfo-panel-show">
      <div class="userinfo-panel-show-title">
        <span>邮箱：</span>
      </div>
      <div class="userinfo-panel-show-info">
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="changeUserInfo.email"
        ></el-input>
      </div>
    </div>
    <div class="userinfo-panel-show">
      <div class="userinfo-panel-show-title">
        <span>手机号：</span>
      </div>
      <div class="userinfo-panel-show-info">
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="changeUserInfo.phone"
        ></el-input>
      </div>
    </div>
    <div class="userinfo-panel-show">
      <div class="userinfo-panel-show-title">
        <span>性别：</span>
      </div>
      <div class="userinfo-panel-show-info">
        <el-radio v-model="changeUserInfo.sex" :label="0">男</el-radio>
        <el-radio v-model="changeUserInfo.sex" :label="1">女</el-radio>
      </div>
    </div>
    <div class="userinfo-panel-show">
      <div class="userinfo-panel-show-title">
        <span>省份：</span>
      </div>
      <div class="userinfo-panel-show-info">
        <el-input
          type="text"
          placeholder="未设置"
          v-model="changeUserInfo.userAddress"
        ></el-input>
      </div>
    </div>
    <div class="userinfo-panel-show">
      <div class="userinfo-panel-show-title">
        <span>分数：</span>
      </div>
      <div class="userinfo-panel-show-info">
        <el-input
          type="text"
          placeholder="未设置"
          v-model="changeUserInfo.userScore"
        ></el-input>
      </div>
    </div>
    <div class="btn">
      <el-button type="primary" @click="saveAdminInfo()">保存信息</el-button>
      <el-button type="primary" @click="signOut()">退出登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      // 默认头像
      defaultAvatar: require('@/assets/images/default/avatar/头像男三.png'),
      userInfo: this.$store.state.userInfo,
      // 绑定的用户对象
      changeUserInfo: {}
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 保存管理员用户信息
    saveAdminInfo () {},
    // 管理员退出登录
    signOut () {
      this.$router.push('/login')
    },
    // 获取用户个人信息，保存到store
    getUerInfo () {
      const hasToken = localStorage.getItem('token')
      this.$axios({
        method: 'post',
        url: '/gxc/usertb/getUserByToken',
        data: {
          token: hasToken
        }
      }).then(res => {
        console.log(res.data)
        this.$store.dispatch('update_userInfo', res.data.user)
      })
    }
  },
  created () {
    this.userInfo = this.$store.state.userInfo
    this.changeUserInfo = JSON.parse(JSON.stringify(this.userInfo))
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
.userinfo-panel-show {
  display: flex;
  height: 60px;
  line-height: 60px;
  cursor: default;
  .userinfo-panel-show-title {
    flex: 3;
    span {
      float: right;
    }
  }
  .userinfo-panel-show-info {
    flex: 7;
    padding-left: 26px;
    span {
      float: left;
      color: #666666;
    }
    .el-input {
      width: 260px;
      float: left;
    }
    .el-radio {
      float: left;
      height: 60px;
      display: flex;
      align-items: center;
    }
  }
}
.btn {
  margin-top: 24px;
}
</style>
