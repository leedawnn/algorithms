const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

// 시간 초과....
// function solution(input) {
//   const [a, b, v] = input;
//   let day = 0;
//   let tree = 0;

//   while (true) {
//     tree += a;
//     day++;

//     if (v <= tree) {
//       console.log(day);
//       break;
//     }

//     tree -= b;
//   }
// }

// solution(input);

// 이것도 시간 초과....
// function solution(input) {
//   const [a, b, v] = input;
//   let day = 0;
//   let tree = 0;

//   for (let i = 0; i < 1000000000; i++) {
//     tree += a;
//     day++;

//     if (v <= tree) {
//       console.log(day);
//       break;
//     }

//     tree -= b;
//   }
// }

// solution(input);

// TODO: 복습!
function solution(input) {
  const [a, b, v] = input;
  const answer = Math.ceil((v - a) / (a - b) + 1);

  console.log(answer);
}

solution(input);
