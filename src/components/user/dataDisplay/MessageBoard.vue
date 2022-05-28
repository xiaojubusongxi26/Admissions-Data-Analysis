<template>
  <div class="message-board">
    <div class="message-show">
      <div class="message-bar" @mousewheel.stop v-for="(item, index) in messageList" :key="index">
        <div class="message-bar-avatar">
          <img :src="item.avatar === null ? avatar : item.avatar" alt="">
        </div>
        <div class="message-body">
          <div class="message-name">
            <span>
              {{ item.username }}
            </span>
          </div>
          <div class="message-text">
            {{ item.content }}
          </div>
          <div class="message-time">
            <span>
              {{ item.createTime }}
            </span>
          </div>
        </div>
      </div>
      <el-empty description="暂无消息" v-if="messageList.length === 0"></el-empty>
    </div>
    <div class="speak">
      <div class="speak-input">
        <input type="text" v-model="content" @keydown.enter="httpSend()">
      </div>
    </div>
  </div>
</template>

<script>
import { Client } from '@stomp/stompjs'
export default {
  components: {},
  props: {},
  data () {
    return {
      content: '',
      messageList: [],
      avatar: require('@/assets/images/default/avatar/defaultSecrecyImg.png')
    }
  },
  watch: {},
  computed: {},
  methods: {
    httpSend() {
      this.$axios.post('/gxc/messagetb/send', {
        content: this.content
      }).then((res) => {
        this.content = ''
      })
    },
    connectWebSocket() {
      this.client = new Client({
        brokerURL: 'ws://localhost:9090/api/socket',
        connectHeaders: {
          login: 'user',
          passcode: 'password',
          password: 'password',
        },
        // debug: function (e) {
        //   console.log('debug:' + e);
        // },
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        onConnect: this.websocketonopen,
      })

      this.client.onStompError = function (frame) {
        // Will be invoked in case of error encountered at Broker
        // Bad login/passcode typically will cause an error
        // Complaint brokers will set `message` header with a brief message. Body may contain details.
        // Compliant brokers will terminate the connection after any error
        console.log('Broker reported error: ' + frame.headers.message)
        console.log('Additional details: ' + frame.body)
      }
      this.client.activate()
    },
    websocketsend() {
      const data = { client: 'hello' }
      this.client.publish({
        destination: '/app/greeting',
        body: JSON.stringify(data),
        skipContentLengthHeader: true,
        headers: {
          login: 'user',
          passcode: 'password',
          password: 'password',
        },
      })
    },
    websocketonopen(frame) {
      // 连接建立之后执行订阅，多种订阅
      console.log('onopen: ' + frame)
      this.client.subscribe('/queue/temp', (message) => {
        // called when the client receives a STOMP message from the server
        // if (message.body) {
        //     alert('got message with body ' + message.body);
        // } else {
        //     alert('got empty message');
        // }
        console.log('mysubscribe: ' + message.body)
        console.log(JSON.parse(message.body))
        this.messageList.push(JSON.parse(message.body))
      })
    },
    websocketclose() {
      this.client.deactivate()
    },
  },
  created () {
    // 创建websocket连接
    this.connectWebSocket()
  },
  beforeDestroy () {
    // 关闭websocket连接
    // this.websocketclose()
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
.message-board {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .message-show {
    flex: 1;
    background: #fdfdfd;
    padding: 0 16px;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    .message-bar {
      min-height: 100px;
      width: 100%;
      display: flex;
      box-sizing: border-box;
      padding: 12px 0;
      .message-bar-avatar {
        img {
          height: 40px;
          width: 40px;
          border-radius: 60px;
          object-fit: cover;
        }
      }
      .message-body {
        max-width: 80%;
        padding-left: 16px;
        span {
          float: left;
          font-size: 14px;
        }
        .message-name {
          height: 26px;
          line-height: 26px;
        }
        .message-text {
          width: 100%;
          background: #e6e6e6;
          border-radius: 16px;
          padding: 16px;
          font-size: 14px;
          text-align: left;
          position: relative;
          margin-bottom: 8px;
          box-sizing: border-box;
        }
        .message-text::before {
          content: "";
          top: 0px;
          left: 0px;
          position: absolute;
          background: #e6e6e6;
          width: 16px;
          height: 16px;
          transform: rotate(90deg);
        }
        .message-time {
          span {
            color: #8f8f8f;
          }
        }
      }
    }
  }
  .speak {
    height: 60px;
    width: 100%;
    background: #f8f8f8;
    box-sizing: border-box;
    border-top: 1px solid #d5d5d5;
    padding: 15px 36px;
    input {
      border: none;
      width: 100%;
      height: 30px;
      background: #f0f0f0;
      padding: 5px 15px;
      box-sizing: border-box;
      outline: none;
      border-radius: 6px;
      transition: .2s all;
      font-size: 14px;
      border: 2px solid #f0f0f0;
      &:focus {
        border: 2px solid #1595d4;
      }
    }
  }
}
.el-empty {
  height: 100%;
}
</style>
