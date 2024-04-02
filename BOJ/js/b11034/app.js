const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

// 내가 한 풀이.. 이 경우에는 5 3 2 같은 입력이 들어오면 실패,,
// function changeNum(n1, n2) {
//   if (n1 < n2) {
//     n1 = n2 + 1;
//     return [n2, n1];
//   } else {
//     n2 = n1 + 1;
//     return [n1, n2];
//   }
// }

// function solution(input) {
//   const inputs = input.trim().split(' ').map(Number);
//   const arr = inputs.sort((a, b) => a - b);
//   let [a, b, c] = arr;

//   let answer = 0;

//   if (a < b && a < c && b < c) {
//     // 이동 가능 여부
//     while (c - b > 1) {
//       [a, b] = changeNum(a, b);
//       answer++;
//     }
//   } else {
//     console.log(0);
//   }
//   console.log(answer);
// }

function solution(input) {
  const arr = input
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  let [a, b, c] = arr;

  let gap1 = b - a;
  let gap2 = c - b;

  let answer = Math.max(gap1, gap2) - 1;

  console.log(answer);
}

input.forEach((el) => solution(el));
