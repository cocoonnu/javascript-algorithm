/** 
 * 128. 最长连续序列
 * 使用set去重，并且利用set查找是O(1)级别
 * @see https://leetcode.cn/problems/longest-consecutive-sequence/description/
 */
const longestConsecutive = (nums) => {
  const numSet = new Set(nums)
  let res = 0
  for (const value of nums) {
    // 如果该值是序列起点
    if (!numSet.has(value - 1)) {
      let count = 1
      let item = value
      while (numSet.has(item + 1)) {
        count++
        item++
      }
      res = Math.max(res, count)
    }
  }
  return res
}