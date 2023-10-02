/** 
 * 组合总和2：给定重复数组并且选取一次，返回不重复的组合总数等于target
 * 相对于上一题多了1个减枝条件，并先对数组升序
 * 减枝条件：当上一个数和这个数相同则跳过这个数
 */
const combinationSum2 = (candidates, target) => {
  const res = []
  candidates.sort((a, b) => a - b)
  const dfs = (start, path, total) => {
    if (total === target) {
      return res.push(path.slice())
    }
    if (total > target) return
    for (let index = start; index < candidates.length; index++) {
      if (index - 1 >= start && candidates[index - 1] === candidates[index]) {
        continue
      }
      path.push(candidates[index])
      dfs(index + 1, path, total + candidates[index])
      path.pop()
    }
  }
  dfs(0, [], 0)
  return res
}
