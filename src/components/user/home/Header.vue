<template>
  <header :class="{top: isChange}">
    <div class="user-avatar">
      <div class="avatar left">
        <router-link :to="'/userCenter/' + userInfo.userId" class="user">
          <img :src="userInfo.avatar === null ? defaultAvatar : userInfo.avatar" alt="">
          <h2>{{ userInfo.username }}</h2>
        </router-link>
      </div>
    </div>
    <div class="links">
      <div class="link text">
        <a href="/userIndex">
          首页
        </a>
      </div>
      <div class="link text">
        <a href="/dataDisplay">
          展示大厅
        </a>
      </div>
      <div class="link text">
        <a href="/analysisQuery">
          分析查询
        </a>
      </div>
      <div class="link text">
        <a :href="'/userCenter/' + userInfo.userId">
          个人中心
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
      userInfo: {},
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
  created () {
  },
  mounted () {
    this.userInfo = this.$store.getters.getUserInfo
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
</style>
