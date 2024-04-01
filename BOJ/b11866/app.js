const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

// TODO: 복습!

// 나의 풀이,, 7 6 반례를 통과하지 못함ㅠ

// function solution() {
//   const [n, k] = input;
//   const arr = Array.from({ length: n }, (_, i) => i + 1);

//   let answer = [];

//   for (let i = 0; i < n; i++) {
//     let temp = [];
//     let first = arr.slice(0, k);

//     temp = first;

//     let lastElement = temp.pop();
//     let rest = arr.slice(0, k - 1);

//     if (arr.length > k) {
//       answer.push(lastElement);

//       for (let i = 0; i < k; i++) {
//         arr.shift();
//       }

//       rest.forEach((el) => {
//         arr.push(el);
//       });
//     } else {
//       answer.push(lastElement);
//       rest.forEach((el) => answer.push(el));

//       break;
//     }
//   }

//   console.log(`<${answer.join(', ')}>`);
// }

// solution(input);

// 다른 풀이...
function solution() {
  const [n, k] = input;
  const arr = Array.from({ length: n }, (_, i) => i + 1);

  let answer = []; // 제거된 사람들을 저장할 배열
  let idx = 0; // 현재 위치를 추적할 인덱스

  while (arr.length > 0) {
    // 모든 사람이 제거될 때까지 반복
    idx = (idx + k - 1) % arr.length; // K번째 사람의 인덱스를 계산 (배열은 0부터 시작하므로 k-1을 더함)
    answer.push(arr.splice(idx, 1)[0]); // K번째 사람을 배열에서 제거하고, 제거된 사람을 answer에 추가

    console.log(arr);
  }

  console.log(`<${answer.join(', ')}>`);
}

solution(input);
