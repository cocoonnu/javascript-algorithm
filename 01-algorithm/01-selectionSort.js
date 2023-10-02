/** 选择排序 */
const selectionSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let k = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[k]) k = j
    }
    [array[i], array[k]] = [array[k], array[i]]
  }
}