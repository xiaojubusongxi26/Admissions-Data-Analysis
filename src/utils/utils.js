export default {
  // 时间处理 2022-05-20 13:14
  getTime () {
    const d = new Date()
    const Y = d.getFullYear()
    const M = d.getMonth() < 9 ? '0' + (d.getMonth() + 1) : (d.getMonth() + 1)
    const D = d.getDate() < 10 ? '0' + d.getDate() : d.getDate()
    const H = d.getHours() < 10 ? '0' + d.getHours() : d.getHours()
    const Min = d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()
    const S = d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()

    const time = Y + '-' + M + '-' + D + ' ' + H + ':' + Min + ':' + S
    return time
  }
}
