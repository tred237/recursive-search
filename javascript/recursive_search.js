function recursiveSearch(arr, target) {
  if (arr.length === 0) return false
  else if (arr[0] === target) return true
  arr.shift()
  return recursiveSearch(arr, target)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
// And a written explanation of your solution
// Given an Array of values, use recursion to find the target value
// Return true if found, otherwise false
// Base: value === target
// if first value of the array does not = the target, call the function again shifting the array by one value