/**
 * 归并排序
 * @see https://www.hello-algo.com/chapter_sorting/merge_sort/
 */
// 合并计划：将排好序的两个区间[left, mid]和[mid+1,right]合并为排好序的区间[left,right]
function merge(nums, left, mid, right) {
  const temp = new Array(right - left + 1);
  let i = left;
  let j = mid + 1;
  let k = 0;

  // 依次将两个区间中较小的数移到预备数组中，只到某个区间结束
  while (i <= mid && j <= right) {
    if (nums[i] < nums[j]) {
      temp[k++] = nums[i++];
    } else {
      temp[k++] = nums[j++];
    }
  }

  // 将剩下的某个区间中剩下的大的数移到预备数组中
  while (i <= mid) {
    temp[k++] = nums[i++];
  }
  while (j <= right) {
    temp[k++] = nums[j++];
  }

  // temp已经是合并好排序好的数组了，直接复制给nums[left,right]即可
  for (let index = 0; index < temp.length; index++) {
    nums[left + index] = temp[index];
  }
}

function mergeSort(nums, left, right) {
  if (left >= right) return;
  const mid = Math.floor((left + right) / 2);
  mergeSort(nums, left, mid);
  mergeSort(nums, mid + 1, right);
  merge(nums, left, mid, right);
}

const arr = [1, 1, 2, 9, 4, 8, 5, 3, 7];
mergeSort(arr, 0, arr.length - 1);
console.log("", arr);
