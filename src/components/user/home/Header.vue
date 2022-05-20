<template>
  <header :class="{top: isChange}">
    <div class="user-avatar">
      <div class="avatar left">
        <router-link :to="'/userCenter/' + userInfo.userId" class="user">
          <img :src="defaultAvatar" alt="">
          <h2>{{ userInfo.userName }}</h2>
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
      userInfo: {
        userId: '1001',
        userAvatar: require('@/assets/images/default/avatar/头像男三.png'),
        userName: '风花雪月',
        userFullName: '李寒衣',
        // 1是男，2女
        userSex: '1',
        userEmail: '126@lihanyi.com',
        userRole: '普通用户',
        // 1为启用，0为注销
        userState: 0,
        userCity: '雪月城',
        userScore: '未设置',
        userTell: 12626262626
      },
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
</style>
