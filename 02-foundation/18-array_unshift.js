// 插入数组的头部 支持一次插入多个 返回数组长度
Array.prototype.myUnshift = function(...args) {
    this.reverse().push(...args.reverse())
    this.reverse()
    return this.length
}


let arr = [1,2]
arr.myUnshift(4,5,6)
console.log(arr);