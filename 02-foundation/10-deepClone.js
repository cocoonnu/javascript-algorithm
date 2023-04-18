// 深拷贝：深拷贝开辟一个新的栈，两个对象属完成相同，但是对应两个不同的地址，
// 修改一个对象的属性，不会改变另一个对象的属性

// 使用循环递归的方式实现
function deepClone(obj, hash = new WeakMap()) {

    if (obj === null) return obj;
    if (typeof obj !== "object") return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);


    if (hash.get(obj)) return hash.get(obj);

    // 是对象的话就要进行深拷贝
    // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
    let cloneObj = new obj.constructor();
    hash.set(obj, cloneObj);

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 实现一个递归拷贝
            cloneObj[key] = deepClone(obj[key], hash);
        }
    }
    return cloneObj;
}

// 对象
const obj = {
    name: '双越',
    info: {
        city: '北京'
    },
    arr: [10, 20, 30]
}
const obj1 = deepClone(obj)
obj.info.city = '上海'

// set
const set = new Set()

console.log(obj1)
