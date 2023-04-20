// 手写数组扁平化
Array.prototype.myFlat = function(deep = 1) {
    let res = []

    if (deep == 'Infinty') {
        this.forEach(item => {
            if (Array.isArray(item)) {
                res = res.concat(item.flat())
            } else {
                res.push(item)
            }
        })
    } else {
        deep--
        this.forEach(item => {
            if (Array.isArray(item) && deep >= 0) {
                res = res.concat(item.flat(deep))
            } else {
                res.push(item)
            }         
        })
    }

    return res
}

const arr = [1, [2, [3, [4, [5, [6, [7, [8, [9], 10], 11], 12], 13], 14], 15], 16]]

console.log('展开一层', arr.myFlat(1))
console.log('完全展开', arr.myFlat(Infinity))