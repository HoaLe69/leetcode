/**
 * @param {string} digits
 * @return {string[]}
 */
//given a string containning digits from 2-9 , return all possible letter combinations that the number could represent
var letterCombinations = function (digits) {
  const n = digits.length
  if (!n) return []
  const keyboard = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  const ans = []

  var bfs = (pos, str) => {
    if (pos === n) ans.push(str)
    else {
      const letter = keyboard[digits[pos]]
      for (let i = 0; i < letter.length; i++) {
        bfs(pos + 1, str + letter[i])
      }
    }
  }
  bfs(0, '')
  return ans
}
