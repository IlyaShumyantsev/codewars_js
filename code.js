// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.
function findOdd(A) {
  const numbers = A.reduce((sum, element) => {
    sum[element] = (sum[element] || 0) + 1;
    return sum;
  }, {});
  for (const [key, value] of Object.entries(numbers)) {
    if (value % 2 !== 0) return Number(key);
  }
  return "nothing";
}