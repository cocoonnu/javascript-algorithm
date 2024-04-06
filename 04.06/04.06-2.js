/** 手写 Promise.race */
Promise.prototype.raceFn = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      if (promise instanceof Promise) {
        promise.then(
          (value) => resolve(value),
          (err) => reject(err)
        );
      } else {
        resolve(promise);
      }
    });
  });
};
