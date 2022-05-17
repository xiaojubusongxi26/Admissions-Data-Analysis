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
          <span>
            {{ userInfo.userName }}
          </span>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span>
            姓名：
          </span>
        </div>
        <div class="user-info-data">
          <span>
            {{ userInfo.userFullName }}
          </span>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span>
            邮箱：
          </span>
        </div>
        <div class="user-info-data">
          <span>
            {{ userInfo.userEmail }}
          </span>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span>
            手机号：
          </span>
        </div>
        <div class="user-info-data">
          <span>
            {{ userInfo.userTell }}
          </span>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span>
            城市：
          </span>
        </div>
        <div class="user-info-data">
          <span>
            {{ userInfo.userCity }}
          </span>
        </div>
      </div>
      <div class="user-info-show">
        <div class="user-info-title">
          <span>
            性别：
          </span>
        </div>
        <div class="user-info-data">
          <span v-if="userInfo.userSex === '0'">男</span>
          <span v-else>女</span>
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
          <el-tag size="small" v-if="userInfo.userState">启用</el-tag>
          <el-tag size="small" v-else type="danger">注销</el-tag>
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
      <el-button type="primary" @click="goUserList()">返回</el-button>
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
        userSex: '1',
        userEmail: '126@lihanyi.com',
        userRole: '管理员',
        userState: 0,
        userCity: '雪月城',
        userScore: '未设置',
        userTell: 12626262626
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
  created () {},
  mounted () {}
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
