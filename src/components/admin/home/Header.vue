<template>
  <header>
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
        <a href="/dataShow">
          首页
        </a>
      </div>
      <div class="link text">
        <a href="/userList">
          用户管理
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
      username: '谢看花🌸'
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
@import '@/assets/scss/common/nav.scss';
</style>
