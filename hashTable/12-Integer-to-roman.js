//NOTE: Sumary : Given number convert it to roman numeral
// Example 15 => XV , 3029 -=> 3000 + 20 +  9 => MMMXXIX
var intToRoman = function (num) {
  const romanNumeral = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
  const letter = [
    'I',
    'IV',
    'V',
    'IX',
    'X',
    'XL',
    'L',
    'XC',
    'C',
    'CD',
    'D',
    'CM',
    'M'
  ]
  // this variable to store first position to num greater than romanNumeral
  let firstPosNumLessRoman = 0
  let result = ''
  while (num > romanNumeral[firstPosNumLessRoman]) firstPosNumLessRoman++
  firstPosNumLessRoman -= 1
  if (num === romanNumeral[firstPosNumLessRoman]) return letter[firstPosNumLessRoman]
  while (num > 0) {
    const roman = romanNumeral[firstPosNumLessRoman]
    let tmp = num - roman
    num -= roman
    result += letter[firstPosNumLessRoman]
    while (tmp < romanNumeral[firstPosNumLessRoman]) firstPosNumLessRoman--
  }
  return result
}
console.log(intToRoman(1994))
