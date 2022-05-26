<template>
  <div class="container">
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '../components/common/NavHeader.vue'
import NavFooter from '../components/common/NavFooter.vue'
export default {
  components: {
    NavHeader,
    NavFooter
  },
  props: {},
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {
    // 获取用户个人信息，保存到store
    getUerInfo () {
      const hasToken = localStorage.getItem('token')
      this.$axios({
        method: 'post',
        url: '/gxc/usertb/getUserByToken',
        data: {
          token: hasToken
        }
      }).then(res => {
        console.log(res)
        this.$store.dispatch('update_userInfo', res.data.user)
      })
    }
  },
  created () {
    this.getUerInfo()
  },
  mounted () {}
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  width: 1280px;
  margin: 0 auto;
  flex-direction: column;
}
</style>
