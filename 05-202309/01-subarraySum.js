/** 560. 和为 K 的子数组 */

/** 
 * 前缀和：i-j区间的sum就等于两个前缀相减
 * 因此只需要关心【当前前缀和-k】得到前缀和的出现的次数，然后让count加上即可
 * @see https://leetcode.cn/problems/subarray-sum-equals-k/solutions/247991/dai-ni-da-tong-qian-zhui-he-cong-zui-ben-fang-fa-y/
 */
var subarraySum = function (nums, k) {
  const map = new Map([[0, 1]])
  let count = 0
  let preSum = 0
  for (const value of nums) {
    preSum += value
    count += map.get(preSum - k) || 0
    map.set(preSum, map.get(preSum) ? map.get(preSum) + 1 : 1)
  }
  return count
};

/** 暴力：使用双重循环，遍历所有i-j区间（即所有的子串）的sum， */
var subarraySum = function (nums, k) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum === k) count++
    }
  }
  return count
};