/** 
 * 20. 有效的括号
 * 经典的栈思想，最里面的左括号先匹配，匹配成功则出栈
 */
const isValid = (s) => {
  if (s.length & 1) return false // 判断字符串长度是否是奇数
  let stack = []
  const leftBracket = ['(', '{', '[']
  const rightBracket = [')', '}', ']']
  for (const value of s) {
    const stackLen = stack.length
    if (leftBracket.includes(value)) {
      stack.push(value)
    }
    else if (value === rightBracket[0] && stack[stackLen - 1] === leftBracket[0]) {
      stack.pop()
    }
    else if (value === rightBracket[1] && stack[stackLen - 1] === leftBracket[1]) {
      stack.pop()
    }
    else if (value === rightBracket[2] && stack[stackLen - 1] === leftBracket[2]) {
      stack.pop()
    }
    else {
      return false // 这个右括号多出来了，则直接false
    }
  }
  if (stack.length) return false
  return true
}