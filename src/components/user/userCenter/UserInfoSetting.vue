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
          v-model="changeUserInfo.userName"
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
          v-model="changeUserInfo.userFullName"
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
          v-model="changeUserInfo.userEmail"
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
          v-model="changeUserInfo.userTell"
        ></el-input>
      </div>
    </div>
    <div class="userinfo-panel-show">
      <div class="userinfo-panel-show-title">
        <span>性别：</span>
      </div>
      <div class="userinfo-panel-show-info">
        <el-radio v-model="changeUserInfo.userSex" label="0">男</el-radio>
        <el-radio v-model="changeUserInfo.userSex" label="1">女</el-radio>
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
      userInfo: {
        userId: '1001',
        userAvatar: require('@/assets/images/default/avatar/默认头像-男.png'),
        userName: '风花雪月',
        userFullName: '李寒衣',
        // 1是男，2女
        userSex: '1',
        userEmail: '126@lihanyi.com',
        userRole: '普通用户',
        // 1为启用，0为注销
        userState: 0,
        userAddress: '四川',
        userScore: '',
        userTell: 12626262626
      },
      // 绑定的用户对象
      changeUserInfo: {
        userId: '1001',
        userAvatar: require('@/assets/images/default/avatar/默认头像-男.png'),
        userName: '风花雪月',
        userFullName: '李寒衣',
        // 1是男，2女
        userSex: '1',
        userEmail: '126@lihanyi.com',
        userRole: '普通用户',
        // 1为启用，0为注销
        userState: 0,
        userAddress: '四川',
        userScore: '',
        userTell: 12626262626
      }
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
    }
  },
  created () {},
  mounted () {}
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
