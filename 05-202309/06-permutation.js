/** 
 * 给定一个【没有重复】字符的字符串，返回其所有可能的全排列
 * 先获取所有全排列，再使用set对数组去重
 */
const permutation = (S) => {
  const res = new Set()
  const vid = []
  const dfs = (t) => {
    if (t.length === S.length) {
      return res.add(t)
    }
    for (let index = 0; index < S.length; index++) {
      if (vid[index]) continue // 针对下标判断每个数是否使用过
      vid[index] = true
      dfs(t + S[index])
      vid[index] = false
    }
  }
  dfs('')
  return [...res]
}