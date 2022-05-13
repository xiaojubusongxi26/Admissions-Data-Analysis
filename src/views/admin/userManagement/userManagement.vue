<template>
  <div class="user-management">
    <div class="title">
      <div class="split"></div>
      <h3>用户管理</h3>
    </div>
    <div class="operate-user">
      <a class="add-user" href="javascript:;" title="添加用户">
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
    <UserList/>
    <el-pagination
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
import UserList from '@/components/admin/userManagement/UserList.vue'
export default {
  components: { UserList },
  props: {},
  data () {
    return {
      // 搜索条件
      searchUsername: '',
      searchName: '',
      searchTell: ''
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
.user-management {
  width: 100%;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(189, 189, 189, 0.2), 0 3px 10px 0 rgba(203, 203, 203, 0.19);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
  .operate-user, .title {
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ebebeb;
  }
  .title{
    box-sizing: border-box;
    padding: 0 10px;
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
}
</style>
