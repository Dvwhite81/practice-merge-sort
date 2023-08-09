// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
  if (arr.length <= 1) {
    // If so, it's already sorted: return
    return arr;
  }

  // Divide the array in half
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  // Recursively sort the left half
  let sortLeft = mergeSort(left);
  // Recursively sort the right half
  let sortRight = mergeSort(right);
  // Merge the halves together and return
  let merged = merge(sortLeft, sortRight);
  return merged;
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Wasn't passing test with empty array
  if (arrA.length === 0) return arrB;
  if (arrB.length === 0) return arrA;
  // Create an empty return array
  let results = [];
  // Point to the first value of each array
  let a1 = 0;
  let b1 = 0;
  // While there are still values in each array...
  while (a1 < arrA.length || b1 < arrB.length) {
    // Compare the first values of each array
    let firstA = arrA[a1];
    let firstB = arrB[b1];
    if (firstA <= firstB) {
      // Add the smaller value to the return array
      results.push(firstA);
      // Move the pointer to the next value in that array
      a1++;

    } else {
      // Add the smaller value to the return array
      results.push(firstB);
      // Move the pointer to the next value in that array
      b1++;
    }
  }
  // Return the return array
  return results;
}
let arr1 = [];
for (let i = 500; i > 1; i--) {
  arr1.push(i);
}
let arr2 = [];
for (let i = 500; i > 1; i--) {
  arr2.push(i);
}
merge(arr1, arr2);
module.exports = [merge, mergeSort];
