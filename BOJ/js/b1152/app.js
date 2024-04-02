const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el) => el.split(' '));

const arr = input[0];

function solution(arr) {
  let answer = 0;

  arr.forEach((el) => {
    if (el.includes(' ')) {
      el.trim();
    }

    if (el !== '') answer++;
  });

  console.log(answer);
}

solution(arr);
