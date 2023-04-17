// 实现一个自定义instanceof函数
// 检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上

function instanceOf(obj, Constructor) {
    if (typeof obj != 'object' || typeof Constructor != 'function') {
        return false
    }

    if (obj == null) return false

    // 获取实例对象的隐式原型
    let op = obj.__proto__

    // 获取构造函数的prototype属性
    let cp = Constructor.prototype

    while (true) {
        if (op == null) {
            return false
        } else if (op == cp) {
            return true
        }

        // 在原型链上不断查找 构造函数的显式原型
        op = op.__proto__
    }
}


function test() {}

let a = new test()
console.log(instanceOf(a, test))
console.log(instanceOf(null, test))
console.log(instanceOf(1, test))