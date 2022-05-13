<template>
  <div class="carousel">
    <!-- <div class="mask"></div> -->
    <!-- <swiper :options="swiperOption">
      <swiper-slide>
        <img src="" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper> -->
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: 'fade',
        cubeEffect: {
          slideShadows: true,
          shadow: false,
          shadowOffset: 1000,
          shadowScale: 0.6
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        fadeEffect: {
          crossFade: true
        }
      }
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
.carousel{
  margin-top: 100px;
  width: 80vw;
  height: 45vw;
  max-width: 1580px;
  max-height: 878px;
  .mask {
    width: 100%;
    height: 100%;
    // backdrop-filter: blur(400px);
  }
  .swiper-container{
    --swiper-pagination-color: #ffffff !important;
    height: 100%;
    img{
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    ::v-deep .swiper-pagination-bullet-active{
      background: #ffffff !important;
    }
  }
}
</style>
