<template>
  <div class="top">
    <div class="hot">
      <h4>热门专业top10</h4>
      <div class="echart" id="mycharthost" style="width: 100%;height: 90%;"></div>
    </div>
    <div class="cold">
      <h4>冷门专业top10</h4>
      <div class="echart" id="mychartcold" style="width: 100%;height: 90%;"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      /* eslint-disable */
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 热门Top
    initEchartsHost() {
      // 基本柱状图
      const option = {
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130, 70, 110, 130],
            type: 'bar'
          }
        ],
        color: [
          '#ff8060'
        ]
      };
      const myChart = this.$echarts.init(document.getElementById("mycharthost"));
      myChart.setOption(option);
      // 随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    // 冷门Top
    initEchartsCold() {
      // 基本柱状图
      const option = {
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130, 70, 110, 130],
            type: 'bar'
          }
        ],
        color: [
          '#66CCFF'
        ]
      };
      const myChart = this.$echarts.init(document.getElementById("mychartcold"));
      myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  },
  created () {
  },
  mounted () {
    this.initEchartsHost()
    this.initEchartsCold()
  }
}
</script>
<style lang="scss" scoped>
.top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  // height: 500px;
  >div {
    width: 100%;
    height: 100%;
    position: relative;
    h4 {
      position: absolute;
      top: 20px;
      left: 38%;
    }
  }
}
</style>
