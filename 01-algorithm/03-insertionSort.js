/** 插入排序 */
const insertionSort = (array) => {
  // 将每一个数i作为基准元素 插入到左边已经排序好的区间[0, i -1]中
  for (let i = 1; i < array.length; i++) {
    const base = array[i]

    // 通过把比基准元素小的区间段整体向后移 来达到插入的效果
    let j = i - 1 // 从区间末开始比较 直到开头或者合适的位置
    while (j >= 0 && array[j] > base) {
      array[j + 1] = array[j]
      j--
    }
    array[j + 1] = base
  }
}