// 手写promise.all功能
function promise_all(plist) {

    if (typeof plist[Symbol.iterator] != 'function') {
        throw new Error('参数不是一个可迭代对象')
    }

    return new Promise(function(resolve, reject) {
        let count = 0 // 统计promise的resolve执行个数
        const result = []

        for (let index = 0; index < plist.length; index++) {

            // 获取单个promise
            // 使用Promise.resolve避免plist[index]不是一个promise而导致.then报错
            const promise = plist[index]

            Promise.resolve(promise).then(function(value) {
                count++
                result[index] = value // 按顺序存储结果value

                // 如果全部成功
                if (count == plist.length) resolve(result)

            }).catch(function(err) {
                reject(err)
            })

        }
    })
}

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log(1);
        resolve(1);
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log(2);
        resolve(2);
        // reject(2)
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log(3);
        resolve(3);
    }, 3000);
});

const promiseArr = [promise1, promise2, promise3];

promise_all(promiseArr).then(function(result) {
    console.log(result, 'result')
}).catch(function(err) {
    console.log(err, 'err')
})

