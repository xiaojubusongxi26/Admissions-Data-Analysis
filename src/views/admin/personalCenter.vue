<template>
  <div class="personal-center">
    <div class="title">
      <div class="split"></div>
      <h3>{{ $route.name }}</h3>
    </div>
    <div class="personal">
      <div class="avatar-panel">
        <img :src="imageUrl" class="mosk-log" alt="">
        <div class="avatar-show">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <h2>谢看花</h2>
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
              v-model="adminName"
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
              v-model="adminFullName"
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
        <el-button type="primary" @click="saveAdminInfo()">保存信息</el-button>
        <el-button type="primary" @click="signOut()">退出登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      adminName: 'xiekanhua26',
      adminFullName: '谢看花',
      imageUrl: require('@/assets/images/default/avatar/mmexport1639710400520.png')
    }
  },
  watch: {},
  computed: {},
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    // 保存管理员用户信息
    saveAdminInfo () {},
    // 管理员退出登录
    signOut () {}
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.personal-center {
  width: 100%;
  height: 500px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 8px -5px 7px 0 rgb(189 189 189 / 20%), -4px 5px 12px 0 rgb(203 203 203 / 19%);
  .title{
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
          border-color: #409EFF;
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
