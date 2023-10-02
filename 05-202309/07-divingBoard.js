/** 基础的排列组合 */
const divingBoard = (shorter, longer, k) => {
  if (k === 0) return []
  if (shorter === longer) return [k * shorter]
  const res = new Set()
  for (let index = k; index >= 0; index--) {
    const num = shorter * index + longer * (k - index)
    res.add(num)
  }
  return [...res]
}