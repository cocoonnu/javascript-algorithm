const shuffle = (arr) => {
    // 不影响原来的数组
    const result = [...arr]
    for (let i = result.length; i > 0; i--) {
        // 随机从 [0,i - 1] 产生一个 index, 将 i - 1 于 index 对应数组的值进行交换
        const index = Math.floor(Math.random() * i);
        [result[index], result[i - 1]] = [result[i - 1], result[index]]
    }
    return result
}
const arr = [1, 2, 3, 4, 5]
console.log(shuffle(arr)) // [ 3, 1, 2, 5, 4 ]
console.log(shuffle(arr)) // [ 2, 3, 5, 1, 4 ]
console.log(shuffle(arr)) // [ 4, 2, 3, 1, 5 ]
console.log(shuffle(arr)) // [ 5, 4, 2, 3, 1 ]