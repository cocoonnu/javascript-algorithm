/** 
 * 组合总和：给定无重复数组并且无限制重复被选取，返回不重复的组合总数等于target
 * 减枝条件1：当total大于或等于target直接退出搜索
 * 减枝条件2：确定当前点位起始点，减掉所有左边的点（使之不产生重复组合） 
 * @see https://leetcode.cn/problems/combination-sum/solutions/406596/shou-hua-tu-jie-zu-he-zong-he-combination-sum-by-x/
 */
const combinationSum = (candidates, target) => {
  const res = []
  /** 
   * @start 搜索的起点
   * @path 搜索路径数组
   * @total 当前总数
   */
  const dfs = (start, path, total) => {
    if (total === target) {
      return res.push(path.slice())
    }
    if (total > target) return
    for (let index = start; index < candidates.length; index++) {
      path.push(candidates[index])
      dfs(index, path, total + candidates[index])
      path.pop()
    }
  }
  dfs(0, [], 0)
  return res
}
console.log('', combinationSum([2, 3, 6, 7], 7))