// 深拷贝：深拷贝开辟一个新的栈，两个对象属完成相同，但是对应两个不同的地址，
// 修改一个对象的属性，不会改变另一个对象的属性
 
// 使用循环递归的方式实现
const deepClone = (target, map = new WeakMap()) => {

    // 基本数据类型，直接返回
    if (typeof target !== 'object' || target === null) return target

    // 函数 正则 日期 ES6新对象,执行构造题，返回新的对象
    const constructor = target.constructor
    const reg = /^(Function|RegExp|Date|Map|Set)$/i
    if (reg.test(constructor.name)) return new constructor(target)

    // map标记每一个出现过的属性，避免循环引用
    if (map.get(target)) return map.get(target)
    map.set(target, true)

    // 生成一个空对象或数组
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (const prop in target) {
        if (target.hasOwnProperty(prop)) {
            cloneTarget[prop] = deepClone(target[prop], map)
        }
    }

    return cloneTarget
}


// 对象
const obj = {
    name: 'cocoon',
    info: {
        city: '北京'
    },
    arr: [{sex: 'man'}, 20, 30],
    set: new Set([1,3,4]),
    fn() {
        console.log(1111)
    },
    u: null
}
const obj1 = deepClone(obj)

obj.info.city = '上海'
obj.set.add(6)

console.log(obj)
console.log(obj1)