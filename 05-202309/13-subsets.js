/** 
 * 返回一个不重复数组的所有子集
 * 减枝条件：回溯+只搜索右边的节点
 * @see https://leetcode.cn/problems/subsets/description/
 */
const subsets = (nums) => {
  const res = []
  const dfs = (start, path) => {
    if (path.length >= 0) res.push(path.slice())
    if (path.length === nums.length) return
    for (let index = start; index < nums.length; index++) {
      path.push(nums[index])
      dfs(index + 1, path)
      path.pop()
    }
  }
  dfs(0, [])
  return res
}
console.log('', subsets([1, 2, 3]))