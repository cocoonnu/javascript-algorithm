// 实现Promise.allSettled 模板和all的一致
function promise_allSettled(plist) {

    if (typeof plist[Symbol.iterator] != 'function') {
        throw new Error('参数不是一个可迭代对象')
    }

    return new Promise(function(resolve, reject) {
        let count = 0
        const result = []

        for (let index = 0; index < plist.length; index++) {
            const promise = plist[index]
            Promise.resolve(promise).then(
                
                // 成功的回调
                function(value) {
                    count++
                    result[index] = { status: 'fullfilled', value }
                },

                // 失败的回调
                function(reason) {
                    count++
                    result[index] = { status: 'rejected', reason }
                }

            ).finally(function() {
                if (count == plist.length) resolve(result)
            })
        }
    })
}


var p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'one');
});
var p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'two');
});
var p3 = new Promise((resolve, reject) => {
    reject('reject');
});

promise_allSettled([p1, p2, p3]).then(values => {
    console.log(values);
}, reason => {
    console.log(reason) // 不可能执行
});