const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('');

function solution(input) {
  let answer = 10;

  for (let i = 0; i < input.length - 1; i++) {
    for (let j = i + 1; j <= i + 1; j++) {
      let temp = input[i];
      let curr = input[j];

      if (temp === curr) {
        answer += 5;
      } else {
        answer += 10;
      }
    }
  }

  console.log(answer);
}

solution(input);
