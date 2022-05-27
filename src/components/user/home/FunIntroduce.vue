<template>
  <div class="fuc">
    <h1>
      <svg t="1652977466880" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5784" width="40" height="30"><path d="M249.344 291.328L301.568 343.04l-205.824 205.824L43.52 497.152l205.824-205.824z" fill="#2B85FB" p-id="5785"></path><path d="M43.52 497.664l51.712-51.712 205.824 205.824-51.712 52.224L43.52 497.664z m673.792 205.824L665.6 651.776l205.824-205.824 52.224 51.712-206.336 205.824z" fill="#2B85FB" p-id="5786"></path><path d="M923.648 497.152l-51.712 51.712L665.6 343.04l51.712-52.224 206.336 206.336zM619.52 135.68l26.112 26.112-361.984 361.984-26.112-26.112L619.52 135.68z" fill="#2B85FB" p-id="5787"></path><path d="M437.248 626.176l-26.112 26.112-154.112-154.624 26.112-26.112 154.112 154.624z" fill="#2B85FB" p-id="5788"></path><path d="M489.472 523.264l26.112 26.112-102.912 102.912-26.112-26.112 102.912-102.912z m168.448-334.848c-35.328 0-64.512-28.672-64.512-63.488 0-35.328 28.672-63.488 64.512-63.488 35.328 0 64.512 28.672 64.512 63.488s-29.184 63.488-64.512 63.488z m0-91.136c-15.36 0-27.648 12.288-27.648 27.136s12.288 27.136 27.648 27.136 27.648-12.288 27.648-27.136-12.8-27.136-27.648-27.136zM347.136 859.648l-26.112-26.112 361.984-361.984 26.112 26.112-361.984 361.984z" fill="#2B85FB" p-id="5789"></path><path d="M528.896 369.152l26.112-26.112 154.624 154.624-26.112 26.112-154.624-154.624z" fill="#2B85FB" p-id="5790"></path><path d="M477.184 472.064l-26.112-26.112L553.984 343.04l26.112 26.112-102.912 102.912z m-168.448 335.36c35.328 0 64.512 28.672 64.512 63.488 0 35.328-28.672 63.488-64.512 63.488-35.328 0-64.512-28.672-64.512-63.488 0.512-34.816 29.184-63.488 64.512-63.488z m0 91.136c15.36 0 27.648-12.288 27.648-27.136s-12.288-27.136-27.648-27.136-27.648 12.288-27.648 27.136 12.8 27.136 27.648 27.136z" fill="#2B85FB" p-id="5791"></path></svg>
      主要服务
    </h1>
    <a class="fuc-panel" :href="item.href" v-for="(item, index) in panelData" :key="index">
      <div class="wrap"></div>
      <img :src="item.imgUrl" alt="">
      <div class="text">
        <h2>{{ item.title }}</h2>
        <p>{{ item.introduce }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      panelData: [
        {
          href: '/analysisQuery',
          imgUrl: require('@/assets/images/userIndex/funcIntroduce/招生信息.jpeg'),
          title: '高校招生信息查询',
          introduce: '获取最新高校、专业招生信息'
        },
        {
          href: '/dataDisplay',
          imgUrl: require('@/assets/images/userIndex/funcIntroduce/招生计划.png'),
          title: '全国招生计划展示图',
          introduce: '全国各省份的招生信息以及计划招生人数数据图'
        },
        {
          href: '/dataDisplay',
          imgUrl: require('@/assets/images/userIndex/funcIntroduce/院校推荐.jpg'),
          title: '院校推荐、专业TOP',
          introduce: '最热/冷门Top10，最热专业院校推荐'
        },
        {
          href: '/dataDisplay',
          imgUrl: require('@/assets/images/userIndex/funcIntroduce/留言面板.jpg'),
          title: '留言面板',
          introduce: '和同龄的他们一起交流'
        }
      ]
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
a {
  text-decoration: none;
}
.fuc {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  background: #fdfdfd;
  h1 {
    width: 100%;
    background: #ffffff;
    font-size: 36px;
    height: 136px;
    line-height: 136px;
  }
  .fuc-panel {
    height: 500px;
    width: 100%;
    display: flex;
    margin-bottom: 72px;
    overflow: hidden;
    position: relative;
    background: #f3f3f3;
    box-shadow: 8px 0px 0px 0 rgb(189 189 189 / 20%), -8px 0px 12px 0 rgb(203 203 203 / 19%);
    &:hover {
      .wrap {
        background: rgba(0, 0, 0, 0);
      }
      img {
        transform: scale(1.1);
      }
    }
    .wrap {
      width: 900px;
      height: 500px;
      float: left;
      position: absolute;
      left: 0;
      background: rgba(0, 0, 0, 0.3);
      transition: .3s all;
      z-index: 1;
    }
    img {
      transition: .5s all;
      width: 900px;
      object-fit: cover;
    }
    .text {
      z-index: 1;
      background: #ffffff;
      flex: 1;
      border: 1px solid #f3f3f3;
      border-left: none;
      border-right: none;
      color: #000000;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      h2 {
        height: 50px;
      }
    }
  }
}
</style>
