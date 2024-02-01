const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const n = +input[0];
let x = 666;
let count = 1;

while (count !== n) {
  x++;

  if (String(x).includes('666')) count++;
}

console.log(x);
