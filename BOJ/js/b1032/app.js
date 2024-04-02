const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

// 이전 코드
// function solution(input) {
//   let arr = new Array(Number(input[0])).fill().map(() => []);
//   let answer = [];

//   for (let i = 1; i < Number(input[0]) + 1; i++) {
//     let str;
//     for (let j = 0; j < input[i].length; j++) {
//       str = input[i].trim().split('');
//     }

//     arr[i - 1] = str;
//   }

//   let minLength = Math.min(...arr.map((el) => el.length));

//   for (let j = 0; j < minLength; j++) {
//     let isSame = true;
//     let currentStr = arr[0][j];

//     for (let i = 1; i < Number(input[0]); i++) {
//       if (arr[i][j] !== currentStr) {
//         isSame = false;
//         break;
//       }
//     }

//     if (isSame) {
//       answer.push(currentStr);
//     } else {
//       answer.push('?');
//     }
//   }

//   console.log(answer.join(''));
// }

function solution(input) {
  const fileCount = Number(input[0]);
  let arr = new Array(fileCount).fill().map(() => []);

  // 파일 개수가 1인 경우, 바로 해당 파일 이름을 출력하고 종료
  if (fileCount === 1) {
    console.log(input[1].trim());
    return;
  }

  for (let i = 1; i <= fileCount; i++) {
    arr[i - 1] = input[i].trim().split(''); // 문자열을 문자 배열로 변환
  }

  let answer = [];

  for (let j = 0; j < arr[0].length; j++) {
    let isSame = true;
    let currentChar = arr[0][j];

    for (let i = 1; i < fileCount; i++) {
      if (arr[i][j] !== currentChar) {
        isSame = false;
        break;
      }
    }

    answer.push(isSame ? currentChar : '?');
  }

  console.log(answer.join(''));
}

solution(input);
