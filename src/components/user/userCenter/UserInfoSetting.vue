<template>
  <div>
    <div class="userinfo-panel-show">
      <div class="userinfo-panel-show-title">
        <span>用户名：</span>
        </div>
      <div class="userinfo-panel-show-info">
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="changeUserInfo.username"
        ></el-input>
      </div>
    </div>
    <div class="userinfo-panel-show">
      <div class="userinfo-panel-show-title">
        <span>姓名：</span>
      </div>
      <div class="userinfo-panel-show-info">
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="changeUserInfo.name"
        ></el-input>
      </div>
    </div>
    <div class="userinfo-panel-show">
      <div class="userinfo-panel-show-title">
        <span>邮箱：</span>
      </div>
      <div class="userinfo-panel-show-info">
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="changeUserInfo.email"
        ></el-input>
      </div>
    </div>
    <div class="userinfo-panel-show">
      <div class="userinfo-panel-show-title">
        <span>手机号：</span>
      </div>
      <div class="userinfo-panel-show-info">
        <el-input
          type="text"
          placeholder="请输入内容"
          v-model="changeUserInfo.phone"
        ></el-input>
      </div>
    </div>
    <div class="userinfo-panel-show">
      <div class="userinfo-panel-show-title">
        <span>性别：</span>
      </div>
      <div class="userinfo-panel-show-info">
        <el-radio v-model="changeUserInfo.sex" :label="0">男</el-radio>
        <el-radio v-model="changeUserInfo.sex" :label="1">女</el-radio>
        <el-radio v-model="changeUserInfo.sex" :label="-1">保密</el-radio>
      </div>
    </div>
    <div class="userinfo-panel-show">
      <div class="userinfo-panel-show-title">
        <span>省份：</span>
      </div>
      <div class="userinfo-panel-show-info">
        <el-select v-model="changeUserInfo.province" clearable  placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="userinfo-panel-show">
      <div class="userinfo-panel-show-title">
        <span>分数：</span>
      </div>
      <div class="userinfo-panel-show-info">
        <el-input
          type="text"
          placeholder="未设置"
          v-model="changeUserInfo.score"
        ></el-input>
      </div>
    </div>
    <div class="btn">
      <el-button type="primary" @click="saveUserInfo()">保存信息</el-button>
      <el-button type="primary" @click="Logout()">退出登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data () {
    return {
      // 默认头像
      defaultAvatar: require('@/assets/images/default/avatar/头像男三.png'),
      userInfo: this.$store.state.userInfo,
      // 绑定的用户对象
      changeUserInfo: {},
      // 省份
      options: [{
        value: '北京',
        label: '北京'
      }, {
        value: '天津',
        label: '天津'
      }, {
        value: '上海',
        label: '上海'
      }, {
        value: '重庆',
        label: '重庆'
      }, {
        value: '河北',
        label: '河北'
      }, {
        value: '河南',
        label: '河南'
      }, {
        value: '云南',
        label: '云南'
      }, {
        value: '辽宁',
        label: '辽宁'
      }, {
        value: '黑龙江',
        label: '黑龙江'
      }, {
        value: '湖南',
        label: '湖南'
      }, {
        value: '安徽',
        label: '安徽'
      }, {
        value: '山东',
        label: '山东'
      }, {
        value: '新疆',
        label: '新疆'
      }, {
        value: '江苏',
        label: '江苏'
      }, {
        value: '浙江',
        label: '浙江'
      }, {
        value: '江西',
        label: '江西'
      }, {
        value: '湖北',
        label: '湖北'
      }, {
        value: '广西',
        label: '广西'
      }, {
        value: '甘肃',
        label: '甘肃'
      }, {
        value: '山西',
        label: '山西'
      }, {
        value: '内蒙古',
        label: '内蒙古'
      }, {
        value: '陕西',
        label: '陕西'
      }, {
        value: '吉林',
        label: '吉林'
      }, {
        value: '福建',
        label: '福建'
      }, {
        value: '贵州',
        label: '贵州'
      }, {
        value: '广东',
        label: '广东'
      }, {
        value: '青海',
        label: '青海'
      }, {
        value: '西藏',
        label: '西藏'
      }, {
        value: '四川',
        label: '四川'
      }, {
        value: '宁夏',
        label: '宁夏'
      }, {
        value: '海南',
        label: '海南'
      }, {
        value: '台湾',
        label: '台湾'
      }, {
        value: '香港',
        label: '香港'
      }, {
        value: '澳门',
        label: '澳门'
      }],
    }
  },
  watch: {},
  computed: {},
  methods: {
    // 保存信息
    saveUserInfo () {
      if (!this.verifyInput()) {
        return 0
      }
      this.$axios({
        method: 'post',
        url: '/gxc/usertb/updateUserById',
        data: this.changeUserInfo
      }).then(res => {
        if (res.data.code === 0) {
          this.$message.success('修改成功')
          this.$store.dispatch('update_userInfo', res.data.curInfo)
        }
      })
      // this.$store.dispatch('update_userInfo', JSON.stringify(res.data))
    },
    // 校验输入
    verifyInput () {
      if (this.changeUserInfo.username === '') {
        this.$message.warning('请输入用户名')
        return 0
      } else if (this.changeUserInfo.name === '') {
        this.$message.warning('请输入姓名')
        return 0
      } else if (this.changeUserInfo.username.length > 20) {
        this.$message.warning('用户名长度为20字符以内')
        return 0
      } else if (this.changeUserInfo.name.length > 10) {
        this.$message.warning('姓名长度为10字符以内')
        return 0
      } else if (this.$validate.checkTellEmail(this.changeUserInfo.email) !== 2) {
        this.$message.warning('邮箱格式有误')
        return 0
      } else if (this.$validate.checkTellEmail(this.changeUserInfo.phone) !== 1) {
        this.$message.warning('手机号格式有误')
        return 0
      } else if (this.changeUserInfo.sex === '') {
        this.$message.warning('请选择性别')
        return 0
      } else {
        return 1
      }
    },
    // 管理员退出登录
    Logout () {
      this.$store.commit('$_removeStorage')
      this.$router.push('/login')
    },
    // 获取用户个人信息，保存到store
    getUerInfoById () {
      this.$axios({
        method: 'post',
        url: '/gxc/usertb/info/' + this.$store.getters.getUserId,
      }).then(res => {
        // console.log(res.data)
        this.$store.dispatch('update_userInfo', res.data.user)
        this.userInfo = this.$store.state.userInfo
        this.changeUserInfo = JSON.parse(JSON.stringify(this.userInfo))
      })
    }
  },
  created () {
    this.getUerInfoById()
  },
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
.userinfo-panel-show {
  display: flex;
  height: 60px;
  line-height: 60px;
  cursor: default;
  .userinfo-panel-show-title {
    flex: 3;
    span {
      float: right;
    }
  }
  .userinfo-panel-show-info {
    flex: 7;
    padding-left: 26px;
    span {
      float: left;
      color: #666666;
    }
    .el-input {
      width: 260px;
      float: left;
    }
    .el-radio {
      float: left;
      height: 60px;
      display: flex;
      align-items: center;
    }
    .el-select {
      float: left;
      width: 260px;
    }
  }
}
.btn {
  margin-top: 24px;
}
</style>
