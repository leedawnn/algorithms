const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const num = +input[0];

let result = [];

for (i = num - 100; i < num; i++) {
  const arr = String(i).split('').map(Number);
  const n = arr.reduce((prev, curr) => prev + curr); // 누적합

  if (i + n === num) {
    result.push(i);
  }
}

console.log(result.length ? Math.min(...result) : 0);
