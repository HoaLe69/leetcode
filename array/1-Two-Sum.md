### 1. Two Sum

### Problem Description

Given an array of integers, return indices of the two numbers such that they add up to a specific target.You may
assume that each input would have **exactly one solution**, and you may not use the same element twice.

### Solution Approach

**Solution 1**

- **Approach** : I used a hash map to store the different between the target and each number as I iterate through the array.
  If the difference is found in the hash map, I return the indices of the current number and the difference.

- **Code**:

```javascript
/\*\* @param {number[]} nums

- @param {number} target
- @return {number[]}
  \*/

var twoSum = function (nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]
    if (map.has(complement)) {
      return [map.get(complement), i]
    }
    map.set(nums[i], i)
  }
}
```

**Explanation**

1. Create an empty hash map `num_map`
2. Iterate through the array of numbers with their indices
3. For each number , calculate the difference between the target and the number
4. Check if the difference is in the hash map
5. If it is,return the indices of the current number and the difference from the hash map
6. if not , add the current number and its index to the hash map

**Complexity Analysis**

- **Time complexity** : O(n) where n is the number of elements in the array. We traverse the list once
- **Space complexity** : O(n) where n is the number of elements in the array. We store at most n elements in the hash map

**Solution 2**

- **Approach** : I used a brute force approach to solve the problem. I used two nested loops to iterate through the array and check if the sum of the current number and the next number is equal to the target. If it is, I return the indices of the two numbers.
- **Code** :

```python
def twoSum(nums , target):
  for i in range(len(nums)):
    for j in range(i+1,len(nums)):
      if nums[i] + nums[j] == target:
      return [i,j]
```

**Explanation**

1. Iterate through the list of numbers using two nested loops.
2. For each pair of numbers, check if their sum is equal to the target.
3. If it is, return their indices.

** Complexity Analysis**

- Time Complexity: O(n^2), where n is the number of elements in the array. We check every pair of numbers.
- Space Complexity: O(1), as we are not using any extra space.

### Conclusion

- Solution 1 : is more efficient with a time complexity of O(n) and is suitable for larger datasets.
- Solution 2 is simpler but less efficient with a time complexity of O(n^2), making it less suitable for larger datasets
