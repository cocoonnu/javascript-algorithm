/** 手写 Promise.allSettled */
Promise.prototype.allSettledFn = function (promises) {
  let count = 0;
  const result = [];
  return new Promise((resolve, reject) => {
    const addData = (index, status, value) => {
      count++;
      result[index] = { status, value };
      if (count === promises.length) {
        resolve(result);
      }
    };
    promises.forEach((promise, index) => {
      if (promise instanceof Promise) {
        promise.then(
          (value) => addData(index, "fulfilled", value),
          (err) => addData(index, "rejected", err)
        );
      } else {
        addData(index, "fulfilled", promise);
      }
    });
  });
};
