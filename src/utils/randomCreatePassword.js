export default {
  createPassword() {
    const randomChars = [
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      'abcdefghijklmnopqrstuvwxyz',
      '!@#$%^&*()_',
      '0123456789',
    ]
    const length = 12
    let password = ''

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * randomChars.length)
      const randomNumber = Math.floor(Math.random() * randomChars[randomIndex].length)
      password += randomChars[randomIndex].substring(randomNumber, randomNumber + 1)
    }

    return password
  },
}
