<template>
  <div class="user-info-sidebar css2f7271a4f024067">
    <div class="sidebar" @click="goPage(1, userInfo.userId)">
      <div class="split"></div>
      <div>用户详情</div>
    </div>
    <div class="sidebar" @click="goPage(2, userInfo.userId)">
      <div class="split"></div>
      <div>修改信息</div>
    </div>
    <div class="sidebar" @click="goPage(3, userInfo.userId)">
      <div class="split"></div>
      <div>重置密码</div>
    </div>
    <div
      class="sidebar"
      v-if="userInfo.status === -1 || userInfo.status === -2"
      @click="open(userInfo)"
    >
      <div class="split"></div>
      <div>启用用户</div>
    </div>
    <div class="sidebar" v-else @click="open(userInfo)">
      <div class="split"></div>
      <div>注销用户</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['userInfo'],
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    goPage(index, userId) {
      // 跳转到其他页面：1 用户详情，2 修改信息，3 重置密码
      if (index === 1) {
        this.$router.push('/userInfo/' + userId)
      } else if (index === 2) {
        this.$router.push('/reviseUser/' + userId)
      } else if (index === 3) {
        this.$router.push('/resetUserPassword/' + userId)
      }
    },
    // 修改用户状态，传入userInfo
    open(item) {
      const h = this.$createElement
      this.$msgbox({
        title: '消息',
        message: h('p', null, [
          h('span', null, '确认要 '),
          h(
            'i',
            { style: 'color: teal' },
            item.status === -1 || item.status === -2
              ? '启用' + item.username
              : '注销' + item.username
          ),
          h('span', null, '吗？ '),
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(() => {
        const newState = item.status === -1 || item.status === -2 ? 0 : -1
        this.updateUserState(item.userId, newState)
          .then(({ data }) => {
            console.log(data)
            item.status = data.curStatus
            this.$message({
              type: 'success',
              message: '用户状态修改成功',
            })
          })
          .catch(() => {
            this.$message({
              type: 'error',
              message: '用户状态修改失败',
            })
          })
      })
    },
    // 更新用户信息
    async updateUserState(userId, newStatus) {
      const data = await this.$axios({
        url: 'gxc/usertb/UpdateAccountStatusByID',
        method: 'post',
        data: {
          userId: userId,
          newStatus: newStatus,
        },
      })

      return data
    },
  },
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
@import 'http://cdn.repository.webfont.com/webfonts/nomal/147559/19673/62826059f629d81220bb2b91.css';
.user-info-sidebar {
  width: 200px;
  height: calc(100% - 112px);
  background: #fcfcfc;
  border: 1px solid #f5f5f5;
  position: absolute;
  top: 56px;
  left: 56px;
  padding: 26px 16px;
  box-sizing: border-box;
  .sidebar {
    height: 50px;
    line-height: 50px;
    cursor: pointer;
    border-top: 1px solid #f1f1f1;
    padding: 8px 0;
    position: relative;
    .split {
      position: absolute;
      left: 0;
      width: 5px;
      height: 20px;
      background: #83c1e0;
      border-radius: 4px;
      display: inline;
      margin: 15px 0;
      line-height: 60px;
    }
    div {
      border-radius: 8px;
      font-weight: bold;
      font-size: 16px;
      transition: 0.2s all;
      &:hover {
        background: #eff5f7;
      }
    }
  }
}
</style>
