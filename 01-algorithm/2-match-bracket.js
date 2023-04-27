/**
 * @description 括号匹配
 */

function isMatch(left, right) {
    if (left === '{' && right === '}') return true
    if (left === '[' && right === ']') return true
    if (left === '(' && right === ')') return true

    return false
}

function matchBracket(str) {
    let stack = []
    let left = '([{'
    let right = '}])'

    for (let index = 0; index < str.length; index++) {
        let s= str[index]
        
        // 如果为左括号则入栈
        if (left.includes(s)) stack.push(s)

        // 如果为右括号则判断
        if (right.includes(s)) {

            // 如果和栈顶匹配则出栈 不匹配则返回 false
            if (isMatch(stack[stack.length - 1], s)) stack.pop()
            else return false

        }
    }

    return stack.length == 0 ? true : false
}

console.log(matchBracket('{a(b[c]d)e}f'))
console.log(matchBracket('{a(b[c]d)ef'))
console.log(matchBracket('{a(b[c]d}e)f'))

console.log(matchBracket(''))
