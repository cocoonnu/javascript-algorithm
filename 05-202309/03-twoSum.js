/** 
 * 1. 两数之和
 * 利用哈希表，key储存数组下标，value存储数组的值
 */
const twoSum = (nums, target) => {
  const arrMap = [] // 直接使用数组作为map
  for (const index in nums) {
    if (arrMap[target - nums[index]]) {
      return [index, arrMap[target - nums[index]]]
    }
    arrMap[nums[index]] = index
  }
}