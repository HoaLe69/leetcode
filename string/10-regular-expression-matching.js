var isMatch = function (s, p) {
  if (s.length > p.length && p[p.length - 1] !== '*') return false
  let res = ''
  for (let i = 0; i < s.length; i++) {
    if (p[i] === '.') {
      res += s[i]
    } else if (p[i] === '*') {
      res += res[i - 1]
    } else if (p[i] >= 'a' && p[i] <= 'z') res += p[i]
    else {
    }
  }
}

console.log(isMatch('aa', 'a'))
