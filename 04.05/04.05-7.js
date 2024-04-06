/** 手写bind，既要实现改变指向又要兼容构造函数 */
Function.prototype.bindFn = function (context, ...args1) {
  const fn = this;
  return function Fn(...args2) {
    const args = [...args1, ...args2];
    return fn.apply(this instanceof Fn ? new fn(...args2) : context, args);
  };
};
