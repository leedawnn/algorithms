const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim();

function solution(input) {
  const arr = input.split('');
  let answer = [];

  arr.forEach((el) => {
    if (el.charCodeAt() >= 65 && el.charCodeAt() <= 90) {
      answer.push(el);
    }
  });

  console.log(answer.join(''));
}

solution(input);
