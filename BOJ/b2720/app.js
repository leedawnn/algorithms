// const input = require('fs')
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
//   .toString()
//   .trim()
//   .split('\n')
//   .splice(1);

// 나의 풀이
// function solution(input) {
//   const n = input.length;
//   let answer = Array(n)
//     .fill()
//     .map(() => []);

//   const coins = [25, 10, 5, 1];

//   input.forEach((el, idx) => {
//     coins.forEach((coin) => {
//       const count = Math.floor(el / coin);
//       el %= coin;

//       answer[idx].push(count);
//     });
//   });

//   answer.forEach((el, idx) => {
//     answer[idx] = el.join(' ');
//   });

//   console.log(answer.join('\n'));
// }

// solution(input);

// 다른 풀이
const filePath = process.platform == 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

for (let i = 1; i < input.length; i++) {
  console.log(solution(input[i]));
}

function solution(change) {
  let count = [0, 0, 0, 0];
  const coins = [25, 10, 5, 1];

  for (let i = 0; i < coins.length; i++) {
    count[i] += Math.floor(change / coins[i]);
    change %= coins[i];
  }

  return count.join(' ');
}
