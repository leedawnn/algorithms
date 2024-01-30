const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' ').map(Number));

const cards = input[1];
const n = +input[0].shift(); // 카드 개수
const m = +input.shift(); // M

let sum = 0;
let maxSum = 0;

for (let i = 0; i < n - 2; i++) {
  for (let j = i + 1; j < n - 1; j++) {
    for (let k = j + 1; k < n; k++) {
      sum = cards[i] + cards[j] + cards[k];

      if (sum <= m && sum > maxSum) {
        maxSum = sum;
      }
    }
  }
}

console.log(maxSum);
