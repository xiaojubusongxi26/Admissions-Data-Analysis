<template>
  <div class="personal-center">
    <div class="title">
      <div class="split"></div>
      <h3>{{ $route.name }}</h3>
    </div>
    <div class="personal">
      <div class="avatar-panel">
        <img :src="admin.avatar" class="mosk-log" alt="" />
        <div class="avatar-show">
          <el-upload
            class="avatar-uploader"
            action="http://192.168.3.2:9090/api/gxc/usertb/ossFile"
            :show-file-list="false"
            name="file"
            :headers="token"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="admin.avatar" :src="admin.avatar" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <h2>{{ admin.username }}</h2>
      </div>
      <div class="userinfo-panel">
        <div class="userinfo-panel-show">
          <div class="userinfo-panel-show-title">
            <span>用户名：</span>
          </div>
          <div class="userinfo-panel-show-info">
            <el-input
              type="text"
              placeholder="请输入内容"
              v-model="admin.username"
              maxlength="12"
              show-word-limit
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
              v-model="admin.name"
              maxlength="10"
              show-word-limit
            ></el-input>
          </div>
        </div>
        <div class="userinfo-panel-show">
          <div class="userinfo-panel-show-title">
            <span>权限：</span>
          </div>
          <div class="userinfo-panel-show-info tag">
            <el-tag>管理员</el-tag>
          </div>
        </div>
        <el-button type="primary" @click="saveAdminInfo">保存信息</el-button>
        <el-button type="primary" @click="signOut">退出登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      admin: '',
      token: '',
      defaultManImg: this.$store.getters.getDefaultManImg,
      defaultWomanImg: this.$store.getters.getDefaultWomanImg,
      defaultSecrecyImg: this.$store.getters.getDefaultSecrecyImg,
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 初始化页面
    init() {
      console.log(this.$store.getters.getToken)
      this.token = JSON.parse(
        '{"satoken": "' + this.$store.getters.getToken + '"}'
      )
      this.getAdminInfo().then(({ data }) => {
        this.admin = data.user

        if (this.admin.avatar === null) {
          if (this.admin.sex === 0) {
            this.admin.avatar = this.defaultManImg
          } else if (this.admin.sex === 1) {
            this.admin.avatar = this.defaultWomanImg
          } else {
            this.admin.avatar = this.defaultSecrecyImg
          }
        }
      })
    },
    // 上传头像后头像 url 修改
    handleAvatarSuccess(res) {
      this.$message({
        message: '头像更新成功',
        type: 'success',
      })
      this.admin.avatar = res.url
    },
    // 上传头像前文件格式校验
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLt4M = file.size / 1024 / 1024 < 4

      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!')
      }
      if (!isLt4M) {
        this.$message.error('上传头像图片大小不能超过 4MB!')
      }
      return (isJPG || isPNG) && isLt4M
    },
    // 保存管理员用户信息
    saveAdminInfo() {
      this.updateAdminInfo().then(() => {
        this.$message({
          message: '用户信息更改成功',
          type: 'success',
        })
      })
    },
    // 管理员退出登录
    signOut() {
      this.logout().then(() => {
        this.$store.commit('logout')
        this.$router.push('/login')
      })
    },
    async getAdminInfo() {
      const data = await this.$axios({
        url: 'gxc/usertb/info/' + this.$store.getters.getUserInfo.userId,
        method: 'post',
      })

      return data
    },
    async logout() {
      const data = await this.$axios({
        url: 'gxc/usertb/loginoutUser',
        method: 'post',
        data: {
          userId: this.$store.getters.getUserInfo.userId,
        },
      })
      return data
    },
    async updateAdminInfo() {
      const data = await this.$axios({
        url: 'gxc/usertb/updateUserById',
        method: 'post',
        data: {
          userId: this.admin.userId,
          name: this.admin.name,
          username: this.admin.username,
        },
      })
      return data
    },
  },
  created() {
    this.init()
  },
  mounted() {},
}
</script>
<style lang="scss" scoped>
.personal-center {
  width: 100%;
  height: 500px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 8px -5px 7px 0 rgb(189 189 189 / 20%),
    -4px 5px 12px 0 rgb(203 203 203 / 19%);
  .title {
    box-sizing: border-box;
    padding: 0 10px;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ebebeb;
    .split {
      width: 5px;
      height: 20px;
      background: #1595d4;
      float: left;
      border-radius: 4px;
      display: inline;
      margin: 20px 8px 20px 0;
      line-height: 60px;
    }
    h3 {
      float: left;
      display: inline-block;
    }
  }
  .personal {
    width: 100%;
    height: calc(100% - 60px);
    display: flex;
    position: relative;
    .avatar-panel {
      width: 360px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      backdrop-filter: blur(20px);
      position: relative;
      overflow: hidden;
      .mosk-log {
        width: 360px;
        position: absolute;
        height: 100%;
        object-fit: cover;
        filter: blur(9px);
        z-index: -1;
      }
      .avatar-show {
        width: 150px;
        height: 150px;
        border-radius: 150px;
        box-sizing: border-box;
        border: 3px solid #ffffff;
        background: #ffffff;
        overflow: hidden;
        .avatar-uploader .el-upload {
          width: 150px;
          height: 150px;
          border-radius: 150px;
          box-sizing: border-box;
          // border: 2px solid #ffffff;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .avatar-uploader .el-upload:hover {
          border-color: #409eff;
        }
        .avatar-uploader-icon {
          font-size: 28px;
          color: #8c939d;
          width: 150px;
          height: 150px;
          line-height: 150px;
          text-align: center;
        }
        .avatar {
          width: 150px;
          height: 150px;
          display: block;
        }
      }
      h2 {
        height: 60px;
        line-height: 60px;
        color: #ffffff;
        cursor: default;
      }
    }
    .userinfo-panel {
      flex: 7;
      padding: 36px 0;
      .userinfo-panel-show {
        display: flex;
        height: 100px;
        line-height: 100px;
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
        }
        .tag {
          position: relative;
          .el-tag {
            position: absolute;
            left: 26px;
            top: 34px;
            font-size: 14px;
            font-weight: bold;
            color: #ffffff;
            background-color: #fa8baa;
            border-color: #fb7299;
            border-radius: 6px;
            height: 28px;
            line-height: 28px;
          }
        }
      }
    }
  }
}
</style>
