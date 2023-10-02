/** 
 * 给定一个【有重复】数字的序列，返回其所有可能的全排列
 * 依旧使用全排列，之后再使用二维数组去重（数组为number类型）
 */
const permuteUnique = (nums) => {
  const res = []
  const hashMap = {}
  const dfs = (path) => {
    if (path.length === nums.length) {
      return res.push(path.slice())
    }
    for (let index = 0; index < nums.length; index++) {
      if (hashMap[index]) continue // 针对下标判断每个数是否使用过
      path.push(nums[index])
      hashMap[index] = true
      dfs(path)
      path.pop()
      hashMap[index] = false
    }
  }
  dfs([])
  return twoDimArrayUnique(res)
}

const twoDimArrayUnique = (arr) => {
  const obj = {}
  arr.forEach(item => obj[item] = item)
  return Object.values(obj)
}

console.log('', permuteUnique([1, 1, 2, 3]))


/** 
 * 给定一个【有重复】数字的序列，返回其所有可能的全排列（方式二 时间优化）
 * 减枝条件1：当前数已使用则跳过
 * 减枝条件2：避免产生重复的排列
 * @see https://leetcode.cn/problems/permutations-ii/solutions/418052/shou-hua-tu-jie-li-yong-yue-shu-tiao-jian-chong-fe/
 */
const permuteUniqueV2 = (nums) => {
  const res = []
  const hashMap = new Array(nums.length)
  nums.sort((a, b) => a - b)
  const dfs = (path) => {
    if (path.length === nums.length) {
      return res.push(path.slice())
    }
    for (let index = 0; index < nums.length; index++) {
      if (hashMap[index]) continue // 针对下标判断每个数是否使用过
      if (index - 1 >= 0 && nums[index - 1] === nums[index] && !hashMap[index - 1]) {
        continue // 避免产生重复的排列
      }
      path.push(nums[index])
      hashMap[index] = true
      dfs(path)
      path.pop()
      hashMap[index] = false
    }
  }
  dfs([])
  return res
}
console.log('', permuteUniqueV2([3, 3, 0, 3]))