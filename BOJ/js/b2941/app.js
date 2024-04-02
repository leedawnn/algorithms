const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

// TODO: 복습!

// function solution(input) {
//   const alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
//   let count = 0;

//   let one = input.split('');
//   let two = [];
//   let three = [];

//   for (let i = 0; i < input.length; i += 2) {
//     if (i + 2 <= input.length) {
//       two.push(input.slice(i, i + 2));
//     }
//   }

//   for (let i = 0; i < input.length; i += 3) {
//     if (i + 3 <= input.length) {
//       three.push(input.slice(i, i + 3));
//     }
//   }
//   one.forEach((el) => {
//     if (alphabet.indexOf(el) >= 0) {
//       count++;
//       console.log(el);
//     }
//   });

//   two.forEach((el) => {
//     if (alphabet.indexOf(el) >= 0) {
//       console.log(el);
//       count++;
//     }
//   });

//   three.forEach((el) => {
//     console.log(alphabet.indexOf(el));
//     if (alphabet.indexOf(el) >= 0) {
//       console.log(el);
//       count++;
//     }
//   });

//   console.log(count);
// }

// solution(input);

function solution(input) {
  const alphabet = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];

  alphabet.forEach((pattern) => {
    input = input.split(pattern).join('A');
  });

  let count = input.length;

  console.log(count);
}

solution(input);
