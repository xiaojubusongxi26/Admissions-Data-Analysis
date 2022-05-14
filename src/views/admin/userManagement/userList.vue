<template>
<div class="operate">
  <div class="operate-user">
    <a class="add-user" href="/addUser" title="添加用户">
      <svg t="1652438811277" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1440" width="40" height="40"><path d="M889 809H645c-22 0-40-18-40-40s18-40 40-40h244c22 0 40 18 40 40s-18 40-40 40z" fill="#ffffff" p-id="1441"></path><path d="M807 647v244c0 22-18 40-40 40s-40-18-40-40V647c0-22 18-40 40-40s40 18 40 40zM254.2 311.6c0-75.8 42.2-140.7 101.5-166.3 7-13.4 16.2-25.4 27.7-36.1C399.2 92.1 417.9 80 439.6 73c4-2.1 8.1-4 12.2-5.6-13.3-2.5-26.6-3.8-39.8-3.8-61.5 0-119.2 26.3-162.3 73.9-42.2 46.7-65.5 108.5-65.5 174.2 0 52.6 15.1 102.9 42.9 144.9-34.9 35.2-63.8 77.6-84.5 124.2-25.3 56.9-38.6 120.4-38.5 183.7 0 19.3 15.7 34.9 35 34.9h0.1c19.3 0 35-15.8 34.9-35.1-0.1-53.5 11.1-107.1 32.4-155.1 21.2-47.6 52.4-89.8 90.3-122l27.2-23.1-23.7-26.7c-29.7-33.7-46.1-78.4-46.1-125.8z" fill="#ffffff" p-id="1442"></path><path d="M559.4 134.1c38.2 0 74.2 14.9 101.2 41.9s41.9 63 41.9 101.2-14.9 74.2-41.9 101.2-63 41.9-101.2 41.9-74.2-14.9-101.2-41.9-41.9-63-41.9-101.2S431.2 203 458.2 176s63-41.9 101.2-41.9m0-70c-117.7 0-213.1 95.4-213.1 213.1s95.4 213.1 213.1 213.1 213.1-95.4 213.1-213.1S677.1 64.1 559.4 64.1zM454.6 866.3H223.9l5.5-39.8c5.3-38.2 16.7-75.2 33.8-109.9 25.6-52.1 63.8-98.2 110.3-133 63.9-48 140.2-73.4 220.8-73.4 51.6 0 101.6 10.5 148.7 31.2 17.7 7.8 25.7 28.4 18 46.1-7.8 17.7-28.4 25.7-46.1 18-38.1-16.8-78.7-25.2-120.5-25.2-65.3 0-127.1 20.5-178.8 59.4-37.8 28.3-68.7 65.6-89.5 108-7.8 15.7-14.1 32-18.8 48.8h147.4c19.3 0 35 15.7 35 35s-15.8 34.8-35.1 34.8z" fill="#ffffff" p-id="1443"></path></svg>
    </a>
    <div class="search-user">
      <div class="demo-input-suffix">
        <span>用户名：</span>
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="searchUsername">
        </el-input>
      </div>
      <div class="demo-input-suffix">
        <span>姓名：</span>
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="searchName">
        </el-input>
      </div>
      <div class="demo-input-suffix">
        <span>手机号：</span>
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="searchTell">
        </el-input>
      </div>
      <div class="search-btn">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button type="primary" icon="el-icon-thumb">清除</el-button>
      </div>
    </div>
  </div>
  <div class="user-list">
    <el-descriptions v-for="(item, index) in userList" :key="index" class="margin-top" :title="'ID: ' + item.userId" :column="3" border>
      <template slot="extra">
        <el-button type="primary" size="small">详情</el-button>
        <el-button type="primary" size="small">修改</el-button>
        <el-button type="primary" size="small">注销</el-button>
        <el-button type="primary" size="small">启用</el-button>
        <el-button type="primary" size="small">重置密码</el-button>
      </template>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          用户名
        </template>
        {{ item.userName }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user-solid"></i>
          姓名
        </template>
        {{ item.userFullName }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-female"></i>
          性别
        </template>
        {{ item.userSex }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-message"></i>
          邮箱
        </template>
        {{ item.userEmail }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-s-custom"></i>
          角色
        </template>
        {{ item.userRole }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          状态
        </template>
        <el-tag size="small">{{ item.userState }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          电话
        </template>
        {{ item.userTell }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
  <el-pagination
    :page-size="20"
    :pager-count="11"
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      // 搜索条件
      searchUsername: '',
      searchName: '',
      searchTell: '',
      userList: [
        {
          userId: '1001',
          userName: '风花雪月',
          userFullName: '李寒衣',
          userSex: '女',
          userEmail: '126@lihanyi.com',
          userRole: '管理员',
          userState: '启用',
          userTell: 12626262626
        },
        {
          userId: '1002',
          userName: '风花雪月',
          userFullName: '李寒衣',
          userSex: '女',
          userEmail: '126@lihanyi.com',
          userRole: '管理员',
          userState: '启用',
          userTell: 12626262626
        },
        {
          userId: '1003',
          userName: '风花雪月',
          userFullName: '李寒衣',
          userSex: '女',
          userEmail: '126@lihanyi.com',
          userRole: '管理员',
          userState: '启用',
          userTell: 12626262626
        },
        {
          userId: '1004',
          userName: '风花雪月',
          userFullName: '李寒衣',
          userSex: '女',
          userEmail: '126@lihanyi.com',
          userRole: '管理员',
          userState: '启用',
          userTell: 12626262626
        },
        {
          userId: '1005',
          userName: '风花雪月',
          userFullName: '李寒衣',
          userSex: '女',
          userEmail: '126@lihanyi.com',
          userRole: '管理员',
          userState: '启用',
          userTell: 12626262626
        }
      ]
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="scss" scoped>
.operate {
  width: 100%;
}
.operate-user {
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ebebeb;
}
.operate-user {
  .add-user{
    display: flex;
    float: left;
    height: 60px;
    width: 60px;
    background: #1595d4;
    justify-content: center;
    align-items: center;
  }
}
.search-user {
  margin-left: 60px;
  width: auto;
  height: 60px;
  padding: 0 40px;
  display: flex;
  justify-content: space-around;
  .demo-input-suffix {
    height: 60px;
    display: flex;
    span {
      width: 72px;
      font-size: 14px;
    }
    .el-input {
      // width: 200px;
    }
  }
  .search-btn {
    button:first-child {
      margin-right: 16px;
    }
    ::v-deep .el-button--primary {
      background-color: #1595d4 !important;
      border-color: #1595d4 !important;
    }
  }
}
.user-list {
  padding: 26px 26px 0;
  width: 100%;
  box-sizing: border-box;
  ::v-deep .el-descriptions {
    border: 2px solid #f1f1f1;
    padding: 16px;
    margin-bottom: 22px;
    box-sizing: border-box;
    transition: .2s all;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgb(189 189 189 / 20%), 0 3px 20px 0 rgb(203 203 203 / 19%);
    &:hover {
      border: 2px solid #1595d4;
    }
    .el-descriptions__header {
      .el-descriptions__extra {
        .el-button--primary {
          background-color: #1595d4 !important;
          border-color: #1595d4 !important;
        }
      }
    }
  }
}
</style>
