<template>
  <div class="user-home">
    <Header></Header>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from '@/components/user/home/Header.vue'
export default {
  components: { Header },
  methods: {
    handleClick (row) {
      console.log(row)
    }
  },
  data () {
    return {
      // 默认头像
      defaultAvatar: require('@/assets/images/default/avatar/头像男三.png')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/common/nav.scss';

.user-home {
  width: 1280px;
  margin: 126px 0;
}
</style>
