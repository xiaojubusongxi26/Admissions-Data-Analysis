<template>

  <div class="map">
    <div class="map-header">
      <h2>全国计划招生总人数</h2>
      <span class="css2f7da245c624067">{{ total }}</span>
    </div>
    <div id="myChartChina" :style="{ width: '60%', height: '60%' }"></div>

  </div>

</template>
<script>
require('echarts/map/json/china.json')

export default {
  props: {},

  data () {
    return {
      // 展示数据
      data: [],
      // 招生总数
      total: 0
    }
  },

  created () {
    this.DealData()
  },

  mounted () {
  },

  methods: {
    DealData () {
      this.$axios({
        method: 'post',
        url: '/gxc/cityplantb/list',
        data: {
          userId: 1
        }
      }).then((res) => {
        // console.log(res.data.page.list)
        this.data = res.data.page.list
        const newArr = []
        // console.log(this.data)
        for (const i in this.data) {
          const obj = {}
          for (const j in this.data[i]) {
            if (j === 'cityName') {
              obj.name = this.data[i][j]
            }
            if (j === 'cityPlan') {
              this.total += this.data[i][j]
              obj.value = String(this.data[i][j])
            }
          }
          newArr.push(obj)
        }
        this.data = newArr
        this.drawLine()
      })
    },
    drawLine () {
      var myChartContainer = document.getElementById('myChartChina') // 绑定div容器

      var resizeMyChartContainer = function () {
        myChartContainer.style.width = 100 + '%'

        myChartContainer.style.height = 500 + 'px'
      }

      resizeMyChartContainer()

      var myChartChina = this.$echarts.init(myChartContainer)

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
            { start: 25000, end: 80000 },

            { start: 20000, end: 25000 },

            { start: 15000, end: 20000 },

            { start: 10000, end: 15000 },

            { start: 5000, end: 10000 },

            { start: 0, end: 5000 }
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
            name: '计划招生人数',

            type: 'map',

            mapType: 'china',

            roam: false,

            label: {
              normal: {
                show: true // 省份名称
              },

              emphasis: {
                show: true
              }
            },

            data: this.data
            /* data: [
              { name: '北京', value: '100' },

              { name: '天津', value: '200' },

              { name: '上海', value: '200' },

              { name: '重庆', value: '200' },

              { name: '河北', value: '200' },

              { name: '河南', value: '200' },

              { name: '云南', value: '200' },

              { name: '辽宁', value: '200' },

              { name: '黑龙江', value: '200' },

              { name: '湖南', value: '300' },

              { name: '安徽', value: '300' },

              { name: '山东', value: '300' },

              { name: '新疆', value: '300' },

              { name: '江苏', value: '300' },

              { name: '浙江', value: '300' },

              { name: '江西', value: '300' },

              { name: '湖北', value: '300' },

              { name: '广西', value: '300' },

              { name: '甘肃', value: '300' },

              { name: '山西', value: '300' },

              { name: '内蒙古', value: '300' },

              { name: '陕西', value: '400' },

              { name: '吉林', value: '400' },

              { name: '福建', value: '400' },

              { name: '贵州', value: '400' },

              { name: '广东', value: '400' },

              { name: '青海', value: '400' },

              { name: '西藏', value: '400' },

              { name: '四川', value: '400' },

              { name: '宁夏', value: '400' },

              { name: '海南', value: '400' },

              { name: '台湾', value: '400' },

              { name: '香港', value: '400' },

              { name: '澳门', value: '400' }
            ] */
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
