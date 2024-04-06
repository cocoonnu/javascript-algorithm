/**
 * 快速排序
 * @see https://www.hello-algo.com/chapter_sorting/quick_sort/
 */
// 哨兵划分：以nums[left]为基准数，将数组划分为满足“左子数组任意元素 < 基准数 < 右子数组任意元素”
function partition(nums, left, right) {
  function swapNums(i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  let i = left;
  let j = right;
  const base = nums[left];

  /**
   * 具体操作如下：
   * 1. 先j不断左移，如果小于基准数了就停下。然后i不断右移，如果大于基准数了就停下
   * 2. i,j都停下了就交换两个数，然后再继续第一步
   * 3. 只到i=j之后，将这个数和基准数交换就结束了
   */
  while (i < j) {
    while (i < j && nums[j] >= base) {
      j--;
    }
    while (i < j && nums[i] <= base) {
      i++;
    }
    swapNums(i, j);
  }
  swapNums(left, i);
  return i;
}

function quickSort(nums, left, right) {
  if (left >= right) return;
  const pivot = partition(nums, left, right);
  quickSort(nums, left, pivot - 1);
  quickSort(nums, pivot + 1, right);
}

const arr = [1, 1, 2, 4, 5, 3];
quickSort(arr, 0, arr.length - 1);
console.log("", arr);
