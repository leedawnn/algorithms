const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const arr = input.split(' ').map(Number);
  arr.sort((a, b) => a - b); // 오름차순...

  const [a, b, c] = arr;

  if (a === 0 && b === 0 && c === 0) {
    return;
  }

  if (a ** 2 + b ** 2 === c ** 2) {
    console.log('right');
  } else {
    console.log('wrong');
  }
}

input.forEach((el) => solution(el));
