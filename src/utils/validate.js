/**
 * @param value
 * 测试密码是否满足条件，包括四种类型
 */
// 密码校验
export default {
  // 手机号邮箱校验
  checkTellEmail (inputTellOrEmail) {
    const tellTest = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
    const emailTest = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
    if (tellTest.test(inputTellOrEmail)) {
      // 手机号验证通过
      return 1
    } else if (emailTest.test(inputTellOrEmail)) {
      // 邮箱验证通过
      return 2
    } else {
      // 验证失败
      return 0
    }
  },
  // 密码验证
  checkPw (newPw, newSecondPw) {
    let msg = false
    // 校验规则：密码必须包含数字，大小写字母，以及特殊符号。且长度在8-12个字符之间
    const d = /^.*(?=.{8,12})(?=.*\d)(?=.*[A-Za-z]{1,})(?=.*[!@#$%^&*?]).*$/
    if (newPw === '' || newSecondPw === '') {
      // this.$message.error('请输入密码')
      msg = '请输入密码'
      return msg
    } else if (newPw !== newSecondPw) {
      // this.$message.error('两次输入密码不一致')
      msg = '两次输入密码不一致'
      return msg
    } else if (!d.test(newPw) && !d.test(newSecondPw)) {
      // this.$message.error('密码格式不正确')
      msg = '密码格式不正确'
      return msg
    }
    msg = true
    return msg
  },
  // 导航守卫拦截
  judge (userRoleId, path) {
    // console.log(userRoleId, path)
    if (userRoleId === 1) {
      if ((path === '/adminIndex') || (path === '/adminHome') || (path === '/systemMaintenance') || (path === '/messageCenter') || (path === '/userManagement') || (path === '/userList') || (path === '/addUser') || (path.includes('userInfo')) || (path.includes('reviseUser')) || (path.includes('resetUserPassword'))) {
        return false
      } else {
        return true
      }
    } else if (userRoleId === 2) {
      if ((path === '/userHome') || (path === '/userIndex') || (path === '/analysisQuery') || (path === '/dataDisplay') || (path.includes('userCenter'))) {
        return false
      } else {
        return true
      }
    }
  }
}
