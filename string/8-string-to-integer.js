/* let explaining some problems
 * given string include digit(0-9) , lower-case , uppercase , ' ' , '+' , '-' , '.'
 * cover this string to integer
 *
 * */
var myAtoi = function (s) {
  // ignore any leading whitespace
  let newS = s.trim()
  let debounceLeft = -2147483648
  let debounceRight = 2147483647
  // check result is negative or positive
  // this variable will run 0 -> length - 1
  let i = 0
  let isNegative = newS[0] === '-'
  let isPositive = newS[0] === '+'
  if (isNegative || isPositive) i++
  let res = 0
  // if next charater is non-digit break loop and ignore rest string
  while (i <= newS.length && newS[i] >= '0' && newS[i] <= 9) {
    res = res * 10 + Number(newS[i])
    i++
  }
  res = isNegative ? -res : res
  if (res < debounceLeft) return debounceLeft
  if (res > debounceRight) return debounceRight
  return res
}

console.log(myAtoi('    -31'))
