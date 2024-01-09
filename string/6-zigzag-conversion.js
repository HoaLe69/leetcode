/*
 * give a string , number rows
 * written in a zigzag parttern
 * let make this parttern in a fixed font fot better legibility(make string easy to read)
 * input  : PAHNAPLSIIGYIR , numrows : 3 , output : PAHNAPLSIIGYIR
 * */

var convert = function (s, numRows) {
  // check length string from input
  if (s.length === 1) return s
  const listSubString = {}
  let countRow = 1
  // mark countRow var is on top or not
  let mark = false
  for (let i = 0; i < s.length; i++) {
    // store substring on each row
    listSubString[countRow] = (listSubString[countRow] || '') + s[i]
    if (countRow === numRows) {
      mark = true
    }
    if (countRow === 1) {
      mark = false
    }
    // asc or dsc countRow var
    if (mark) {
      countRow--
    } else countRow++
  }
  // combine substring  to result
  const result = Object.keys(listSubString).reduce(
    (acc, curr) => acc + listSubString[curr],
    ''
  )
  return result
}
console.log(convert('PAYPALISHIRING', 4))
