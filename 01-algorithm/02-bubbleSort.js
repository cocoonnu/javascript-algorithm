/** 冒泡排序 */
const bubbleSort = (array) => {
  // 未排序区间为[0, i] 所以i从arr.length-1开始
  for (let i = array.length; i > 0; i--) {
    // 退出标志位 当未排序区间不用排序时说明已经排好了序
    let flag = true
    // 遍历未排序区间 比较两个数并做交换 最终最大的数移动到末尾
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        let tmp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = tmp
        flag = false
      }
    }
    if (flag) break
  }
}