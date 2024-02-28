const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

// 처음에 짠 코드......

// function solution(input) {
//   for (let i = 0; i < input.length; i++) {
//     let arr = input[i].trim().split('');
//     let mid = Math.floor(arr.length / 2);

//     let str1;
//     let str2;

//     if (arr[0] === arr[arr.length - 1] && arr.length > 2) {
//       let str = arr.join('');

//       if (arr.length % 2 === 0) {
//         str1 = str.slice(0, mid + 1);
//         str2 = str.slice(mid - 1);

//         if (str1.split('')[0] === '0') continue;

//         console.log(str1 === str2.split('').reverse().join('') ? 'yes' : 'no');
//       } else {
//         str1 = str.slice(0, mid + 1);
//         str2 = str.slice(mid);

//         if (str1.split('')[0] === '0') continue;

//         console.log(str1 === str2.split('').reverse().join('') ? 'yes' : 'no');
//       }
//     } else {
//       if (arr[0] === '0') continue;

//       console.log('no');
//     }
//   }
// }

// solution(input);

function solution(input) {
  for (let i = 0; i < input.length; i++) {
    let str = input[i].trim();

    if (str[0] === '0') continue;

    let mid = Math.floor(str.length / 2);
    let str1 = str.slice(0, mid);
    let str2 = str.length % 2 === 0 ? str.slice(mid) : str.slice(mid + 1);

    // 뒷부분 문자열을 뒤집어서 앞부분 문자열과 비교
    console.log(str1 === str2.split('').reverse().join('') ? 'yes' : 'no');
  }
}

solution(input);
