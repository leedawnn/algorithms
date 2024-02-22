const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let answer = [];
  let arr = [];

  for (let i = 0; i < input.length; i++) {
    arr.push(input[i].trim().split(''));
  }

  let maxLength = Math.max(...arr.map((a) => a.length));

  for (let j = 0; j < maxLength; j++) {
    for (let i = 0; i < input.length; i++) {
      answer.push(arr[i][j]);
    }
  }

  console.log(answer.join(''));
}

solution(input);
