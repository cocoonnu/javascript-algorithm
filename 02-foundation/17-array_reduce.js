// pre 上一次遍历的返回值 开始为传入的参数（没传则为数组第一项 cur变为数组第二项）
Array.prototype.myReduce = function(callback, ...args) {
    let start = 0, pre;

    if (args.length) {
        pre = args[0]
    } else {
        pre = this[0]
        start = 1
    }

    for (let index = start; index < this.length; index++) {
        pre = callback(pre, this[index], index, this)
    }

    return pre
}

var arr = [1, 2, 3, 4];
var sum = arr.myReduce(function (prev, cur, index, arr) {
    console.log(prev, cur, index);
    return prev + cur;
})
console.log(arr, sum);