<template>
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
          <i class="el-icon-mobile-phone"></i>
          姓名
        </template>
        {{ item.userFullName }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          性别
        </template>
        {{ item.userSex }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          邮箱
        </template>
        {{ item.userEmail }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
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
          <i class="el-icon-office-building"></i>
          电话
        </template>
        {{ item.userTell }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
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
