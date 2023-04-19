// 实现字符串indexOf查找 position为开始查找的位置下标
String.prototype.myIndexOf = function (searchValue, position = 0) {
    // 如果 position 大于字符串长度, 则不处理
    if (position > this.length) {
        return -1
    }

    // 如果 position 小于零 按 0 处理
    position = Math.max(position, 0)

    // 循环查找
    for (let i = position; i < this.length; i++) {
        // 截取字符串、判断是否以指定字符串开头
        if (this.substring(i).startsWith(searchValue)) {
            return i
        }
    }

    return -1
}

const str = '0123456789'
const opt = '4'

console.log(str.myIndexOf(opt), str.indexOf(opt, 6))
