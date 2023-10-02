/** 
 * 739. 每日温度
 * 从后遍历数组，定义一个栈（存储数字项下标，更好计算距离），将当前项入栈
 * 但是在入栈前，需要将比当前项小的项依次出栈
 * 在当前项前面的项就是距离最近的比它大的项
 * 我们把这个栈称为单调递增栈
 * @see https://leetcode.cn/problems/daily-temperatures/solutions/283745/shou-hui-ti-jie-fang-da-guan-cha-dan-diao-zhan-si-/
 */
const dailyTemperatures = (temperatures) => {
  const stack = []
  const res = new Array(temperatures.length).fill(0)
  for (let index = temperatures.length - 1; index >= 0; index--) {
    const item = temperatures[index]
    while (stack.length && item >= temperatures[stack[stack.length - 1]]) {
      stack.pop()
    }
    if (stack.length) {
      res[index] = stack[stack.length - 1] - index
    }
    stack.push(index)
  }
  return res
}

/** 解析：其实就是从右遍历，右边保持最大即可 */