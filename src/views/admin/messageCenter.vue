<template>
  <div class="message-center">
    <div class="title">
      <div class="split"></div>
      <h3>{{ $route.name }}</h3>
    </div>
    <div class="message" v-for="(item, index) in message" :key="index">
      <div class="message-user-info">
        <div class="user-info-avatar">
          <img :src="message[0].userAvatar" alt="">
        </div>
        <div class="user-info-username">
          {{ message[0].userName }}
        </div>
        <div class="user-info-time">
          {{ message[0].messageTime }}
        </div>
      </div>
      <div class="message-text">
        {{ message[0].messageText }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      message: [
        {
          userName: '潇白衣',
          userAvatar: require('@/assets/images/default/avatar/头像男三.png'),
          messageText: '红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错',
          messageTime: '2022-05-20 13:15'
        },
        {
          userName: '潇白衣',
          userAvatar: require('@/assets/images/default/avatar/头像男三.png'),
          messageText: '红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错',
          messageTime: '2022-05-20 13:15'
        },
        {
          userName: '潇白衣',
          userAvatar: require('@/assets/images/default/avatar/头像男三.png'),
          messageText: '红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错红泪偷垂，满眼春风百事非。 --采桑子·当时错',
          messageTime: '2022-05-20 13:15'
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
.message-center {
  background: #fefefe;
  box-sizing: border-box;
  border-radius: 4px;
  min-height: 650px;
  box-shadow: 0 4px 8px 0 rgb(189 189 189 / 20%), 0 3px 10px 0 rgb(203 203 203 / 19%);
  margin-bottom: 26px;
  padding-bottom: 36px;
  overflow-x: hidden;
  overflow-y: auto;
  .title{
    box-sizing: border-box;
    padding: 0 36px 0 10px;
    width: 100%;
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #ebebeb;
    background: #ffffff;
    .split {
      width: 5px;
      height: 20px;
      background: #1595d4;
      float: left;
      border-radius: 4px;
      display: inline;
      margin: 20px 8px 20px 0;
      line-height: 60px;
    }
    h3 {
      float: left;
      display: block;
    }
    .record {
      float: right;
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        color: #ffcb3b;
        font-size: 14px;
        font-weight: bolder;
      }
    }
  }
  .message {
    min-height: 180px;
    width: 95%;
    margin: 0 auto;
    background: #f3f3f3;
    padding: 16px 16px 36px;
    box-sizing: border-box;
    border-radius: 8px;
    margin-top: 20px;
    transition: .2s all;
    &:hover{
      background: #eeeeee;
    }
    .message-user-info {
      height: 40px;
      display: flex;
      flex-direction: column;
      position: relative;
      box-sizing: border-box;
      padding-left: 40px;
      text-align: left;
      cursor: pointer;
      .user-info-avatar {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 0;
        img {
          border-radius: 40px;
          width: 40px;
          height: 40px;
        }
      }
      div:not(div:first-child) {
        padding-left: 8px;
      }
      .user-info-username {
        // font-weight: bold;
      }
      .user-info-time {
        font-size: 14px;
      }
    }
    .message-text {
      margin-top: 20px;
      text-align: left;
      padding: 0 20px 0 40px;
      font-size: 14px;
      color: #969696;
    }
  }
}
</style>
