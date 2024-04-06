/** 使用map+reduce实现数组去重 */
function arrUniqueByReduce(arr) {
  const newArr = [];
  arr.reduce((pre, cur) => {
    if (!pre.has(cur)) {
      pre.set(cur, true);
      newArr.push(cur);
    }
    return pre;
  }, new Map());
  return newArr;
}

/** 使用set实现数组去重 */
function arrUniqueBySet(arr) {
  return [...new Set(arr)];
}

const arr = [1, 1, 2, 3];
console.log("", arrUniqueByReduce(arr));
console.log("", arrUniqueBySet(arr));
