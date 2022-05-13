<template>
  <div class="nav">
    <div class="nav-header">
      <div class="logo">
        <h1>高校查🐬</h1>
        <span>——高校招生计划数据分析可视化系统</span>
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
.nav {
  width: 1280px;
  height: 70px;
  border-bottom: 1px solid #f1f1f1;
  position: fixed;
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
    float: left;
    h1 {
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
