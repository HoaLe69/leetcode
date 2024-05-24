/*
 *@param {number[][]} forest
 * @return {number}
 * */

/*
 * give matrix number mxn
 * 0 cannot be walked through
 * 1 empty can walked through
 * greater than 1 can walked through , this number is the tree's height
 *
 * can walk directions: up {0 , 1} , down {0 ,-1} , left {-1 , 0} , right {1, 0}
 * cut off tree in order from shortest to tallest
 * starting from the point (0 ,0)
 * Output: return the minimum steps you need to walk to cut off all the tree
 * */
var cutOffTree = function (forest) {
  const trees = []
  for (let i = 0; i < forest.length; i++) {
    for (let j = 0; j < forest[0].length; j++) {
      const height = forest[i][j]
      if (height > 1) {
        trees.push({ height, coor: [i, j] })
      }
    }
  }
  trees.sort((a, b) => a.height - b.height)
  trees.unshift({ height: 0, coor: [0, 0] })
  let ans = -1
  for (let i = 0; i < trees.length - 1; i++) {
    const step = bfs(forest, trees[i].coor, trees[i + 1].coor)
    if (step === -1) return -1
    ans = (ans === -1 ? 0 : ans) + step
  }
  return ans
}
var bfs = (forest, coor, descoor) => {
  const dx = [0, 0, -1, 1]
  const dy = [1, -1, 0, 0]
  let step = -1
  const [coorX, coorY] = coor
  const [descoorX, descoorY] = descoor
  const visited = Array.from({ length: forest.length }, () =>
    Array(forest[0].length).fill(false)
  )
  const queue = [{ step: 0, coor: [coorX, coorY] }]

  visited[coorX][coorY] = true
  while (queue.length > 0) {
    const it = queue.shift()
    if (descoorX === it.coor[0] && descoorY === it.coor[1]) {
      return it.step
    }
    for (let i = 0; i < 4; i++) {
      const x = it.coor[0] + dx[i]
      const y = it.coor[1] + dy[i]
      if (
        x >= 0 &&
        y >= 0 &&
        x < forest.length &&
        y < forest[0].length &&
        !visited[x][y] &&
        forest[x][y] != 0
      ) {
        visited[x][y] = true
        queue.push({ step: it.step + 1, coor: [x, y] })
      }
    }
  }

  return step
}
const forest = [
  [1, 2, 3],
  [8, 9, 7],
  [4, 6, 5]
]
console.log(cutOffTree(forest))
