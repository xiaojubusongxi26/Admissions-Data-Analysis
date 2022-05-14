<template>
  <div class="data-show">
    <div id="user_state">
    </div>
    <div id="user_online">
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {
  // 初始化echarts
    echartsInit () {
      this.userStateInit()
      this.userOnlineInit()
    },
    userStateInit () {
      // 用户权限状态
      this.$echarts.init(document.getElementById('user_state')).setOption({
        color: [
          '#fac858',
          '#73c1df'
        ],
        title: {
          text: '用户权限状态',
          subtext: this.$store.state.today,
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '用户权限状态',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: '启用中' },
              { value: 735, name: '已注销' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    },
    userOnlineInit () {
      // 用户在线状态
      this.$echarts.init(document.getElementById('user_online')).setOption({
        color: [
          '#fbab7e',
          '#a8c1ee'
        ],
        title: {
          text: '用户在线状态',
          subtext: this.$store.state.today,
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '用户在线状态',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 260, name: '在线' },
              { value: 735, name: '离线' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      })
    }
  },
  created () {},
  mounted () {
    // 获取当前日期
    const d = new Date()
    const today = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + (d.getDate())
    this.$store.dispatch('updated_Today', today)
    // 展示数据
    this.echartsInit()
  }
}
</script>
<style lang="scss" scoped>
.data-show {
  // margin-top: 16px;
  width: 100%;
  height: 500px;
  background: #ffffff;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(189, 189, 189, 0.2), 0 3px 10px 0 rgba(203, 203, 203, 0.19);
  display: flex;
  div {
    box-sizing: border-box;
    padding: 66px;
  }
  #user_state {
    width: 50%;
  }
  #user_online {
    width: 50%;
  }
}
</style>
