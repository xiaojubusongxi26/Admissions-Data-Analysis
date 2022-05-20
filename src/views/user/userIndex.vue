<template>
  <div class="user-index">
    <div class="head">
      <div class="header-img">
        <h2>高校招生计划数据分析可视化系统</h2>
      </div>
      <div class="system-introduce">
        <p>
          高校查平台，对全国高校的招生计划进行统计分析，利用大数据可视化手段显示其分析结果，旨在帮助企业、学校、家长及各校各类学生，在用人招聘、拟定招生计划、志愿填报、毕业择业就业时可以提供有意义的参考，更大程度的保留和利用人才与资源。
        </p>
      </div>
    </div>
    <div class="new"></div>
    <FunIntroduce></FunIntroduce>
    <ContactUs></ContactUs>
  </div>
</template>

<script>
import FunIntroduce from '@/components/user/home/FunIntroduce.vue'
import ContactUs from '@/components/user/home/ContactUs.vue'
export default {
  components: { FunIntroduce, ContactUs },
  props: {},
  data () {
    return {
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
.user-index {
  background: #ffffff;
  .head {
    .header-img {
      width: 100%;
      height: 360px;
      background: url('~@/assets/images/userIndex/20191171614435325366.jpg') no-repeat;
      background-size: cover;
      h2 {
        height: 360px;
        line-height: 360px;
        color: #ffffff;
        font-size: 36px;
      }
    }
    .system-introduce {
      height: 160px;
      line-height: 30px;
      font-size: 18px;
      box-sizing: border-box;
      padding: 20px 36px;
      p {
        text-indent: 50px;
        text-align: left;
      }
    }
  }
  .new {
    // height: 400px;
  }
}
</style>
