/** 手写科里化函数 */
function carryFn(fn, ...args1) {
  let allArgs = [...args1];
  const res = (...args2) => {
    allArgs = [...allArgs, ...args2];
    if (allArgs.length === fn.length) {
      return fn(...allArgs);
    } else {
      return res;
    }
  };
  return res;
}

const add = (a, b, c) => a + b + c;
const addOne = carryFn(add, 1);
const addTwo = addOne(2);
const addThree = addTwo(3);
console.log("", addOne);
console.log("", addTwo);
console.log("", addThree);
