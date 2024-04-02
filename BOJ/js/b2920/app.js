const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

// const asce = [1, 2, 3, 4, 5, 6, 7, 8];
// let isAsce = true;

// const des = [8, 7, 6, 5, 4, 3, 2, 1];
// let isDes = true;

// for (let i = 0; i < input.length; i++) {
//   if (input[i] !== asce[i]) {
//     isAsce = false;
//   }
// }

// for (let i = 0; i < input.length; i++) {
//   if (input[i] !== des[i]) {
//     isDes = false;
//   }
// }

// if (isAsce) {
//   console.log('ascending');
// } else if (isDes) {
//   console.log('descending');
// } else {
//   console.log('mixed');
// }

// 숏코딩
console.log(input === '1 2 3 4 5 6 7 8' ? 'ascending' : input === '8 7 6 5 4 3 2 1' ? 'descending' : 'mixed');
