var nextPermutation = nums => {
  if (nums.length == 1) return
  let pivot = nums.length - 2
  for (pivot; pivot >= 0; pivot--) {
    if (nums[pivot] < nums[pivot + 1]) break
  }
  if (pivot < 0) nums.sort((a, b) => a - b)
  else {
    let successor
    for (successor = nums.length - 1; successor > pivot; successor--) {
      if (nums[pivot] < nums[successor]) break
    }

    let temp = nums[pivot]
    nums[pivot] = nums[successor]
    nums[successor] = temp
    const subNums = nums.slice(pivot + 1).sort((a, b) => a - b)
    nums.splice(pivot + 1, nums.length, ...subNums)
  }
  console.log(nums)
}
const nums = [1, 3, 2]

nextPermutation(nums)
