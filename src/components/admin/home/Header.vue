<template>
  <header :class="{ top: isChange }">
    <div class="user-avatar">
      <div class="avatar left">
        <a href="/personalCenter" class="user">
          <img :src="avatar" alt="" />
          <h2>{{ username }}</h2>
        </a>
      </div>
    </div>
    <div class="links">
      <div class="link text">
        <a href="/adminIndex"> 首页 </a>
      </div>
      <div class="link text">
        <a href="/userList"> 用户管理 </a>
      </div>
      <div class="link text">
        <a href="/messageCenter">
          <el-badge :value="unreadCount" :max="99" class="item">
            消息中心
          </el-badge>
        </a>
      </div>
      <div class="link text">
        <a href="/personalCenter"> 个人中心 </a>
      </div>
      <div class="link text">
        <a href="javascript:;"> 系统设置 </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      // 默认头像
      avatar: '',
      username: '谢看花🌸',
      isChange: 0,
      unreadCount: 0,
      defaultManImg: this.$store.getters.getDefaultManImg,
      defaultWomanImg: this.$store.getters.getDefaultWomanImg,
      defaultSecrecyImg: this.$store.getters.getDefaultSecrecyImg,
    }
  },
  computed: {},
  methods: {
    init() {
      this.initUserInfo()
      this.getUnreadCount().then(({ data }) => {
        this.unreadCount = data.CountsOfUnchecked
      })
    },
    initHeight() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      this.isChange = scrollTop > 70 ? 1 : 0
    },
    // 初始化用户信息
    initUserInfo() {
      this.userId = this.$store.getters.getUserInfo.userId
      this.getUserInfo().then(({ data }) => {
        this.username = data.user.username
        this.avatar = data.user.avatar
        if (this.avatar === null) {
          if (data.user.sex === 0) {
            this.avatar = this.defaultManImg
          } else if (data.user.sex === 1) {
            this.avatar = this.defaultWomanImg
          } else {
            this.avatar = this.defaultSecrecyImg
          }
        }
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
    async getUnreadCount() {
      const data = await this.$axios({
        url: 'gxc/contactmsgtb/getStatusOf0',
        method: 'post',
      })

      return data
    },
  },
  created() {
    this.init()
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/common/nav.scss';
.top {
  top: 0;
}
.top2 {
  top: 70px;
}
.el-icon-message {
  color: #000000;
}
::v-deep .el-badge__content.is-fixed {
  top: 8px;
}
</style>
