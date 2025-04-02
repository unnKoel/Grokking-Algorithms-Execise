// 4.1 Write out the code for the earlier sum function.
function sum(arr) {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];

  const last = arr.pop();
  return last + sum(arr);
}
// 4.2 Write a recursive function to count the number of items in a list
function count(arr) {
  if (arr.length === 0) return 0;

  arr.pop();
  return 1 + count(arr);
}
// 4.3 Find the maximum number in a list.
function max(arr) {
  if (arr.length === 0)
    throw new Error("the size of arr doesn't allow to be zero");
  if (arr.length === 1) return arr[0];

  const last = arr.pop();
  const restMax = max(arr);
  return last >= restMax ? last : restMax;
}

/**
4.4 Remember binary search from chapter 1? It’s a divide-and-conquer
algorithm, too. Can you come up with the base case and recursive
case for binary search?

1. arr.length / 2 is possible to be bigger than arr.length - 1?
prove:  x / 2 > x - 1, when x < 2, that x = 0 or 1;
        when x = 0, Math.floor(0/2) = 0 > x(0) - 1
        when x = 1, Math.floor(1/2) = 0 === x(1) -1

2. why (start + end)/2 is the middle of the interval.
prove: start + (end-start)/2 = end/2 + start/2 = (start+end)/2
*/
function binarySearch(arr, target, start, end) {
  if (arr.length === 0) return -1;
  if (arr.length === 1) {
    return arr[0] === target ? 0 : -1;
  }

  end = end === undefined ? arr.length - 1 : end;
  start = start === undefined ? 0 : start;
  const mid = Math.floor((start + end) / 2);
  if (target === arr[mid]) return mid;
  if (target > arr[mid]) return binarySearch(arr, target, mid + 1, end);
  if (target < arr[mid]) return binarySearch(arr, target, start, mid - 1);
}

function quickSort(arr) {
  if(arr.length < 2) return arr;
  
  const pivot = arr[0];
  const bigger = [];
  const smaller = [];
  
  for(let i = 1; i < arr.length; i++) {  // notice that i should start from 1 instead of 0, otherwise the error that maximum callstack size excessed accurs.
    if(arr[i] > pivot) bigger.push(arr[i]);
    if(arr[i] <= pivot) smaller.push(arr[i]);
  }

  return [...quickSort(smaller), pivot, ...quickSort(bigger)]
}

// 4.5 Printing the value of each element in an array.
// answer: O(n)
// 4.6 Doubling the value of each element in an array.
// answer: O(n)
// 4.7 Doubling the value of just the frst element in an array.
// answer: O(1)
/** 4.8 Creating a multiplication table with all the elements in the array. So
if your array is [2, 3, 7, 8, 10], you frst multiply every element by 2,
then multiply every element by 3, then by 7, and so on.
answer: O(n^2)
*/

export { sum, count, max, binarySearch, quickSort };
