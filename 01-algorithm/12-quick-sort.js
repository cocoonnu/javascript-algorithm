/**
 * @description 快速排序
 */


function quickSort(arr) {
    if (!arr.length) return arr

    let left = []
    let right = []

    let midIndex = Math.floor(arr.length / 2)
    // let midValue = arr.slice(midIndex, midIndex + 1)[0]
    let midValue = arr[midIndex]

    for (let i = 0; i < arr.length; i++) {

        if (i != midIndex) {
            let n = arr[i]

            if (n < midValue) left.push(n)
            if (n > midValue) right.push(n)
        }
    }

    return quickSort(left).concat([ midValue ], quickSort(right))
}

const arr1 = [1, 6, 2, 7, 3, 8, 4, 9, 5]
console.info(quickSort(arr1))
