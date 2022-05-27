<template>
  <div class="message-board">
    <div class="message-show">
      <div class="message-bar" @mousewheel.stop v-for="(item, index) in messageList" :key="index">
        <div class="message-bar-avatar">
          <img :src="item.userAvatar" alt="">
        </div>
        <div class="message-body">
          <div class="message-name">
            <span>
              {{ item.userName }}
            </span>
          </div>
          <div class="message-text">
            {{ item.messageText }}
          </div>
          <div class="message-time">
            <span>
              {{ item.messageTime }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="speak">
      <div class="speak-input">
        <input type="text">
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
      messageList: [
        {
          userName: '李长生',
          messageText: '余情悦其淑美兮，心振荡而不怡。无良媒以接欢兮，托微波而通辞。愿诚素之先达兮，解玉佩以要之。嗟佳人之信修兮，羌习礼而明诗。抗琼珶以和予兮，指潜渊而为期。执眷眷之款实兮，惧斯灵之我欺。感交甫之弃言兮，怅犹豫而狐疑。收和颜而静志兮，申礼防以自持。于是洛灵感焉，徙倚彷徨。神光离合，乍阴乍阳。竦轻躯以鹤立，若将飞而未翔。践椒涂之郁烈，步蘅薄而流芳。超长吟以永慕兮，声哀厉而弥长。尔乃众灵杂沓，命俦啸侣。或戏清流，或翔神渚，或采明珠，或拾翠羽。从南湘之二妃，携汉滨之游女。叹匏瓜之无匹兮，咏牵牛之独处。扬轻袿之猗靡兮，翳修袖以延伫。体迅飞凫，飘忽若神。凌波微步，罗袜生尘。动无常则，若危若安；进止难期，若往若还。转眄流精，光润玉颜。含辞未吐，气若幽兰。华容婀娜，令我忘餐。',
          messageTime: '2022/05/20 13:14',
          userAvatar: require('@/assets/images/default/avatar/默认头像-男.png')
        },
        {
          userName: '李长生',
          messageText: '云母屏风烛影深，长河渐落晓星沉。',
          messageTime: '2022/05/20 13:14',
          userAvatar: require('@/assets/images/default/avatar/默认头像-男.png')
        },
        {
          userName: '李长生',
          messageText: '万事到头都是梦，休休。明日黄花蝶也愁。',
          messageTime: '2022/05/20 13:14',
          userAvatar: require('@/assets/images/default/avatar/默认头像-男.png')
        },
        {
          userName: '李长生',
          messageText: '钟表走着同样的节拍，夜晚缀着同一簇星星。',
          messageTime: '2022/05/20 13:14',
          userAvatar: require('@/assets/images/default/avatar/默认头像-男.png')
        }
      ]
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 建立Websocket连接
    connectWebSocket() {
      this.client = new Client({
        brokerURL: 'ws://192.168.3.2:9090/api/gxc',
        /* connectHeaders: {
          login: 'user',
          passcode: 'password',
          password: 'password',
        }, */
        debug: function (e) {
          console.log('debug:' + e)
        },
        reconnectDelay: 5000,
        heartbeatIncoming: 4000,
        heartbeatOutgoing: 4000,
        onConnect: this.websocketonopen,
      })

      this.client.onStompError = function (frame) {
        // 在 Broker 遇到错误时将被调用
        // 错误的登录名/密码通常会导致错误
        // 投诉经纪人将设置带有简短消息的“消息”标头。 正文可能包含详细信息。
        // 出现任何错误后，合规代理将终止连接
        console.log('Broker reported error: ' + frame.headers.message)
        console.log('Additional details: ' + frame.body)
      }
      this.client.activate()
    },
  },
  created () {},
  mounted () {}
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
</style>
