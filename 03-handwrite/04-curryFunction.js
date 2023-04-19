// 柯里化：把接受多个参数的函数转换成接受一个单一参数的函数
// 理解：https://vue3js.cn/interview/JavaScript/closure.html

function add(a, b, c) {
    return a + b + c
}

// 封装一个柯里化函数
function curry(fn) {
    const judge = (...args) => {

        if (args.length == fn.length) return fn(...args)
        return (...arg) => judge(...args, ...arg)
    }

    return judge
}


// 先得到柯里化函数
let addCurry = curry(add)

const add1 = addCurry(1)
const add12 = addCurry(1, 2)
const add123 = addCurry(1)(2)(3)

console.log(add1(2,3));
console.log(add12(3));
console.log(add123);