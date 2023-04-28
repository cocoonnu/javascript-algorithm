// 浅拷贝：如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址
// 例子：Object.assign、Array.prototype.slice()、concat()、使用拓展运算符实现的复制

// 实现一个对象的浅拷贝
function shallowClone(obj) {
    const newObj = {};
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}

// 或者 Object.assign({}, obj)

const sobj = {
    name: '双越',
    info: {
        city: '北京'
    },
    arr: [10, 20, 30]
}

// const sobj1 = shallowClone(sobj)
const sobj1 = Object.assign({}, sobj)

sobj.name = 'cocoon'
console.log(sobj1);

sobj.info.city = 'ss'
console.log(sobj1);

