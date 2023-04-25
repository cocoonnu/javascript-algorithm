// 实现Promise.resolve
// 使用方法在笔记中有记录
function promise_resolve(value) {

    // 如果 value 已经是 Promise 对象，则直接返回该 Promise 对象
    if (value instanceof Promise) {
        return value;
    }

    // 如果 value 是 thenable 对象，则包装成 Promise 对象并返回
    if (value && typeof value.then === 'function') {
        return new Promise(function (resolve, reject) {
            value.then(resolve, reject);
        });
    }

    // 将传入的值作为 Promise 的成功值，并返回 Promise 对象
    return new Promise(function (resolve) {
        resolve(value);
    });
}


// 普通参数
promise_resolve('111').then(function(value) {
    console.log(value);
})


// promise
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log(1);
        resolve(1);
    }, 1000);
});
promise_resolve(promise1).then(function (value) {
    console.log(value);
})


// thenable
let thenable = {
    then: function (resolve, reject) {
        resolve(42);
    }
}
promise_resolve(thenable).then(function (value) {
    console.log(value);
})

