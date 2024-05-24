var mostCommonWord = function (paragraph, banned) {
  const timeOfWord = {}
  const words = paragraph.split(/\W+/)

  for (let word of words) {
    word = word.toLowerCase()
    if (word == '') continue
    if (banned.includes(word)) continue
    timeOfWord[word] = timeOfWord[word] + 1 || 0
  }
  let res = ''
  let max = -1000
  for (const [word, time] of Object.entries(timeOfWord)) {
    if (time > max) {
      res = word
      max = time
    }
  }
  return res
}
const paragraph = '..Bob hit a ball, the hit BALL flew far after it was hit.'
const banned = ['hit']
console.log(mostCommonWord(paragraph, banned))
