<template>
  <div class="data-show">
    <div class="title">
      <div class="split"></div>
      <h3>{{ $route.name }}</h3>
    </div>
    <div class="show">
      <div id="user_state"></div>
      <div id="user_online"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      logoutCount: 0,
      loginCount: 0,
      enableCount: 0,
      disableCount: 0,
    }
  },
  watch: {},
  computed: {},
  methods: {
    init() {
      this.getData().then(({ data }) => {
        Object.keys(data).forEach((k, v) => {
          if (k === 'status_1') {
            this.loginCount += v
            this.enableCount += v
          } else if (k === 'status_0') {
            this.logoutCount += v
            this.enableCount += v
          } else {
            this.logoutCount += v
            this.disableCount += v
          }
        })
        // 获取当前日期
        const d = new Date()
        const today =
          d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        this.$store.dispatch('updated_Today', today)
        // 展示数据
        this.echartsInit()
      })
    },
    // 初始化echarts
    echartsInit() {
      this.userStateInit()
      this.userOnlineInit()
    },
    userStateInit() {
      // 用户权限状态
      this.$echarts.init(document.getElementById('user_state')).setOption({
        color: ['#fac858', '#73c1df'],
        title: {
          text: '用户权限状态',
          subtext: this.$store.state.today,
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: '用户权限状态',
            type: 'pie',
            radius: '50%',
            data: [
              { value: this.enableCount, name: '启用中' },
              { value: this.disableCount, name: '已注销' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      })
    },
    userOnlineInit() {
      // 用户在线状态
      this.$echarts.init(document.getElementById('user_online')).setOption({
        color: ['#fbab7e', '#a8c1ee'],
        title: {
          text: '用户在线状态',
          subtext: this.$store.state.today,
          left: 'center',
        },
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
        },
        series: [
          {
            name: '用户在线状态',
            type: 'pie',
            radius: '50%',
            data: [
              { value: this.loginCount, name: '在线' },
              { value: this.logoutCount, name: '离线' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      })
    },
    async getData() {
      const data = await this.$axios({
        url: 'gxc/usertb/allStatus',
        method: 'post',
      })

      return data
    },
  },
  created() {
    this.init()
  },
  mounted() {},
}
</script>
<style lang="scss" scoped>
.data-show {
  // margin-top: 16px;
  width: 100%;
  height: 560px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(189, 189, 189, 0.2),
    0 3px 10px 0 rgba(203, 203, 203, 0.19);
  .title {
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
      padding: 0;
      line-height: 60px;
    }
    h3 {
      float: left;
      display: inline-block;
    }
  }
  .show {
    width: 100%;
    height: 500px;
    background: #ffffff;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    #user_state {
      width: 50%;
      height: 500px;
    }
    #user_online {
      width: 50%;
      height: 500px;
    }
    div {
      box-sizing: border-box;
      padding: 66px;
    }
  }
}
</style>
