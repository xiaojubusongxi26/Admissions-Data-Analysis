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
        <div class="panel-head">
          <div @click="isState = 0">修改信息</div>
          <svg v-if="!isState" t="1652801742162" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20974" width="40" height="40"><path d="M161.1 511.2l373.6-373.6c26.4-26.4 61-39.5 95.6-39.5 34.6 0 69.2 13.2 95.6 39.5 52.7 52.7 52.7 138.5 0 191.2L400.4 654.3c-10.3 10.3-27 10.3-37.3 0-10.3-10.3-10.3-27 0-37.3l325.4-325.4c32.2-32.2 32.2-84.5 0-116.6-32.2-32.2-84.5-32.2-116.6 0L198.4 548.5M630.3 98.1" fill="#2197EF" p-id="20975"></path><path d="M371 375.9l341.2 341.2c42.5 42.5 42.5 111.4 0 153.9s-111.4 42.5-153.9 0L217 529.9" fill="#CEE8FA" p-id="20976"></path><path d="M198.4 548.5l336.3 336.3c25.5 25.5 59.5 39.6 95.6 39.6 36.1 0 70.1-14.1 95.6-39.6 52.7-52.7 52.7-138.5 0-191.2L389.6 357.3m-74.6 0l17.4 17.4 19.8 19.8 336.3 336.3c32.2 32.2 32.2 84.5 0 116.6-15.6 15.6-36.3 24.2-58.3 24.2s-42.7-8.6-58.3-24.2L235.7 511.2l-20.5-20.5-16.7-16.7" fill="#2197EF" p-id="20977"></path></svg>
          <svg v-else t="1652801627597" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20739" width="40" height="40"><path d="M836.8 551.2L462 176.4c-32.3-32.3-84.8-32.3-117 0-32.3 32.3-32.3 84.8 0 117L671.5 620c10.3 10.3 10.3 27.1 0 37.4-10.3 10.3-27.1 10.3-37.4 0L307.6 330.8c-52.9-52.9-52.9-139 0-191.8 26.4-26.4 61.2-39.7 95.9-39.7s69.5 13.2 95.9 39.7l374.8 374.8M403.5 99.3" fill="#2197EF" p-id="20740"></path><path d="M818.1 532.5L475.8 874.9c-42.6 42.6-111.8 42.6-154.4 0-42.7-42.6-42.7-111.8 0-154.4l342.4-342.4" fill="#CEE8FA" p-id="20741"></path><path d="M645 359.4L307.6 696.8c-52.9 52.9-52.9 139 0 191.8 25.6 25.6 59.7 39.7 95.9 39.7s70.3-14.1 95.9-39.7l337.4-337.4m0-74.8L820 493.2l-20.6 20.6L462 851.2c-15.6 15.6-36.4 24.2-58.5 24.2s-42.9-8.6-58.5-24.2c-32.3-32.3-32.3-84.8 0-117l337.4-337.4 19.9-19.9 17.5-17.5" fill="#2197EF" p-id="20742"></path></svg>
          <div @click="isState = 1">重置密码</div>
        </div>
        <div class="panel-body">
          <UserInfoSetting v-if="!isState"></UserInfoSetting>
          <ChangePasswword v-else></ChangePasswword>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserInfoSetting from '@/components/user/userCenter/UserInfoSetting.vue'
import ChangePasswword from '@/components/user/userCenter/ChangePasswword.vue'
export default {
  components: { UserInfoSetting, ChangePasswword },
  props: {},
  data () {
    return {
      // 当前处于0 修改信息还是1 重置密码
      isState: 0,
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
    }
  },
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.personal-center {
  width: 100%;
  height: 650px;
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
      display: block;
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
      padding-bottom: 36px;
      .panel-head {
        width: 100%;
        height: 60px;
        display: flex;
        cursor: pointer;
        border-bottom: 1px solid #f7f7f7;
        box-sizing: border-box;
        div {
          flex: 1;
          box-sizing: border-box;
          margin: 10px 20px;
          height: 40px;
          line-height: 40px;
          border-radius: 8px;
          font-weight: bold;
          transition: .3s all;
          &:hover {
            background: #d7ebf5;
          }
        }
        svg {
          height: 60px;
        }
      }
      .panel-body {
        width: 100%;
        box-sizing: border-box;
      }
    }
  }
}
</style>
