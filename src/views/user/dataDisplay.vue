<template>
<div>
  <div class="data-display">
    <div class="title">
      <div class="split"></div>
      <h3>{{ $route.name }}</h3>
    </div>
    <div class="data-panel">
      <EnrollmentPlan></EnrollmentPlan>
      <Map></Map>
    </div>
  </div>
  <div class="data-display">
    <div class="title">
      <div class="split"></div>
      <h3>院校推荐、专业TOP</h3>
    </div>
    <div class="recommend-panel">
      <SchoolRecommend></SchoolRecommend>
      <Top></Top>
    </div>
  </div>
</div>
</template>

<script>
import Map from '@/components/user/dataDisplay/Map.vue'
import EnrollmentPlan from '@/components/user/dataDisplay/EnrollmentPlan.vue'
import Top from '@/components/user/dataDisplay/Top.vue'
import SchoolRecommend from '@/components/user/dataDisplay/SchoolRecommend.vue'
export default {
  components: { Map, EnrollmentPlan, Top, SchoolRecommend },
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
.data-display, .recommend-panel {
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 4px;
  height: 650px;
  box-shadow: 0 4px 8px 0 rgb(189 189 189 / 20%), 0 3px 10px 0 rgb(203 203 203 / 19%);
  margin-bottom: 26px;
  .title{
    box-sizing: border-box;
    padding: 0 36px 0 10px;
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
      display: block;
    }
    .record {
      float: right;
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        color: #ffcb3b;
        font-size: 14px;
        font-weight: bolder;
      }
    }
  }
  .data-panel {
    display: flex;
    .map {
      flex: 7;
    }
    .enrollment-plan {
      flex: 2;
    }
  }
}
.recommend-panel {
  display: flex;
  margin-top: 0 !important;
  .school-recommend {
    flex: 7;
  }
  .top {
    flex: 3;
  }
}
</style>
