<template>
  <div class="container">
    <nav-header class="header"></nav-header>
    <router-view class="body"></router-view>
    <nav-footer class="footer"></nav-footer>
  </div>
</template>

<script>
import NavHeader from '../components/common/NavHeader.vue'
import NavFooter from '../components/common/NavFooter.vue'
export default {
  components: {
    NavHeader,
    NavFooter,
  },
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
.container {
  width: 1280px;
  margin: 0 auto;

  .header {
    line-height: 100px;
    height: 100px;
    margin-bottom: -100px;
  }

  .body {
    min-height: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .footer {
    height: 100px;
    margin-top: -100px;
  }
}
</style>
