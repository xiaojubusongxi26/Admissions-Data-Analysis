<template>
  <div class="user-info">
    <adminSidebar
    :userInfo="userInfo"
    ></adminSidebar>
    <div class="info">
      <h3>{{ $route.name }}</h3>
      <div class="user-info-show user-info-show-avatar">
        <div class="user-info-title">
          <span>
            头像：
          </span>
        </div>
        <div class="user-info-data user-avatar">
          <!-- <img :src='userInfo.userAvatar' alt=""> -->
          <el-image
            style="width: 100px; height: 100px"
            :src="userInfo.userAvatar"
            :preview-src-list="srcList">
          </el-image>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span>
            用户名：
          </span>
        </div>
        <div class="user-info-data">
          <el-input v-model="changeUserInfo.userName" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span>
            姓名：
          </span>
        </div>
        <div class="user-info-data">
          <el-input v-model="changeUserInfo.userFullName" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span>
            邮箱：
          </span>
        </div>
        <div class="user-info-data">
          <el-input v-model="changeUserInfo.userEmail" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span>
            手机号：
          </span>
        </div>
        <div class="user-info-data">
          <el-input v-model="changeUserInfo.userTell" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span>
            省份：
          </span>
        </div>
        <div class="user-info-data">
          <span>
            {{ userInfo.userAddress }}
          </span>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span>
            分数：
          </span>
        </div>
        <div class="user-info-data">
          <span>
            {{ userInfo.userScore }}
          </span>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span>
            性别：
          </span>
        </div>
        <div class="user-info-data user-info-sex">
          <el-radio v-model="changeUserInfo.userSex" label="0">男</el-radio>
          <el-radio v-model="changeUserInfo.userSex" label="1">女</el-radio>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span>
            角色：
          </span>
        </div>
        <div class="user-info-data">
          <span>
            {{ userInfo.userRole }}
          </span>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span>
            状态：
          </span>
        </div>
        <div class="user-info-data">
          <el-tag v-if="userInfo.userState">启用</el-tag>
          <el-tag v-else type="danger">注销</el-tag>
        </div>
      </div>
      <div class="user-info-btn">
        <el-button type="primary" @click="saveRevise()">保存</el-button>
        <el-button type="primary" @click="goUserList()">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import adminSidebar from '@/components/admin/userManagement/adminSidebar.vue'
export default {
  components: {
    adminSidebar
  },
  props: {},
  data () {
    return {
      userInfo: {
        userId: '1001',
        userAvatar: require('@/assets/images/default/avatar/头像男三.png'),
        userName: '风花雪月',
        userFullName: '李寒衣',
        // 1是男，2女
        userSex: '1',
        userEmail: '126@lihanyi.com',
        userRole: '管理员',
        // 1为启用，0为注销
        userState: 0,
        userAddress: '四川',
        userScore: '未设置',
        userTell: 12626262626
      },
      // 可更改的用户信息
      changeUserInfo: {
      },
      // element大图预览
      srcList: [
        require('@/assets/images/default/avatar/头像男三.png')
      ]
    }
  },
  watch: {},
  computed: {},
  methods: {
    goUserList () {
      this.$router.push('/userList')
    }
  },
  created () {
    this.changeUserInfo = this.userInfo
  },
  mounted () {}
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
  .user-info-show-avatar {
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
