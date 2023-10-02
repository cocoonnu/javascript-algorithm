const isPalindrome = (x) => {
  const str = String(x)
  let l = 0
  let r = str.length - 1
  while (l < r) {
    if (str[l] !== str[r]) return false
    l++
    r--
  }
  return true
}

const isPalindromeV2 = (x) => {
  return String(x).split('').reverse().join('') === String(x)
}