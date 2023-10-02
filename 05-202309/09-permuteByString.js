/** 给定一个【没有重复】字符的字符串，返回其所有可能的全排列 */
const permuteByString = (S) => {
  const res = []
  const hashMap = {}
  const dfs = (path) => {
    if (path.length === S.length) {
      return res.push(path)
    }
    for (const value of S) {
      if (hashMap[value]) continue
      hashMap[value] = true
      dfs(path + value)
      // 出来之后已经做了回溯，不用像数组一样pop
      hashMap[value] = false
    }
  }
  dfs('')
  return res
}
console.log('', permuteByString('abcc'))