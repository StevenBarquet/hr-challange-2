/* eslint-disable no-return-assign */

// Source: https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true

function aVeryBigSum(ar: number[]): number {
  // Write your code here
  let sum = 0;
  ar.forEach( num => sum= sum + num);
  return sum;
}

function main() {
  console.log('---------- Cool Programing ----------\n');
  const testArray = [1, 2, 3, 4, 10, 11];
  const result = aVeryBigSum(testArray);
  console.log('Result: ', result);
}

main();
