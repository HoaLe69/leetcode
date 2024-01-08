/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const seen = new Set()
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      // ignore if not number
      if (board[i][j] === '.') continue
      const c = board[i][j]
      if (
        seen.has(c + 'row' + i) ||
        seen.has(c + 'col' + j) ||
        seen.has(c + 'subbox' + Math.floor(i / 3) + Math.floor(j / 3))
      )
        return false
      seen.add(c + 'row' + i)
      seen.add(c + 'col' + j)
      seen.add(c + 'subbox' + Math.floor(i / 3) + Math.floor(j / 3))
    }
  }
  return true
}

isValidSudoku([])
