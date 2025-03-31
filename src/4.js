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
*/

export { sum, count, max };
