<template>

  <div class="map">
    <div class="map-header">
      <h2>全国计划招生总人数</h2>
      <span class="css2f7da245c624067">7,026,123</span>
    </div>
    <div id="myChartChina" :style="{ width: '60%', height: '60%' }"></div>

  </div>

</template>
<script>
require('echarts/map/json/china.json')

export default {
  props: {},

  data () {
    return {}
  },

  created () {},

  mounted () {
    this.drawLine()
  },

  methods: {
    drawLine () {
      var myChartContainer = document.getElementById('myChartChina') // 绑定div容器

      var resizeMyChartContainer = function () {
        myChartContainer.style.width = 100 + '%'

        myChartContainer.style.height = 500 + 'px'
      }

      resizeMyChartContainer()

      var myChartChina = this.$echarts.init(myChartContainer)

      function randomData () {
        return Math.round(Math.random() * 500)
      }

      // 绘制图表

      var optionMap = {
        tooltip: {
          trigger: 'item'
        },

        // 左侧小导航图标

        visualMap: {
          show: false,

          x: 'left',

          y: 'center',

          // 改变地图区域颜色

          splitList: [
            { start: 500, end: 600 },

            { start: 400, end: 500 },

            { start: 300, end: 400 },

            { start: 200, end: 300 },

            { start: 100, end: 200 },

            { start: 0, end: 100 }
          ],

          color: [
            '#fdaea7',

            '#6e89b8',

            '#488cb8',

            '#d8e9d8',

            '#a8c1ed',

            '#fcbaa3'
          ]
        },

        // 配置属性

        series: [
          {
            name: '数据',

            type: 'map',

            mapType: 'china',

            roam: false,

            label: {
              normal: {
                show: false // 省份名称
              },

              emphasis: {
                show: false
              }
            },

            data: [
              { name: '北京', value: '100' },

              { name: '天津', value: randomData() },

              { name: '上海', value: randomData() },

              { name: '重庆', value: randomData() },

              { name: '河北', value: randomData() },

              { name: '河南', value: randomData() },

              { name: '云南', value: randomData() },

              { name: '辽宁', value: randomData() },

              { name: '黑龙江', value: randomData() },

              { name: '湖南', value: randomData() },

              { name: '安徽', value: randomData() },

              { name: '山东', value: randomData() },

              { name: '新疆', value: randomData() },

              { name: '江苏', value: randomData() },

              { name: '浙江', value: randomData() },

              { name: '江西', value: randomData() },

              { name: '湖北', value: randomData() },

              { name: '广西', value: randomData() },

              { name: '甘肃', value: randomData() },

              { name: '山西', value: randomData() },

              { name: '内蒙古', value: randomData() },

              { name: '陕西', value: randomData() },

              { name: '吉林', value: randomData() },

              { name: '福建', value: randomData() },

              { name: '贵州', value: randomData() },

              { name: '广东', value: randomData() },

              { name: '青海', value: randomData() },

              { name: '西藏', value: randomData() },

              { name: '四川', value: randomData() },

              { name: '宁夏', value: randomData() },

              { name: '海南', value: randomData() },

              { name: '台湾', value: randomData() },

              { name: '香港', value: randomData() },

              { name: '澳门', value: randomData() }
            ] // 数据
          }
        ]
      }

      myChartChina.setOption(optionMap)

      window.onresize = function () {
        resizeMyChartContainer()

        myChartChina.resize()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('http://cdn.repository.webfont.com/webfonts/nomal/147559/45807/62853db1f629d812180d5c21.css');
.map {
  height: 100%;
  .map-header {
    margin-top: 36px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    h2 {
      margin-right: 26px;
    }
    span {
      font-size: 36px;
      font-weight: bold;
      color: #ff6600;
      letter-spacing: 3px;
    }
  }
}
</style>
