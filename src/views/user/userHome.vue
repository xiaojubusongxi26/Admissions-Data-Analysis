<template>
  <div class="user-home">
    <header>
      <div class="links">
        <div class="link avatar">
          <a href="javascript:;">
            <img :src="defaultAvatar" alt="">
          </a>
        </div>
        <div class="link text">
          <a href="javascript:;">
            展示大厅
          </a>
        </div>
        <div class="link text">
          <a href="javascript:;">
            分析系统
          </a>
        </div>
        <div class="link text">
          <a href="javascript:;">
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
    <div></div>
  </div>
</template>

<script>
export default {
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
}
</style>
