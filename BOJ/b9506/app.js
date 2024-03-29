// const input = require('fs')
//   .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
//   .toString()
//   .trim()
//   .split('\n')
//   .map(Number);

// // 나의 풀이
// function sol(input) {
//   let answer = '';
//   let divisor = [];

//   if (input > 0) {
//     let nums = Array.from({ length: input }, (_, index) => index + 1);

//     nums.forEach((el) => {
//       if (input % el === 0 && input !== el) {
//         divisor.push(el);
//       }
//     });
//   }

//   let sum = divisor.reduce((prev, curr) => prev + curr, 0);

//   divisor.forEach((el) => {
//     if (sum === input) {
//       answer = `${input} = ${divisor.join(' + ')}`;
//     } else {
//       answer = `${input} is NOT perfect.`;
//     }
//   });

//   return answer;
// }

// input.forEach((el) => console.log(sol(el)));

// 다른 사람 풀이
const nums = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let i = 0;

while (true) {
  let arr = [];
  let n = nums[i];

  if (n < 0) break;

  for (let j = 1; j < n; j++) {
    if (n % j === 0) {
      arr.push(j);
    }
  }

  let result = arr.reduce((a, b) => a + b, 0);

  if (n === result) {
    let ans = arr.join(' + ');
    console.log(`${n} = ${ans}`);
  } else {
    console.log(`${n} is NOT perfect.`);
  }

  i++;
}
