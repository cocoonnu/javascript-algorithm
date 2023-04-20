// 遍历过滤数组 返回新数组
Array.prototype.myFilter = function (callback) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this) && res.push(this[i]);
    }
    return res;
};

let arr = [1, 2, 3]

let arr1 = arr.myFilter(function(item) {
    return item > 2
})

console.log(arr1);