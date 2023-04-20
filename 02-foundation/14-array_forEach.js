// 仅仅只是遍历数组
Array.prototype.myForEach = function(callBack) {
    if (typeof callBack != 'function') {
        throw new TypeError(callBack + ' is not a function!')
    }

    for (let index = 0; index < this.length; index++) {
        callBack(this[index], index, this)
    }
}

let arr = [1,2,3]

// arr.myForEach(item => { item + 1 })
arr.myForEach(item => item + 1)
console.log(arr);