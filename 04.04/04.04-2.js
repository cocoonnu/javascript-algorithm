/** 手写instanceof */
function instanceofFn(obj, constructor) {
  const op = obj.__proto__;
  const cp = constructor.prototype;
  while (op === null) {
    if (op === cp) return true;
    op = op.__proto__;
  }
  return false;
}
