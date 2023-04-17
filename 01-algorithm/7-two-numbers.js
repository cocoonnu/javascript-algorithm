/**
 * @description 双指针加二分思想
 * @description 递增的数组 一个数字n 求和等于n的数组中的两个数字
 */


function findTowNumbers(arr, n) {
    
    let res = []
    let length = arr.length
    if (!length) return res

    // 头尾指针
    let i = 0
    let j = length - 1
    while (i < j) {

        let sum = arr[i] + arr[j]

        if (sum > n) {
            j--
        } else if (sum < n) {
            i++
        } else {
            res.push(arr[i])
            res.push(arr[j])
            break
        }
    }

    return res
}

// 功能测试
const arrr = [1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 4, 7, 11, 15]
console.info(findTowNumbers(arrr, 15))

// console.time('findTowNumbers')
// for (let i = 0; i < 100 * 10000; i++) {
//     findTowNumbers(arrr, 15)
// }
// console.timeEnd('findTowNumbers')
