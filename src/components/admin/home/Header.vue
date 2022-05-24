<template>
  <header  :class="{top: isChange}">
    <div class="user-avatar">
      <div class="avatar left">
        <a href="/personalCenter" class="user">
          <img :src="defaultAvatar" alt="">
          <h2>{{ username }}</h2>
        </a>
      </div>
    </div>
    <div class="links">
      <div class="link text">
        <a href="/adminIndex">
          首页
        </a>
      </div>
      <div class="link text">
        <a href="/userList">
          用户管理
        </a>
      </div>
      <div class="link text">
        <a href="/messageCenter">
          <el-badge :value="200" :max="99" class="item">
            消息中心
          </el-badge>
        </a>
      </div>
      <div class="link text">
        <a href="/personalCenter">
          个人中心
        </a>
      </div>
      <div class="link text">
        <a href="javascript:;">
          系统设置
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      // 默认头像
      defaultAvatar: require('@/assets/images/default/avatar/头像男三.png'),
      username: '谢看花🌸',
      isChange: 0
    }
  },
  watch: {},
  computed: {},
  methods: {
    initHeight () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isChange = scrollTop > 70 ? 1 : 0
    }
  },
  created () {},
  mounted () {
    window.addEventListener('scroll', this.initHeight)
  }
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
