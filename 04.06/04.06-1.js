/** 手写 Promise.all */
Promise.prototype.allFn = function (promises) {
  let count = 0;
  const result = [];
  return new Promise((resolve, reject) => {
    const addData = (index, value) => {
      count++;
      result[index] = value;
      if (count === promises.length) {
        resolve(result);
      }
    };
    promises.forEach((promise, index) => {
      if (promise instanceof Promise) {
        promise.then(
          (value) => addData(index, value),
          (err) => reject(err)
        );
      } else {
        addData(index, promise);
      }
    });
  });
};
