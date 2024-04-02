let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

// b 재배열 할 경우,,
const n = Number(input[0]);
const a = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const b = input[2]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
let answer = 0;

for (let i = 0; i < n; i++) {
  answer += a[i] * b[i];
}

console.log(answer);
