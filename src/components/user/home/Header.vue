<template>
  <header :class="{top: isChange}">
    <div class="user-avatar">
      <div class="avatar left">
        <router-link :to="'/userCenter/' + $store.state.userInfo.userId" class="user">
          <img :src="$store.state.userInfo.avatar === null ? defaultAvatar : $store.state.userInfo.avatar" alt="">
          <h2>{{ $store.state.userInfo.username }}</h2>
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
        <a :href="'/userCenter/' + $store.state.userId">
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
    },
    // 获取用户个人信息，保存到store
    getUerInfo () {
      this.$axios({
        method: 'post',
        url: '/gxc/usertb/info/' + this.$store.state.userId,
      }).then(res => {
        this.$store.dispatch('update_userInfo', res.data.user)
      })
    }
  },
  created () {
    this.getUerInfo()
  },
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
img {
  border-radius: 36px;
  object-fit: cover;
}
</style>
