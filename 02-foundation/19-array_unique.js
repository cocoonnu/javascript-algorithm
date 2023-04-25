// 普通数组去重
function uniqueArray(array) {
    let map = {}
    let res = []
    for (var i = 0; i < array.length; i++) {
        if (!map.hasOwnProperty([array[i]])) {
            map[array[i]] = i;
            res.push(array[i])
        }
    }
    return res;
}

// 对象数组去重
/**
 * @description: 检查两个对象 obj1 和 obj2 是否值相等
 * @param {*} obj1
 * @param {*} obj2
 * @return {*}
 */
function checkObj(obj1, obj2) {
    // 指向同一内存
    if (obj1 === obj2) return true;
    let arr1 = Object.keys(obj1),
        arr2 = Object.keys(obj2);
    // 判断属性值是否相等
    if (arr1.length != arr2.length) return false;
    for (const k in arr1) {
        if (typeof arr1[k] == "object" || typeof arr2[k] == "object") {
            if (!checkObj(arr1[k], arr2[k])) return false;
        } else if (arr1[k] !== arr2[k]) {
            return false;
        }
    }
    return true;
}

/**
 * @description: 在数组原型上写方法
 * @param {*} itemObj
 * @return {*}
 */
Array.prototype.includesObj = function (itemObj) {
    let flag = false;
    for (let i = 0; i < this.length; i++) {
        if (checkObj(this[i], itemObj)) {
            flag = true;
            break;
        }
    }
    return flag;
};

/**
 * @description: 针对对象数组，且可能出现对象引用的问题
 * @param {*} nums
 * @return {*}
 */
function uniqSpecial(nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        // 如果不存在
        if (!result.includesObj(nums[i])) result.push(nums[i]);
    }
    return result;
}
let a = { a: 1 };
let b = { a: 1 };
let c = { b: 2 };
let nums = [a, b, c];

console.log(uniqSpecial(nums));
// [ { a: 1 }, { b: 2 } ]