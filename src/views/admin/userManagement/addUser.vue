<template>
  <div class="add-user">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <h3>添加用户</h3>
      <el-form-item label="用户名：" prop="userName">
        <el-input v-model="ruleForm.userName"></el-input>
      </el-form-item>
      <el-form-item label="姓名：" prop="userFullName">
        <el-input v-model="ruleForm.userFullName"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：" prop="userEmail">
        <el-input v-model="ruleForm.userEmail"></el-input>
      </el-form-item>
      <el-form-item label="手机号：" prop="userTell">
        <el-input v-model="ruleForm.userTell"></el-input>
      </el-form-item>
      <el-form-item label="性别：" prop="userSex">
        <el-radio-group v-model="ruleForm.userSex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >添加</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      ruleForm: {
        userName: '',
        userFullName: '',
        userEmail: '',
        userTell: '',
        userSex: '男',
      },
      // 表单校验规则
      rules: {
        userName: [
          { required: true, message: '请输入用户名', trigger: 'change' },
          {
            min: 3,
            max: 5,
            message: '用户名长度在 3 到 5 个字符',
            trigger: 'change',
          },
        ],
        userFullName: [
          { required: true, message: '请输入姓名', trigger: 'change' },
        ],
        userEmail: [
          { required: true, message: '请输入邮箱', trigger: 'change' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'change' },
        ],
        userTell: [
          { required: true, message: '请输入手机号', trigger: 'change' },
          {
            min: 10000000000,
            max: 20000000000,
            type: 'number',
            message: '必须为11位数字',
            trigger: 'change',
            // 检验手机号长度
            transform: (value) =>
              this.$options.filters.formValidateFun(value, 'number'),
          },
        ],
        userSex: [{ required: true, message: '请选择性别', trigger: 'change' }],
      },
    }
  },
  watch: {},
  computed: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.open(formName)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    open(formName) {
      this.$confirm('确认创建用户吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info',
      }).then(() => {
        this.createUser().then(({ data }) => {
          console.log(data)
          this.$message({
            type: 'success',
            message: '创建成功!',
          })
        })
        // 创建成功后清除当前信息
        this.resetForm(formName)
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    async createUser() {
      const data = await this.$axios({
        url: '/register/singleRegister',
        method: 'post',
        data: {
          email: this.ruleForm.userEmail,
          phone: this.ruleForm.userTell,
          username: this.ruleForm.userName,
          name: this.ruleForm.userFullName,
          sex: this.ruleForm.userSex === '男' ? 0 : 1,
          password: this.$randomCreatePassword.createPassword(),
        },
      })

      return data
    },
  },
  created() {},
  mounted() {},
}
</script>
<style lang="scss" scoped>
.add-user {
  width: 100%;
  box-sizing: border-box;
  padding: 56px 56px;
  display: flex;
  justify-content: center;
  .el-form {
    width: 500px;
    h3 {
      margin: 16px 0 66px;
      font-size: 36px;
      color: #1595d4;
    }
    .el-form-item {
      margin-bottom: 36px;
    }
  }
}
.el-button--primary {
  background-color: #1595d4;
  border-color: #1595d4;
}
.el-button:focus,
.el-button:hover {
  color: #1595d4;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
</style>
