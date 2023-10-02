/** 
 * 返回所有小于n的质数的数量
 * 明确一点：质数的倍数是合数，所以我们把所有质数的倍数筛掉就行
 * 另外我们算倍数的时候从乘于它本身开始，以免一个数被重复标记
 * @see https://leetcode.cn/problems/count-primes/
 */
const countPrimes = (n) => {
  const res = []
  const primesArr = new Array(n).fill(true)
  for (let index = 2; index < n; index++) {
    if (primesArr[index]) res.push(index)
    for (let j = index * index; j < n; j = j + index) {
      primesArr[j] = false
    }
  }
  return res
}
countPrimes(10)