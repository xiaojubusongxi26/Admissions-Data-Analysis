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
          <el-image
            style="width: 100px; height: 100px"
            :src="userInfo.avatar"
          >
          </el-image>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span> 用户名： </span>
        </div>
        <div class="user-info-data">
          <el-input
            v-model="changeUserInfo.username"
            placeholder="请输入内容"
          ></el-input>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span> 姓名： </span>
        </div>
        <div class="user-info-data">
          <el-input
            v-model="changeUserInfo.name"
            placeholder="请输入内容"
          ></el-input>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span> 邮箱： </span>
        </div>
        <div class="user-info-data">
          <el-input
            v-model="changeUserInfo.email"
            placeholder="请输入内容"
          ></el-input>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span> 手机号： </span>
        </div>
        <div class="user-info-data">
          <el-input
            v-model="changeUserInfo.phone"
            placeholder="请输入内容"
          ></el-input>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span> 省份： </span>
        </div>
        <div class="user-info-data">
          <span>
            {{ userInfo.province === '中国' ? '未设置' : userInfo.province }}
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
        <div class="user-info-data user-info-sex">
          <el-radio v-model="changeUserInfo.sex" :label="0">男</el-radio>
          <el-radio v-model="changeUserInfo.sex" :label="1">女</el-radio>
          <el-radio v-model="changeUserInfo.sex" :label="-1">保密</el-radio>
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
          <el-tag v-if="userInfo.status">启用</el-tag>
          <el-tag v-else type="danger">注销</el-tag>
        </div>
      </div>
      <div class="user-info-btn">
        <el-button type="primary" @click="saveRevise">保存</el-button>
        <el-button type="primary" @click="goUserList">返回</el-button>
      </div>
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
      userInfo: '',
      // 可更改的用户信息
      changeUserInfo: '',
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
    saveRevise() {
      this.updateUserInfo()
        .then(({ data }) => {
          this.$message({
            type: 'success',
            message: '用户信息修改成功',
          })
          this.initUserInfo()
        })
        .catch(() => {
          this.$message({
            type: 'error',
            message: '用户信息修改失败',
          })
        })
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

        if (this.userInfo.province === '') {
          this.userInfo.province = '中国'
        }
        this.changeUserInfo = this.userInfo
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
    async updateUserInfo() {
      const data = await this.$axios({
        url: 'gxc/usertb/updateUserById',
        method: 'post',
        data: {
          userId: this.changeUserInfo.userId,
          email: this.changeUserInfo.email,
          name: this.changeUserInfo.name,
          phone: this.changeUserInfo.phone,
          sex: this.changeUserInfo.sex,
          username: this.changeUserInfo.username,
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
.user-info {
  width: 100%;
  box-sizing: border-box;
  padding: 56px 56px;
  display: flex;
  justify-content: center;
  flex-direction: column;
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
    width: 500px;
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
    .user-info-sex {
      display: flex;
      align-items: center;
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
