<template>
  <div class="enrollment-plan">
    <el-row class="tac">
      <el-col :span="12">
        <h5>各省招生计划</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          >
          <el-menu-item v-for="(item, index) in provinceEnrollmentPlan" :key="index" @click="goPlan(index)">
            <i class="el-icon-document"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      provinceEnrollmentPlan: [
        {
          name: '北京',
          planUrl: 'https://gaokao.eol.cn/bei_jing/dongtai/202111/t20211101_2170224.shtml'
        },
        {
          name: '天津',
          planUrl: 'https://gaokao.eol.cn/tian_jin/dongtai/202203/t20220301_2212052.shtml'
        },
        {
          name: '重庆',
          planUrl: 'https://gaokao.eol.cn/chong_qing/dongtai/202204/t20220413_2220137.shtml'
        },
        {
          name: '河北',
          planUrl: 'https://gaokao.eol.cn/he_bei/dongtai/202110/t20211020_2165872.shtml'
        },
        {
          name: '河南',
          planUrl: 'https://gaokao.eol.cn/he_nan/dongtai/202204/t20220429_2223050.shtml'
        },
        {
          name: '辽宁',
          planUrl: 'https://gaokao.eol.cn/liao_ning/dongtai/202203/t20220323_2216733.shtml'
        },
        {
          name: '山东',
          planUrl: 'https://gaokao.eol.cn/shan_dong/dongtai/202204/t20220420_2221410.shtml'
        },
        {
          name: '新疆',
          planUrl: 'https://gaokao.eol.cn/xin_jiang/dongtai/202205/t20220511_2224503.shtml'
        },
        {
          name: '江苏',
          planUrl: 'https://gaokao.eol.cn/jiang_su/dongtai/202204/t20220420_2221396.shtml'
        },
        {
          name: '浙江',
          planUrl: 'https://gaokao.eol.cn/zhe_jiang/dongtai/202204/t20220429_2223058.shtml'
        },
        {
          name: '江西',
          planUrl: 'https://gaokao.eol.cn/jiang_xi/dongtai/202205/t20220509_2224161.shtml'
        },
        {
          name: '广西',
          planUrl: 'https://gaokao.eol.cn/guang_xi/dongtai/202202/t20220214_2208044.shtml'
        },
        {
          name: '山西',
          planUrl: 'https://gaokao.eol.cn/shan_xi/dongtai/202110/t20211029_2169704.shtml'
        },
        {
          name: '西藏',
          planUrl: 'https://gaokao.eol.cn/xi_zang/dongtai/202204/t20220422_2221835.shtml'
        },
        {
          name: '四川',
          planUrl: 'https://gaokao.eol.cn/si_chuan/dongtai/202205/t20220510_2224349.shtml?'
        },
        {
          name: '黑龙江',
          planUrl: 'https://gaokao.eol.cn/hei_long_jiang/dongtai/202204/t20220408_2219337.shtml'
        },
        {
          name: '上海',
          planUrl: ''
        },
        {
          name: '云南',
          planUrl: ''
        },
        {
          name: '湖南',
          planUrl: ''
        },
        {
          name: '安徽',
          planUrl: ''
        },
        {
          name: '湖北',
          planUrl: ''
        },
        {
          name: '甘肃',
          planUrl: ''
        },
        {
          name: '内蒙古',
          planUrl: ''
        },
        {
          name: '陕西',
          planUrl: ''
        },
        {
          name: '吉林',
          planUrl: ''
        },
        {
          name: '福建',
          planUrl: ''
        },
        {
          name: '贵州',
          planUrl: ''
        },
        {
          name: '广东',
          planUrl: ''
        },
        {
          name: '青海',
          planUrl: ''
        },
        {
          name: '宁夏',
          planUrl: ''
        },
        {
          name: '海南',
          planUrl: ''
        },
        {
          name: '台湾',
          planUrl: ''
        },
        {
          name: '香港',
          planUrl: ''
        },
        {
          name: '澳门',
          planUrl: ''
        }
      ]
    }
  },
  watch: {},
  computed: {},
  methods: {
    goPlan (index) {
      // 跳转到对应招生计划
      window.open(this.provinceEnrollmentPlan[index].planUrl)
    }
  },
  created () {},
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
.enrollment-plan {
  box-sizing: border-box;
  height: 580px;
  .el-row {
    overflow: hidden;
    height: 100%;
    .el-col {
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      h5 {
        margin: 16px 0;
        font-size: 14px;
        border-bottom: 1px solid #cccccc;
        height: 30px;
        line-height: 30px;
      }
      ul {
        border: none;
      }
    }
  }
}
// 滚动条宽度
div::-webkit-scrollbar {
  width: 6px;
}
// 滚动条轨道
div::-webkit-scrollbar-track {
  background: rgb(244, 244, 244);
  border-radius: 2px;
}
// 小滑块
div::-webkit-scrollbar-thumb {
  background: #40a0ff49;
  border-radius: 10px;
}
div::-webkit-scrollbar-thumb:hover {
  background: #1595d4;
}
</style>
