/**
 * @description 二分查找
 */


function binarySearch(arr, target) {

    const length = arr.length
    if (!length) return -1

    let startIndex = 0
    let endIndex = length - 1

    while (startIndex <= endIndex) {
        
        let midIndex = Math.floor((startIndex + endIndex) / 2)
        let midValue = arr[midIndex]

        if (midValue < target) {

            endIndex = midIndex - 1
        } else if (midIndex > target) {

            startIndex = midIndex + 1
        } else {

            return midIndex
        }

    }

    return -1
}

const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
const target = 1
console.info(binarySearch(arr, target))
