/** 
 * 返回一个含有重复数字数组的所有子集
 * 相对于上一题多了一个减枝条件，并先对数组升序
 * 减枝条件：当上一个数和这个数相同则跳过这个数
 * @see https://leetcode.cn/problems/subsets-ii/description/
 */
const subsetsWithDup = (nums) => {
  const res = []
  nums.sort((a, b) => a - b)
  const dfs = (start, path) => {
    if (path.length >= 0) res.push(path.slice())
    if (path.length === nums.length) return
    for (let index = start; index < nums.length; index++) {
      // 当上一个数和这个数相等时 跳过这个数（实现去重效果）
      if (index - 1 >= start && nums[index - 1] === nums[index]) {
        continue
      }
      path.push(nums[index])
      dfs(index + 1, path)
      path.pop()
    }
  }
  dfs(0, [])
  return res
}