<template>
  <div class="school-recommend">
    <div class="top-info">
      <h3>{{ recommendedMajor}}</h3>
    </div>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="(item, index) in schoolImgList" :key="index">
        <h3 class="small css2f8092a07b24067">{{ item.schoolName }}</h3>
        <img :src="item.pictureUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      recommendedMajor: '',
      top: 0,
      schoolImgList: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    GetSchool () {
      this.$axios({
        method: 'post',
        url: '/gxc/top3schoolhotmajortb/getRecommendByMajorCode',
      }).then((res) => {
        // console.log(res.data)
        if (res.data.code === 0) {
          this.schoolImgList = res.data.recommendList
          this.recommendedMajor = res.data.major_info.majorProfess
          this.top = res.data.major_info.majorRank
        }
      })
    }
  },
  created () {
  },
  mounted () {
    this.GetSchool()
  }
}
</script>
<style lang="scss" scoped>
// @import url('http://cdn.repository.webfont.com/webfonts/nomal/147559/46050/6285fe4bf629d812180d5c3e.css');
.school-recommend {
  position: relative;
  .top-info {
    top: -46px;
    height: 60px;
    width: 100%;
    position: absolute;
    h3 {
      color: #f7796e;
    }
  }
}
::v-deep .el-carousel {
  height: 590px;
  .el-carousel__container {
    height: 590px !important;
    overflow: hidden;
    .el-carousel__item  {
      // position: relative;
      img {
        object-fit: cover;
        width: 100%;
        height: 590px;
      }
    }
  }
}
.el-carousel__item h3 {
  color: #ffffff;
  font-size: 14px;
  margin: 0;
  position: absolute;
  font-size: 36px;
  opacity: 0.8;
  right: 52px;
  bottom: 26px;
}
.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}
</style>
