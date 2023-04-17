/**
 * @description 把一个数组旋转 k 步
 * @param arr
 * @param k
 */

function rotate(arr, k) {
    let length = arr.length
    if (!k || length == 0 || typeof k != 'number') return arr

    let step = Math.abs(k % length)

    let part1 = arr.slice(-step)
    let part2 = arr.slice(0, step)

    return part1.concat(part2)
}

// let arr = []
// for (let index = 0; index < 1000000; index++) {
//     arr.push(index)
// }


// console.time('routate')
let res = rotate([1,2,3,4], '123')
console.log(res)
// console.timeEnd('routate')
