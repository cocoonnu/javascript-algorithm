/** 
 * 给定一个【没有重复】数字的序列，返回其所有可能的全排列
 * 经典的深度优先搜索 + 回溯
 * 减枝操作：当该数字使用过时，不再进行向下搜索
 * @see https://leetcode.cn/problems/permutations/solutions/247052/chou-xiang-cheng-jue-ce-shu-yi-ge-pai-lie-jiu-xian/
 */
const permute = (nums) => {
  const res = []
  const hashMap = {}
  const dfs = (path) => {
    if (path.length === nums.length) {
      return res.push(path.slice())
    }
    for (const value of nums) {
      if (hashMap[value]) continue
      path.push(value)
      hashMap[value] = true
      dfs(path)
      path.pop()
      hashMap[value] = false
    }
  }
  dfs([])
  return res
}