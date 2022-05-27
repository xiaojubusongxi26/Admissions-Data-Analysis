<template>
  <div class="user-info">
    <adminSidebar :userInfo="userInfo"></adminSidebar>
    <div class="info">
      <h3>{{ $route.name }}</h3>
      <div class="user-info-show user-info-show-avatar">
        <div class="user-info-title">
          <span> 头像： </span>
        </div>
        <div class="user-info-data user-avatar">
          <!-- <img :src='userInfo.userAvatar' alt=""> -->
          <el-image style="width: 100px; height: 100px" :src="userInfo.avatar">
          </el-image>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span> 用户名： </span>
        </div>
        <div class="user-info-data">
          <span>
            {{ userInfo.username }}
          </span>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span> 姓名： </span>
        </div>
        <div class="user-info-data">
          <span>
            {{ userInfo.name }}
          </span>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span> 邮箱： </span>
        </div>
        <div class="user-info-data">
          <span>
            {{ userInfo.email }}
          </span>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span> 手机号： </span>
        </div>
        <div class="user-info-data">
          <span>
            {{ userInfo.phone }}
          </span>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span> 省份： </span>
        </div>
        <div class="user-info-data">
          <span>
            {{ userInfo.province === '' ? '未设置' : userInfo.province }}
          </span>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span> 分数： </span>
        </div>
        <div class="user-info-data">
          <span>
            {{ userInfo.score === 0 ? '未设置' : userInfo.scor }}
          </span>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span> 性别： </span>
        </div>
        <div class="user-info-data">
          <span v-if="userInfo.sex === 0">男</span>
          <span v-if="userInfo.sex === -1">保密</span>
          <span v-if="userInfo.sex === 1">女</span>
        </div>
      </div>
      <!-- <div class="user-info-show">
        <div class="user-info-title">
          <span> 角色： </span>
        </div>
        <div class="user-info-data">
          <span>
            {{ userInfo.userRole }}
          </span>
        </div>
      </div> -->
      <div class="user-info-show">
        <div class="user-info-title">
          <span> 状态： </span>
        </div>
        <div class="user-info-data">
          <el-tag
            size="small"
            v-if="userInfo.status === 0 || userInfo.status === 1"
            >启用</el-tag
          >
          <el-tag size="small" v-else type="danger">注销</el-tag>
        </div>
      </div>
      <el-button type="primary" @click="goUserList()">返回</el-button>
    </div>
  </div>
</template>

<script>
import adminSidebar from '@/components/admin/userManagement/adminSidebar.vue'
export default {
  components: {
    adminSidebar,
  },
  props: {},
  data() {
    return {
      userId: '',
      userInfo: '',
      // element大图预览
      defaultManImg: this.$store.getters.getDefaultManImg,
      defaultWomanImg: this.$store.getters.getDefaultWomanImg,
      defaultSecrecyImg: this.$store.getters.getDefaultSecrecyImg,
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 跳转到用户列表页面
    goUserList() {
      this.$router.push('/userList')
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
  },
  created() {
    this.initUserInfo()
  },
  mounted() {},
}
</script>
<style lang="scss" scoped>
@import 'http://cdn.repository.webfont.com/webfonts/nomal/147559/19673/62826059f629d81220bb2b91.css';

.user-info {
  width: 100%;
  box-sizing: border-box;
  padding: 56px 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  h3 {
    margin: 16px 0 36px;
    font-size: 36px;
    color: #1595d4;
  }
  .info {
    flex: 1;
  }
  .user-info-show {
    display: flex;
    height: 50px;
    line-height: 50px;
    .user-info-title {
      font-size: 14px;
      flex: 1;
      span {
        float: right;
      }
    }
    .user-info-data {
      flex: 1;
      padding-left: 66px;
      font-size: 14px;
      font-weight: bold;
      color: #626262;
      cursor: default;
      &:hover {
        color: #1595d4;
      }
      span {
        float: left;
      }
    }
  }
  ::v-deep .user-info-show-avatar {
    height: 100px;
    line-height: 100px;
    margin-bottom: 12px;
    .user-avatar {
      position: relative;
      .el-image {
        position: absolute;
        left: 42px;
        width: 100px;
        height: 100px;
        border-radius: 100px;
        img {
          object-fit: cover;
        }
      }
    }
  }
  .el-button {
    margin-top: 26px;
  }
  .el-tag {
    // width: 100%;
    height: 24px;
    margin: 13px 0;
    line-height: 24px;
  }
}
</style>
