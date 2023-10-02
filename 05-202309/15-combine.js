/** 
 * 77. 组合
 * 回溯+只搜索右边的节点
 * @see https://leetcode.cn/problems/combinations/description/
 */
const combine = (n, k) => {
  const res = []
  const dfs = (start, path) => {
    if (path.length === k) return res.push(path.slice())
    if (path.length > k) return
    for (let index = start; index <= n; index++) {
      path.push(index)
      dfs(index + 1, path)
      path.pop()
    }
  }
  dfs(1, [])
  return res
}
console.log('', combine(4, 2))