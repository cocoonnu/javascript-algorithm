const promiseAll = (plist) => {
  if (typeof plist[Symbol.iterator] !== 'function') {
    throw new Error('请传入一个迭代器对象')
  }
  return new Promise((resolve, reject) => {
    let count = 0
    const res = []
    for (let index = 0; index < plist.length; index++) {
      const promiseItem = plist[index]
      Promise.resolve(promiseItem).then((value) => {
        res[index] = value
        count += 1
        if (count === plist.length) resolve(res)
      }).catch((err) => {
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

promiseAll(promiseArr).then((result) => {
  console.log(result, 'result')
}).catch(function (err) {
  console.log(err, 'err')
})

