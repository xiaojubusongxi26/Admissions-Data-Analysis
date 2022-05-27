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
      hostXData: [],
      hostYData: [],
      coldXData: [],
      coldYData: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 获取热门top数据
    GetHotList () {
      this.$axios({
        method: 'post',
        url: '/gxc/hotmajortb/list',
      }).then((res) => {
        const list = res.data.page.list
        for (const i in list) {
          for (const j in list[i]) {
            if (j === 'majorProfess') {
              this.hostXData.push(list[i][j])
            }
            if (j === 'majorPlan') {
              this.hostYData.push(list[i][j])
            }
          }
        }
        this.initEchartsHost()
      })
    },
    // 热门Top初始化
    initEchartsHost () {
      // 基本柱状图
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.hostXData,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '计划招生数',
            type: 'bar',
            barWidth: '60%',
            data: this.hostYData
          }
        ],
        color: [
          '#5572ca'
        ]
      };
      const myChart = this.$echarts.init(document.getElementById("mycharthost"));
      myChart.setOption(option);
      // 随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    // 获取冷门top数据
    GetColdList () {
      this.$axios({
        method: 'post',
        url: '/gxc/coldmajortb/list',
      }).then((res) => {
        const list = res.data.page.list
        for (const i in list) {
          for (const j in list[i]) {
            if (j === 'majorProfess') {
              this.coldXData.push(list[i][j])
            }
            if (j === 'majorPlan') {
              this.coldYData.push(list[i][j])
            }
          }
        }
        this.initEchartsCold()
      })
    },
    // 冷门Top初始化
    initEchartsCold () {
      // 基本柱状图
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.coldXData,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '计划招生数',
            type: 'bar',
            barWidth: '60%',
            data: this.coldYData
          }
        ],
        color: [
          '#90cd74'
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
    this.GetHotList ()
    this.GetColdList ()
  },
  mounted () {
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
