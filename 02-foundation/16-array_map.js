// 遍历数组 返回新数组
Array.prototype.myMap = function (callback) {
    const res = [];
    for (let i = 0; i < this.length; i++) {
        res.push(callback(this[i], i, this))
    }
    return res;
}

const arr = [1, 2, 3]

let res = arr.myMap(item => item + 1)

console.log(res)
