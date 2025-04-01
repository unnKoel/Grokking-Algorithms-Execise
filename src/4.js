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

arr.length / 2 is possible to be bigger than arr.length - 1?
prove:  x / 2 > x - 1, when x < 2, that x = 0 or 1;
        when x = 0, Math.floor(0/2) = 0 > x(0) - 1
        when x = 1, Math.floor(1/2) = 0 === x(1) -1
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

export { sum, count, max, binarySearch };
