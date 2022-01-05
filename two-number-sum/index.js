// Write a function that takes in a non-empty array of distinct integers and an
// integer representing a target sum. If any two numbers in the input array sum
// up to the target sum, the function should return them in an array, in any
// order. If no two numbers sum up to the target sum, the function should return
// an empty array.

function twoNumberSum(array, targetSum) {
  // Write your code here.
  let selectedArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        selectedArray.push(array[i], array[j]);
      }
    }
  }
  return selectedArray;
}

//twoNumberSum([3,5,-4,8,11,1,-1,6], 10)
