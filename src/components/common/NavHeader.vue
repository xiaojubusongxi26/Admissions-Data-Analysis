<template>
  <div class="nav" :class="{none: isChange}">
    <div class="nav-header">
      <div class="logo">
        <h1></h1>
        <!-- <span>——高校招生计划数据分析可视化系统</span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
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
.none {
  height: 0 !important;
  // display: none !important;
}
.nav {
  width: 1280px;
  height: 70px;
  border-bottom: 1px solid #f1f1f1;
  position: fixed;
  transition: .1s all;
  overflow: hidden;
  top: 0;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  background: #fefefe;
  z-index: 10;
}
.nav-header {
  width: 1280px;
  height: 100%;
  // color: #1595d4;
  .logo {
    height: 100%;
    line-height: 100%;
    display: inline-block;
    display: block;
    float: left;
    h1 {
      width: 260px;
      background: url('~@/assets/高校查logo.png') no-repeat;
      background-size: contain;
      padding: 0 10px;
      height: 100%;
      line-height: 70px;
      display: inline-block;
    }
    span {
      margin-top: 22px;
      height: 20px;
      line-height: 20px;
    }
  }
}
</style>
