<template>
  <div class="user-management">
    <div class="title">
      <div class="split"></div>
      <h3>{{ $route.name }}</h3>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  components: { },
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
.user-management {
  width: 100%;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(189, 189, 189, 0.2), 0 3px 10px 0 rgba(203, 203, 203, 0.19);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 20px;
  .title{
    box-sizing: border-box;
    padding: 0 10px;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ebebeb;
    .split {
      width: 5px;
      height: 20px;
      background: #1595d4;
      float: left;
      border-radius: 4px;
      display: inline;
      margin: 20px 8px 20px 0;
      line-height: 60px;
    }
    h3 {
      float: left;
      display: inline-block;
    }
  }
}
</style>
