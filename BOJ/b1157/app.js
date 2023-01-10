let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().trim();

let input = fs.readFileSync('./input.txt').toString().trim();
input = input.toUpperCase().split('');

function solution(input) {
  const answer = new Array(26).fill(0);

  for (let i = 0; i < input.length; i++) {
    answer[input[i].charCodeAt(0) - 65] += 1;
  }

  const max = Math.max(...answer);

  return answer.filter((el) => el === max).length === 1
    ? String.fromCharCode(answer.findIndex((el) => el === max) + 65)
    : '?';
}

console.log(solution(input));
