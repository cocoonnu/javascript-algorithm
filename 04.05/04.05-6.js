/** 手写call */
Function.prototype.callFn = function (obj, ...args) {
  if (typeof window === undefined) {
    obj = obj || globalThis;
  } else {
    obj = obj || window;
  }
  const fn = Symbol();
  obj[fn] = this;
  return obj[fn](...args);
};

const obj1 = {
  name: "cocoon",
  testFn(age) {
    console.log(`${this.name}${age}岁了`);
  },
};
const obj2 = {
  name: "czy",
};

obj1.testFn.callFn(obj2, 22);
