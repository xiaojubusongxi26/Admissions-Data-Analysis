<template>
  <div class="footer">
    <div class="body">
      <div class="info">
        <a>Copyright © 2022 高校查(中国)</a>
        <div class="info-contact">
          <div class="address">
            地址 : 四川省成都市西南航空港经济开发区学府路一段24号
          </div>
          <div class="phone">联系电话 : 023-xxxxxxxx</div>
        </div>
      </div>
      <div class="excess">
        <a>商务咨询</a>
        <el-divider direction="vertical"></el-divider>
        <a>问题反馈</a>
        <el-divider direction="vertical"></el-divider>
        <a>加入我们</a>
        <el-divider direction="vertical"></el-divider>
        <a>使用条款</a>
        <el-divider direction="vertical"></el-divider>
        <a>隐私政策</a>
      </div>
    </div>
    <div class="record">
      <a>川 ICP 备 xxxxxxxxx 号</a>
      <a>川 ICP 证 Xx-xxxxxxxx </a>
      <a>中国互联网违法和不良信息举报中心</a>
      <a>四川互联网违法和不良信息举报中心</a>
      <a>12345政务服务便民热线</a>
      <a>扫黄打非举报</a>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
.footer {
  border-bottom: 1px solid #f1f1f1;

  font-size: 14px;
  padding: 26px;

  .body {
    display: flex;
    justify-content: space-between;

    .info {
      left: 0;
      a {
        display: flex;
        justify-content: flex-start;
        text-decoration: inherit;
        touch-action: manipulation;
        color: inherit;
        text-decoration: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        transition: color 0.3s;
      }

      .info-contact {
        display: flex;
        justify-self: start;

        .phone {
          margin-left: 8px;
        }
      }
    }

    .excess {
      right: 0;
    }
  }

  .record {
    font-size: 10px;
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
  }

  a {
    cursor: pointer;
  }
}
</style>
