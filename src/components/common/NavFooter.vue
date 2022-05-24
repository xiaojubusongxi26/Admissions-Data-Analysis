<template>
  <div class="nav-footer">
    <div>
      <span>心上青梅</span>
      <el-divider direction="vertical"></el-divider>
      <span>好哒</span>
      <el-divider direction="vertical"></el-divider>
      <span>El viejo</span>
      <el-divider direction="vertical"></el-divider>
      <span>刘一翔</span>
      <el-divider direction="vertical"></el-divider>
      <span>🌸</span>
      <el-divider direction="vertical"></el-divider>
      <span>Rn</span>
      <el-divider direction="vertical"></el-divider>
      <span>云岫</span>
      <el-divider direction="vertical"></el-divider>
      <span>陈琰✨</span>
      <el-divider direction="vertical"></el-divider>
      <span>Plume</span>
      <el-divider direction="vertical"></el-divider>
      <span>易曦翰</span>
    </div>
    <span class="copyright">Copyright ©2022 摸摸小组</span>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
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
.nav-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 300px;
  background: #f1f1f1;
  margin-top: 46px;
  >div {
    margin-bottom: 12px;
    span {
      cursor: default;
    }
    .el-divider {
      background-color: #959595;
      width: 2px;
      margin: 0 16px;
    }
  }
  .copyright {
    width: 100%;
    height: 26px;
    line-height: 26px;
    font-size: 14px;
  }
}
</style>
