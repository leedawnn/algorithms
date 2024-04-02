const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ');

const a = Number(input[0].split('').reverse().join(''));
const b = Number(input[1].split('').reverse().join(''));

console.log(a > b ? a : b);
