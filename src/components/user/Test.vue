<template>
  <div id="main" class="chinaMap">4854845454</div>
</template>

<script>
import '@/assets/js/china'

export default {
  data () {
    return {
      mydata: [],
      optionMap: {}
    }
  },
  mounted () {
    this.initChina()
  },
  methods: {
    randomData () {
      return Math.round(Math.random() * 500)
    },
    initChina () {
      this.mydata = [
        { name: '北京', value: '100' },
        { name: '天津', value: this.randomData() },
        { name: '上海', value: this.randomData() },
        { name: '重庆', value: this.randomData() },
        { name: '河北', value: this.randomData() },
        { name: '河南', value: this.randomData() },
        { name: '云南', value: this.randomData() },
        { name: '辽宁', value: this.randomData() },
        { name: '黑龙江', value: this.randomData() },
        { name: '湖南', value: this.randomData() },
        { name: '安徽', value: this.randomData() },
        { name: '山东', value: this.randomData() },
        { name: '新疆', value: this.randomData() },
        { name: '江苏', value: this.randomData() },
        { name: '浙江', value: this.randomData() },
        { name: '江西', value: this.randomData() },
        { name: '湖北', value: this.randomData() },
        { name: '广西', value: this.randomData() },
        { name: '甘肃', value: this.randomData() },
        { name: '山西', value: this.randomData() },
        { name: '内蒙古', value: this.randomData() },
        { name: '陕西', value: this.randomData() },
        { name: '吉林', value: this.randomData() },
        { name: '福建', value: this.randomData() },
        { name: '贵州', value: this.randomData() },
        { name: '广东', value: this.randomData() },
        { name: '青海', value: this.randomData() },
        { name: '西藏', value: this.randomData() },
        { name: '四川', value: this.randomData() },
        { name: '宁夏', value: this.randomData() },
        { name: '海南', value: this.randomData() },
        { name: '台湾', value: this.randomData() },
        { name: '香港', value: this.randomData() },
        { name: '澳门', value: this.randomData() }
      ]

      this.optionMap = {
        backgroundColor: '#FFFFFF',
        title: {
          text: '全国地图大数据',
          subtext: '',
          x: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        // 左侧小导航图标
        visualMap: {
          show: true,
          x: 'left',
          y: 'center',
          splitList: [
            { start: 500, end: 600 },
            { start: 400, end: 500 },
            { start: 300, end: 400 },
            { start: 200, end: 300 },
            { start: 100, end: 200 },
            { start: 0, end: 100 }
          ],
          color: [
            '#5470c6',
            '#91cc75',
            '#fac858',
            '#ee6666',
            '#73c0de',
            '#fee3c9'
          ]
        },

        // 配置属性
        series: [
          {
            name: '数据',
            type: 'map',
            mapType: 'china',
            roam: true,
            label: {
              normal: {
                show: true // 省份名称
              },
              emphasis: {
                show: true
              }
            },
            data: this.mydata // 数据
          }
        ]
      }
      // 初始化echarts实例
      this.$echarts.init(document.getElementById('main')).setOption(this.optionMap)
    }
  }
}
</script>

<style lang='scss' scoped>
.chinaMap{
  width: 600px;
  height: 600px;
  margin: 0 auto;
}
</style>>
