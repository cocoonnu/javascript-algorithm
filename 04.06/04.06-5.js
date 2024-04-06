/**
 * 插入排序
 * @see https://www.hello-algo.com/chapter_sorting/insertion_sort/#1141
 */
function insertionSort(nums) {
  // 已排序区间[0,i-1]
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    const base = nums[i];
    // 将base值插入到已排序区间的合适位置
    // 就是比base大的数整体往后移，找到位置了直接赋值即可
    while (j >= 0 && nums[j] > base) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = base;
  }
  return nums;
}

const arr = [1, 1, 2, 4, 5, 3];
console.log("", insertionSort(arr));
