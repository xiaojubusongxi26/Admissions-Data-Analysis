/**
 * @param value
 * 测试密码是否满足条件，包括四种类型
 */
export function validPassword (value) {
  const num = /^.*[0-9]+.*/
  const low = /^.*[a-z]+.*/
  const up = /^.*[A-Z]+.*/
  const spe = /^.*[^a-zA-Z0-9]+.*/
  const passLength = value.length > 8 && value.length < 12
  return num.test(value) && low.test(value) && up.test(value) && spe.test(value) && passLength
}
