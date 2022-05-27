<template>
  <div class="hello">
    <!-- 以下为 websocket + stomp -->
    <button @click="connectWebSocket">连接</button><br />
    <button @click="websocketsend">发送</button>
    <button @click="websocketclose">结束</button><br />

    <!-- 以下为http请求 -->
    <button @click="login">登录</button><br />
    <button @click="logstatus">登录状态</button><br />
    <button @click="logout">注销</button><br />
    <!--    <router-link to="/about/child">child</router-link>-->
    <!--    <router-view/>-->
  </div>
</template>

<script>
import request from '../utils/reqeust'
import { Client } from '@stomp/stompjs'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      client: null,
    }
  },

  methods: {
    connectWebSocket() {
      this.client = new Client({
        brokerURL: 'ws://localhost:8080/api/quiz',
        connectHeaders: {
          login: 'user',
          passcode: 'password',
          password: 'password',
        },
        debug: function (e) {
          console.log('debug:' + e)
        },
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
      })
      this.client.publish({
        destination: '/app/greeting2',
        body: JSON.stringify(data),
        skipContentLengthHeader: true,
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
      })
      this.client.subscribe('/topic/greeting', (message) => {
        console.log('mysubscribe' + message)
      })
    },
    login() {
      request.post('/app/login').then((response) => {
        console.log(response)
      })
    },
    logout() {
      request.post('/app/logout').then((response) => {
        console.log(response)
      })
    },
    logstatus() {
      request.get('/app/log-status').then((response) => {
        console.log(response)
      })
    },
    websocketclose() {
      this.client.deactivate()
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
