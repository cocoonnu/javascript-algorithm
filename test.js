// 手写单独实现promise.all功能
// 成功实例：每隔一秒打印1 2 3 最后打印返回的结果数组
// 失败实例：2秒后返回失败态error为2
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log(1);
        resolve(1);
    }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log(2);
        // resolve(2);
        reject(2)
    }, 2000);
});
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log(3);
        resolve(3);
    }, 3000);
});
const promiseArr = [promise1, promise2, promise3];

// Promise.all(promiseArr).then(res => {
//   console.log(res);
// })

const promiseAll = (pList) => {
    return new Promise((resolve, reject) => {

        // 当前执行了多少个promise
        let count = 0;

        // promise总数
        const pLength = pList.length;

        // 成功的结果数组
        const result = [];

        for (let i = 0; i < pLength; i++) {
            pList[i].then(res => {
                count++
                result[i] = res

                // 如果所有promise执行完毕
                if (pLength === count) {
                    resolve(result)
                }

            }).catch(err => {
                reject(err)
            })
        }
    })
}

promiseAll(promiseArr).then(result => {
    console.log(result, 'result');
}).catch(err => {
    console.log(err, 'error');
})