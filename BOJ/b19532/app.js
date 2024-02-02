const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const arr = input[0].splice('').map(Number);

function solution(arr) {
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];
  const d = arr[3];
  const e = arr[4];
  const f = arr[5];

  const x = (c * e - b * f) / (a * e - b * d);
  const y = (c * d - a * f) / (b * d - a * e);

  console.log(`${x} ${y}`);
}

solution(arr);
