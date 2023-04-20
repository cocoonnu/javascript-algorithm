// 实现字符串indexOf查找 position为开始查找的位置下标
String.prototype.myIndexOf = function(str, position = 0) {
    if (position < 0) position = 0
    if (position > this.length) return -1

    for (let index = position; index < this.length; index++) {
        if (this.substring(index).startsWith(str)) {
            return index
        }        
    }

    return -1
}


const str = '0123456789'
const opt = '4'

console.log(str.myIndexOf(opt), str.indexOf(opt, 6))
