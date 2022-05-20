<template>
  <div class="school-recommend">
    <el-carousel trigger="click" height="150px">
      <el-carousel-item v-for="(item, index) in schoolImgList" :key="index">
        <h3 class="small css2f8092a07b24067">{{ item.name }}</h3>
        <img :src="item.imgUrl" alt="">
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
      schoolImgList: [
        {
          name: '成都信息工程大学',
          imgUrl: require('@/assets/images/SchoolRecommend/DSC06246.jpg')
        },
        {
          name: '北京大学',
          imgUrl: require('@/assets/images/SchoolRecommend/北京大学.webp')
        },
        {
          name: '武汉大学',
          imgUrl: require('@/assets/images/SchoolRecommend/武汉大学.webp')
        }
      ]
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
@import url('http://cdn.repository.webfont.com/webfonts/nomal/147559/46050/6285fe4bf629d812180d5c3e.css');
::v-deep .el-carousel {
  height: 650px;
  .el-carousel__container {
    height: 650px !important;
    overflow: hidden;
    .el-carousel__item  {
      // position: relative;
      img {
        object-fit: cover;
        width: 100%;
        height: 650px;
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
