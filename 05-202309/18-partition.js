/** 
 * 131. 分割回文串
 * 这一题把搜索类比与切分字符串了
 * @see https://leetcode.cn/problems/palindrome-partitioning/solutions/639915/shou-hua-tu-jie-san-chong-jie-fa-hui-su-q5zjt/
 */
const partition = (s) => {
  const res = []
  const dfs = (start, path) => {
    if (start === s.length) return res.push(path.slice())
    for (let index = start; index < s.length; index++) {
      if (isPalindrome(s, start, index)) {
        path.push(s.slice(start, index + 1))
        dfs(index + 1, path)
        path.pop()
      }
    }
  }
  dfs(0, [])
  return res
}

const isPalindrome = (x, l, r) => {
  const str = String(x)
  while (l < r) {
    if (str[l] !== str[r]) return false
    l++
    r--
  }
  return true
}

console.log('', partition('aab'))