// 实现数组的map函数
// @ts-ignore
Array.prototype._map = function(exc) {
    const res = []

    this.forEach(function(index, item, arr) {
        res.push(exc(index, item, arr))
    })

    return res
}

const arr = new Array(2).fill(2)
console.log(arr.map((item, index, arr) => item * index + 1)) // [1,3]


// @ts-ignore
console.log(arr._map((item, index, arr) => item * index + 1))// [1,3]