function getSubStringPalin(original, left, right) {
  while (
    original[left] === original[right] &&
    left >= 0 &&
    right < original.length
  ) {
    left--
    right++
  }
  return original.substring(left + 1, right)
}
function getLongestPalinrome(result) {
  return result.reduce((res, curr) => {
    return res.length > curr.length ? res : curr
  })
}
var longestPalindrome = function (s) {
  // if string s has  1 character
  if (s.length === 1) return s
  let result = ''
  for (let i = 0; i < s.length; i++) {
    const evenString = getSubStringPalin(s, i, i + 1)
    const oddString = getSubStringPalin(s, i, i)
    result = getLongestPalinrome([result, evenString, oddString])
  }
  return result
}
