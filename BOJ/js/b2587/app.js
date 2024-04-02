const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function sol(input) {
  let answer = [];

  input = input.sort((a, b) => a - b);
  const sum = input.reduce((prev, curr) => prev + curr);

  answer.push(Math.floor(sum / input.length));
  answer.push(input[2]);

  answer.forEach((el) => console.log(el));
}

sol(input);
