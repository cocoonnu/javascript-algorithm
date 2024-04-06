/** 递归循环实现基础的深拷贝 */
function deepClone(obj, hash = new WeakMap()) {
  // 如果是普通类型则直接返回
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  // 其他引用类型也得一一处理
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (obj instanceof Set) return new Set(obj);
  if (obj instanceof Map) return new Map(obj);

  // 使用hash缓存，防止递归循环遍历同一个引用变量
  if (hash.get(obj)) return hash.get(obj);
  const cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);

  // 对象和数组这两个引用类型需要遍历里面的数据
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }

  return cloneObj;
}

// 深拷贝
const obj1 = {
  name: "init",
  arr: [1, [2, 3], 4],
};
const obj4 = deepClone(obj1); // 一个深拷贝方法
obj4.name = "update";
obj4.arr[1] = [5, 6, 7]; // 新对象跟原对象不共享内存

console.log("obj1", obj1); // obj1 { name: 'init', arr: [ 1, [ 2, 3 ], 4 ] }
console.log("obj4", obj4); // obj4 { name: 'update', arr: [ 1, [ 5, 6, 7 ], 4 ] }
