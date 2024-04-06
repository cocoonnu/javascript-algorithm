/**
 * 冒泡排序
 * @see https://www.hello-algo.com/chapter_sorting/bubble_sort/
 */
function bubbleSort(nums) {
  // 外层区间一层一层缩小，区间定义为[0,i]
  for (let i = nums.length - 1; i > 0; i--) {
    let flag = false;
    // 内层区间等于外层区间，并依次遍历
    for (let j = 0; j < i; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        flag = true;
      }
    }
    if (!flag) break;
  }
  return nums;
}

const arr = [1, 1, 2, 4, 5, 3];
console.log("", bubbleSort(arr));
