// The following task has two parts.
// First you must figure out the principle behind the following encoding of natural numbers.
// The table below displays the encoding of the numbers from 0 to 11.
// Number -------> Code 
// 0 -------> '.'
// 1 -------> '()'
// 2 -------> '(())'
// 3 -------> '(.())'
// 4 -------> '((()))'
// 5 -------> '(..())'
// 6 -------> '(()())'
// 7 -------> '(...())'
// 8 -------> '((.()))'
// 9 -------> '(.(()))'
// 10 -------> '(().())'
// 11 -------> '(....())'
// Once you understand how the numbers are encoded, write a program which encodes a given natural number and return it as a string.
// Values from 0 to 10000 will be checked
const MAX_PRIME = Math.pow(10, 4);

const getCenter = num => Math.sqrt(num);

const genereatePrimes = () => {
  const res = [];

  for (let i = 2; i < MAX_PRIME; i++) {
    const center = getCenter(i);
    
    let isPrime = true;
    
    for (let j = 2; j <= center; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    
    if (isPrime) res.push(i);
  }
  
  return res;
}

const PRIMES = genereatePrimes();

function puzzle(n) {
  if (n === 0) return ".";
  let m = n;
  const res = [];
  
  for (const prime of PRIMES) {
    if (prime > m) break;
  
    let k = 0;
    
    while (m % prime === 0) {
      m = m / prime;
      k++;
    }
    
    res.push(puzzle(k));
  }
    
  return `(${res.join("")})`;
}
