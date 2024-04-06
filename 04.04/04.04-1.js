/** 手写new操作符 */
function newFn(fn, ...args) {
  const obj = {};
  obj.__proto__ = fn.prototype;
  fn.apply(obj, args);
  return obj;
}
