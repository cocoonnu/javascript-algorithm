/** 
 * 3. 无重复字符的最长子串
 * 利用滑动区间，使用strArr.slice截取数组区间，当出现重复的则截掉旧的加入新的
 */
const lengthOfLongestSubstring = (s) => {
  let res = 0
  let strArr = []
  for (const value of s) {
    if (strArr.includes(value)) {
      strArr = strArr.slice(strArr.indexOf(value) + 1)
    }
    strArr.push(value)
    res = Math.max(res, strArr.length)
  }
  return res
}