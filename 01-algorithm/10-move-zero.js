/**
 * @description 斐波那契数列
 * @description 将数组种所有的0都移动到末尾 必须在原数组就行操作
 */


function moveZero(arr) {
    let length = arr.length
    if (!length) return arr

    let i // 指向j指向的0后面第一个非零的数
    let j = -1 // 指向第一个0

    for (let i = 0; i < length; i++) {
        
        // 当第一个0出现时
        if (arr[i] == 0 && j == -1) j = i

        // 当i指向j指向的0后面第一个非零的数时
        if (arr[i] !=0 && j != -1) {

            // 将两个数进行交换
            let con = arr[i]
            arr[i] = arr[j]
            arr[j] = con

            // 交换之后j前面一定是0！！所以j++
            j++
        }
        
    }
}

const arr = [1, 0, 3, 4, 0, 0, 11, 0]
moveZero(arr)
console.log(arr)
